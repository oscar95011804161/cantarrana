
class Nav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.loadContent();
    }

    async loadContent() {
        try {
            const response = await fetch('./js/nav.html'); // Asegúrate de la ruta correcta
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue correcta');
            }
            const html = await response.text();
            this.shadowRoot.innerHTML = html;
        } catch (error) {
            console.error('Error al cargar el menú nav:', error);
            this.shadowRoot.innerHTML = `<p>Error al cargar el menú nav</p>`;
        }
    }
}
// Definimos el custom element
customElements.define("nav-one", Nav);

//--------------------------------------------------------------------------------

class Component1 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.loadContent(); // Cargar el contenido cuando el componente se crea
    }

    async loadContent() {
        try {
            // Cargar el HTML del componente
            const response = await fetch('./js/components/componente1.html');
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue correcta');
            }
            const html = await response.text();
            
            // Reemplazar los marcadores de título y texto en el HTML cargado
            //titulo y texto predeterminado es en caso que no se ponga valores a los atributos en el index.html
            const titulo = this.getAttribute('titulo') || 'Título predeterminado';
            const texto = this.getAttribute('texto') || 'Texto predeterminado.';

            // Insertar el contenido en el Shadow DOM
            this.shadowRoot.innerHTML = html.replace('<titulo-dinamico></titulo-dinamico>', `<h1 class="text-center py-5">${titulo}</h1>`)
                                              .replace('<texto-dinamico></texto-dinamico>', `<p>${texto}</p>`);
        } catch (error) {
            console.error('Error al cargar el componente 1:', error);
            this.shadowRoot.innerHTML = `<p>Error al cargar el componente 1</p>`;
        }
    }
}

// Definir el custom element
customElements.define('componente-one', Component1);



//---------------------------------------------------------------------------

class component2 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.loadContent();
    }

    async loadContent() {
        try {
            const response = await fetch('./js/components/componente2.html'); // Asegúrate de la ruta correcta
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue correcta');
            }
            const html = await response.text();
            this.shadowRoot.innerHTML = html;
        } catch (error) {
            console.error('Error al cargar el menú component2:', error);
            this.shadowRoot.innerHTML = `<p>Error al cargar el menú component2</p>`;
        }
    }
}
// Definimos el custom element
customElements.define("componente-two", component2);

//--------------------------------------------------------------------------------

//---------------------------------------------------------------------------

class component3 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.loadContent();
    }

    async loadContent() {
        try {
            const response = await fetch('./js/components/componente3.html'); // Asegúrate de la ruta correcta
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue correcta');
            }
            const html = await response.text();
            this.shadowRoot.innerHTML = html;
        } catch (error) {
            console.error('Error al cargar el menú component3:', error);
            this.shadowRoot.innerHTML = `<p>Error al cargar el menú component3</p>`;
        }
    }
}
// Definimos el custom element
customElements.define("componente-three", component3);

//--------------------------------------------------------------------------------