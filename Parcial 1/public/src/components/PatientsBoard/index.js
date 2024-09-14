import '..PatientCard/index.js'

class PatientList extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'});
        this.cards = []
    }

    connectedCallback(){
        this.render()

        const form = this.shadowRoot.querySelector('.patients-board')
        form.addEventListener("submit", (e)=>{
            e.preventDefault()
        
            const nombre = this.shadowRoot.querySelector('.input-nombre').value
            const ingreso = this.shadowRoot.querySelector('.input-ingreso').value
            const sintomas = this.shadowRoot.querySelector('.input-sintomas').value
       
            this.cards.push({nombre, ingreso, sintomas, state: false})

            this.addCard({nombre, ingreso, sintomas, state: false})
            
            form.reset()
        })
    }
    render(){
        this.shadowRoot.innerHTML = `
        <h2>Patients List</h2>
        <form class="patients-board">
            <input type="text" placeholder="Nombre" class="input-nombre" required>
            <input type="text" placeholder="Especie" class="input-especie" required>
            <input type="text" placeholder="Ingreso" class="input-ingreso" required>
            <button>Agregar Paciente</button>
        </form>
        <ul class="cards-container">
        </ul>
        `

        this.tasks.forEach(task => this.addTask(task))
    }

    addTask({nombre, especie, ingreso, state}){
        
        const CardsContainer = this.shadowRoot.querySelector('.cards-container')
        CardsContainer.innerHTML += `
        <card-item title="${nombre}" especie="${especie}" "ingreso= ${ingreso} state="${state}"></Card-item>
        `
    }
}

customElements.define('patient-list', PatientList)
export default PatientList