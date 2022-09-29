export default class ColumnChart {
  subElements = {};
  chartHeight = 50;

  constructor({data = [], label = '', value = 0, link = '', formatHeading = data => data} = {}){
    this.data = data;
    this.label = label;
    this.value = formatHeading(value);
    this.link = link;


    this.render();
  }
  getLink(){
    return this.link
      ? `<a class="column-chart__link" href="${this.link}">View all</a>`
      : "";
  }

  getColumns(){
    const maxValue = Math.max(...this.data);
    const scale = this.chartHeight / maxValue;

    return this.data
      .map(item => {
        const percent = ((item / maxValue) * 100).toFixed(0);

        return `<div style="--value: ${Math.floor(
          item * scale
        )}" data-tooltip="${percent}%"></div>`;
      })
      .join("");
  }

  get template(){

    return `
        <div class="column-chart column-chart_loading" style="--chart-height: ${ this.chartHeight }">
          <div class="column-chart__title "> Total ${this.label} ${this.getLink()}</div>
          <div class="column-chart__container">
              <div data-element="header" class="column-chart__header">${"$"}${this.value}</div>
              <div data-element="body" class="column-chart__chart">${this.getColumns(this.data)}</div>
          </div>
        </div>
    `;
  }

  render(){
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.template;
    this.element = wrapper.firstElementChild

    if (this.data.length) {
      this.element.classList.remove("column-chart_loading");
    }

    this.subElements = this.getSubElements()


  }
  getSubElements() {
    const result = {};
    const elements = this.element.querySelectorAll("[data-element]");

    for (const subElement of elements) {
      const name = subElement.dataset.element;

      result[name] = subElement;
    }

    return result;
  }

  update(data = []) {
    if (!this.data.length) {
      this.element.classList.add("column-chart__loading");
    }
    this.data = data;

    this.subElements.body.innerHTML = this.getColumns()
  }
  remove() {
    if (this.element) {
      this.element.remove();
    }
  }
  destroy() {
    this.remove();
    this.element = null;
    this.subElements = {};
  }
}

