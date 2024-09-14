import * as components from './components/indexPadre.js'

class AppContainer extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <h1>Añadir Paciente</h1>
        <patient-list></patient-list>
        `
    }
}

customElements.define('app-container', AppContainer)