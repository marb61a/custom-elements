class Tooltip extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' ?';
    this.appendChild(tooltipIcon);

  }
}

// The name of the element has to have a dash
// Names should be as unique as possible in 
// order ro avoid clashing with other users custom elements
customElements.define('marb-tooltip', Tooltip);