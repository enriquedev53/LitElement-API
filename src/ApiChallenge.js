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
      .container {
        display: flex;
        justify-content: center;
      }
      table {
        margin: 0 50px 0 50px;
        text-align: center;
      }
      table tr:nth-child(1) {
        background: rgb(30 41 59);
        color: #f2f2f2;
        font-weight: 900;
      }
      td {
        padding: 5px;
      }
      tr {
        background: #f2f2f2;
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
        <div class="container">
          <table>
          <tr>
          <td><h3>Id</h3></td>
          <td><h3>Nombre</h3></td>
          <td><h3>Protocolo</h3></td>
          </tr>
      ${this.resultado.map(e => html`

          <tr>
          <td>${e.buyer.id}</td>
          <td>${e.buyer.name}</td>
          <td>${e.id}</td>
          </tr>
        </table>
        </div>
      `)}
    `
  }
}
