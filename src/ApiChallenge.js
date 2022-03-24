import { LitElement, html, css } from 'lit';
import './components/GetData'

export class ApiChallenge extends LitElement {
  static get properties() {
    return {
      resultado: { type: Array },
    };
  }

  static get styles() {
    return css`
      table {

        margin: 0 50px 0 50px
      }
      td {
        border: 1px solid black;
        width: 25%;
      }
      tr {

      }
    `;
  }

  constructor() {
    super();
    this.resultado = [];
    this.addEventListener('ApiData', (e) => {
      this.resultado = e.detail.data.results;
      console.log(e.detail.data.results)
    })
  }

  render() {
    return html`
      <get-data url="https://api.datos.gob.mx/v2/Releases_SFP" method="GET" /></get-data>
      ${this.dataTemplate}
    `;
  }

  // <p>${e.buyer.name}</p>

  get dataTemplate() {
    return html`
        <table>
          <tr>
          <td><h3>Id</h3></td>
          <td><h3>Nombre</h3></td>
          <td><h3>Descripcion</h3></td>
          </tr>
      ${this.resultado.map(e => html`

          <tr>
          <td>${e.buyer.id}</td>
          <td>${e.buyer.name}</td>
          <td>${e.contracts.description}</td>
          </tr>
        </table>
      `)}
    `
  }
}
