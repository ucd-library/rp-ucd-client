import { LitElement } from 'lit-element';
import render from "./rp-graph.tpl.js";

import * as d3 from "d3";
import { reduce } from 'd3';

export default class RpGraph extends LitElement {

  static get properties() {
    return {
      nodes : {type: Array},
      height: {type: Number},
      width: {type: Number}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.nodes = [];
    this.links = [];

    this.width = 500;
    this.height = 500;
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(async () => {
      let resp = await fetch('http://localhost:8080/api/graph');
      this.nodes = await resp.json();
    }, 1000);
  }

  updated(props) {
    if( props.has('nodes') ) {
      this.init();
    }
    if( props.has('width') ) {
      this.style.width = this.width+'px';
    }
    if( props.has('height') ) {
      this.style.height = this.height+'px';
    }
  }

  init() {
    this.links = [];

    for( let node of this.nodes ) {
      node.id = node['@id'];

      if( !node.researchArea ) continue;
      if( !Array.isArray(node.researchArea) ) {
        node.researchArea = [node.researchArea];
      }

      for( let subject of node.researchArea ) {
        this.links.push({
          source : node.id,
          target : subject,
          value: 2
        });
      }
    }


    const simulation = d3.forceSimulation(this.nodes)
      .force("link", d3.forceLink(this.links).id(d => d.id))
      .force("charge", d3.forceManyBody().strength(-40))
      .force("x", d3.forceX())
      .force("y", d3.forceY());
      // .force("center", d3.forceCenter(this.width / 2, this.height / 2));

    const svg = d3.create("svg")
      // .attr("viewBox", [0, 0, this.width, this.height]);
      .attr("viewBox", [-this.width / 2, -this.height / 2, this.width, this.height]);

    const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(this.links)
      .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value));

    // const node = svg.append("g")
    //   .attr("stroke", "#fff")
    //   .attr("stroke-width", 1.5)
    //   .selectAll("circle")
    //   .data(this.nodes)
    //   .join("circle")
    //   .attr("r", 5)
    //   .attr("fill", this.color)
    //   .call(this.drag(simulation));

    var node = svg.selectAll(".node")
      .data(this.nodes)
      .enter().append("g")
      .attr("class", "node")
      .call(this.drag(simulation));

    var circle = node.append("circle")
      .attr("fill", this.color)
      .attr("r", 5);

    node.append("title")
      .text(d => d.id);


    const label = node.append("text")
      .attr("dy", ".35em")
      .text(this.getLabel);

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      // node
      //   .attr("cx", d => d.x)
      //   .attr("cy", d => d.y);

      circle
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });

      label
        .attr("x", function(d) { return d.x + 8; })
        .attr("y", function(d) { return d.y; });
    });

    // invalidation.then(() => simulation.stop());

    let ele = svg.node();
    ele.style.width = this.width+'px';
    ele.style.height = this.height+'px';
    
    let c = this.shadowRoot.querySelector('svg');
    if( c ) this.shadowRoot.removeChild(c);

    this.shadowRoot.appendChild(ele);
  }

  color(d) {
    if( d['@type'].includes('experts:person') ) {
      return 'blue';
    }
    return 'red';
  }

  getLabel(d) {
    if( d['@type'].includes('experts:person') ) {
      return d.hasContactInfo.givenName+' '+d.hasContactInfo.familyName;
    }
    return d.prefLabel || d.label;
  }

  drag(simulation) {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
    
    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
  }

}

customElements.define('rp-graph', RpGraph);
