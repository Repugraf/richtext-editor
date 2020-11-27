import applyDefaultStyles from "./defaultStyles";

class Editor {
  public rootDiv = document.createElement("div");

  constructor(initialContent?: string) {
    if (initialContent) this.rootDiv.innerHTML = initialContent;
    this.rootDiv.contentEditable = "true";
    applyDefaultStyles(this.rootDiv);
  }

  public mount(el: Node) {
    el.appendChild(this.rootDiv);
  }

  public getFullContent() {
    return this.rootDiv.innerHTML;
  }

  public destroy() {
    this.rootDiv.remove();
  }
}

export default Editor;
