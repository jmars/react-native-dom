/** @flow */
import prefixInlineStyles from "prefixInlineStyles";

class UIChildContainerView extends HTMLElement {
  constructor() {
    super();
    Object.assign(
      this.style,
      prefixInlineStyles({
        contain: "layout style size",
        position: "absolute",
        top: "0",
        left: "0",
        userSelect: "inherit",
        transformOrigin: "top left"
      })
    );
  }

  updateDimensions(width: number, height: number) {
    this.style.width = `${width}px`;
    this.style.height = `${height}px`;
  }
}

customElements.define("ui-child-containerView", UIChildContainerView);

export default UIChildContainerView;