const applyStyles = (el: any, styles: Partial<CSSStyleDeclaration>) => {
  Object.entries(styles).forEach(([key, val]) => {
    el.style[key] = val;
  });
};

const applyDefaultStyles = (element: HTMLElement) => {
  applyStyles(element, {
    border: "1px solid gray",
    minHeight: "200px",
    padding: "5px",
    outline: "none"
  });
};

export default applyDefaultStyles;
