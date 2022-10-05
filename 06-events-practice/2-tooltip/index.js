class Tooltip {
  static instance;

  element;


  pointerOver = event =>{
    const element = event.target.closest(`[data-tooltip]`)

    if(element){
      this.render(element.dataset.tooltip)
      document.addEventListener("pointermove", this.onPointerMove)
    }

  }
  pointerOut = () =>{
    this.remove()
    document.removeEventListener("pointermove", this.onPointerMove)
  }
  onPointerMove = event => {
    const left = event.clientX + 10;
    const top = event.clientY + 10;

    this.element.style.left = `${left}px`;
    this.element.style.top = `${left}px`;
  }

  constructor() {
    if (Tooltip.instance) {
      return Tooltip.instance;
    }

    Tooltip.instance = this;
  }

  initialize () {
    this.initEventListeners();
  }
  initEventListeners(){
    document.addEventListener("pointerover", this.pointerOver);
    document.addEventListener("pointerout", this.pointerOut)
  }

  render(html) {
    this.element = document.createElement('div');
    this.element.className = 'tooltip';
    this.element.innerHTML = html;

    document.body.append(this.element);
  }


  remove(){
    if(this.element){
      this.element.remove()
    }

  }
  destroy(){
    this.remove();
    this.element = null;
    this.subElements = {}
  }


}

export default Tooltip;
