const createComponent = ({
  tagName, className, value, onClick, parentNode,
}) => {
  if (!tagName) {
    throw new Error('Component should have tagName');
  }
  const node = document.createElement(tagName);
  if (className) {
    node.className = className;
  }
  if (value) {
    node.textContent = value;
  }
  if (parentNode) {
    parentNode.append(node);
  }
  if (onClick) {
    node.onclick = onClick;
  }
  return node;
};

export { createComponent };
