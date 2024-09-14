class PatientCard extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'});
        }
        
        static get observedAttributes(){
            return ['nombre', 'especie', 'ingreso', 'sintomas', 'state']
        }
    
        connectedCallback(){
            this.render()
        }
    
        attributeChangedCallback(propName, oldValue, newValue){
            this.render()
            if (oldValue !== newValue) {
                this[propName] = propName === 'state' ? newValue === 'true' : newValue
                this.render()
            }
        }
    
        toggleTask(){
            this.state = !this.state
            this.render()
        }
    
        render(){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/PatientCard/styles.css">
            <li class=${this.state ? "completed" : "Atentido"}>
                <h3>${this.nombre}</h3>
                <p>${this.especie}</p>
                <p>${this.ingreso}</p>
                <p>${this.sintomas}</p>
                <p>${!this.state ? "Pendiente" : "Atendido"}</p>
                <input type="checkbox" ${this.state ? "checked" : ""} class="card-checkbox">
            </li>
            `
            
        const checkbox = this.shadowRoot.querySelector('.card-checkbox')
        checkbox.addEventListener('change', () => this.toggleTask())
    }
}

customElements.define('patient-card', PatientCard)
export default PatientCard
 