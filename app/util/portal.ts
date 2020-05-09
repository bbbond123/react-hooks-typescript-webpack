import React from 'react';
import ReactDOM from 'react-dom';
import uuid from './uuid';

const portal = (renderer: (close: Function) => JSX.Element, rootNode?: HTMLElement): void => {
  if (!renderer) return;

  /** CREATE DOM FOR MOUNT COMPONENT */
  const root = rootNode ? rootNode : document.body;
  const node = document.createElement('div');
  node.className = `react-portal-${uuid()}`;

  /** CREATE COMPONENT WITH CLOSE FUNCTION */
  const element = renderer(() => {
    if (node) {
      ReactDOM.unmountComponentAtNode(node);
      node.remove();
    }
  });

  /** MOUNT COMPONENT TO ROOT NODE */
  if (React.isValidElement(element)) {
    ReactDOM.render(element, node);
    root.appendChild(node);
  }
};

export default portal;
