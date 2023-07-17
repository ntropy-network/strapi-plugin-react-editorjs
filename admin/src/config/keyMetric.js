class KeyMetric {
  static get toolbox() {
    return {
      title: "Key metric",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="32" y="48" width="192" height="136" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="184" x2="192" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="184" x2="64" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="120" x2="96" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="104" x2="128" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="88" x2="160" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="48" x2="128" y2="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
    };
  }

  constructor({ data }) {
    this.data = data;
  }

  render() {
    console.log(this.data);

    const wrapper = document.createElement("div");
    const valueField = document.createElement("input");
    const labelField = document.createElement("input");
    const isBlockWrapper = document.createElement("div");
    const isBlock = document.createElement("input");
    const isBlockLabel = document.createElement("label");

    valueField.placeholder = "Value";
    valueField.id = "value";
    valueField.value = this.data && this.data.value ? this.data.value : "";

    labelField.placeholder = "Label";
    labelField.id = "label";
    labelField.value = this.data && this.data.label ? this.data.label : "";

    isBlock.id = "isBlock";
    isBlock.type = "checkbox";
    isBlock.name = "isBlock";
    isBlock.checked =
      this.data && this.data.isBlock ? this.data.isBlock : false;

    isBlockLabel.innerText = "Show as block (full width)";
    isBlockLabel.for = "isBlock";
    isBlockLabel.htmlFor = "isBlock";

    isBlockWrapper.style.display = "flex";
    isBlockWrapper.style.gap = "8px";
    isBlockWrapper.appendChild(isBlock);
    isBlockWrapper.appendChild(isBlockLabel);

    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.gap = "8px";
    wrapper.style.alignItems = "stretch";
    wrapper.style.textAlign = "left";
    wrapper.style.justifyContent = "flex-start";
    wrapper.appendChild(valueField);
    wrapper.appendChild(labelField);
    wrapper.appendChild(isBlockWrapper);

    return wrapper;
  }

  save(blockContent) {
    const valueField = blockContent.querySelector("#value");
    const labelField = blockContent.querySelector("#label");
    const isBlock = blockContent.querySelector("#isBlock");

    return {
      value: valueField.value,
      label: labelField.value,
      isBlock: isBlock.checked,
    };
  }
}

export default KeyMetric;
