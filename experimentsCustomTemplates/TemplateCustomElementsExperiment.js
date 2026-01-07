class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = ` <h1>Header Experiment File!</h1> `
    }
}

class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = ` <h1>Footer Experiment File!</h1> `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
