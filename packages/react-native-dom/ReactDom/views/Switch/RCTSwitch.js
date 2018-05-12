/**
 * @providesModule RCTSwitch
 * @flow
 */

import type { Frame } from "InternalLib";
import RCTView from "RCTView";
import type RCTBridge from "RCTBridge";
import CustomElement from "CustomElement";
import ColorArrayFromHexARGB from "ColorArrayFromHexARGB";
import Switch from "rndom-switch";

@CustomElement("rct-switch")
class RCTSwitch extends RCTView {
  bridge: RCTBridge;
  onChange: ?(payload: { value: boolean }) => void;
  childShadowRoot: ShadowRoot;
  platformSwitch: Switch;

  constructor(bridge: RCTBridge) {
    super(bridge);

    this.style.contain = "strict";

    this.platformSwitch = new Switch();
    this.platformSwitch.addEventListener(
      "change",
      this.handleChange.bind(this)
    );

    this.childShadowRoot = this.childContainer.attachShadow({ mode: "open" });
    this.childShadowRoot.appendChild(this.platformSwitch);
  }

  handleChange(event: {
    preventDefault: Function,
    detail: { value: boolean }
  }) {
    const {
      detail: { value }
    } = event;
    event.preventDefault();
    if (this.onChange) {
      this.onChange({ value });
    }
  }

  get frame(): Frame {
    return super.frame;
  }

  set frame(value: Frame) {
    super.frame = value;

    const { width, height } = value;
    this.platformSwitch.width = width;
    this.platformSwitch.height = height;
  }

  set disabled(value: boolean = false) {
    super.disabled = value;
    this.platformSwitch.disabled = value;
  }

  set value(value: boolean = false) {
    this.platformSwitch.value = value;
  }

  set tintColor(value: string) {
    this.platformSwitch.tintColor = value;
  }

  set onTintColor(value: string) {
    this.platformSwitch.onTintColor = value;
  }

  set thumbTintColor(value: string) {
    this.platformSwitch.thumbTintColor = value;
  }
}

export default RCTSwitch;
