import styles from "./site.html"

const sharedStyles = document.createElement('template');
sharedStyles.innerHTML = styles;
document.head.appendChild(sharedStyles.content);
