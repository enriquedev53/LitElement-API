import { LitElement } from "lit-element";

export class GetData extends LitElement {
  static get properties() {
    return {
      url: {type: String},
      method: {type: String}
    }
  }

   firstUpdated() {
     this.traerDatos();
  }

  enviarDatos(data) {
    this.dispatchEvent(new CustomEvent('ApiData', {
      detail: {data}, bubbles: true, composed: true
    }))
  }

  traerDatos() {
    fetch(this.url, { method: this.method })
    .then((resolve) => {
      if(resolve.ok) return resolve.json()
      return Promise.reject(resolve)
    })
    .then((data) => {
      this.enviarDatos(data);
    })
    .catch((error) => {
      console.log("Algo salió mal", error);
    })
  }

}

customElements.define('get-data', GetData);
