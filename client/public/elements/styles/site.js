import styles from "./site.html"

const sharedStyles = document.createElement('template');
sharedStyles.innerHTML = styles;
document.head.appendChild(sharedStyles.content);

import { css } from 'lit-element';
export const colorStyles = css`
.text-primary {
  color: var(--tcolor-primary) !important;
}
.text-secondary {
  color: var(--tcolor-secondary) !important;
}`;
