
import phoneCatalog from './componence/phone-catalog.js';
import phoneViewer from "./componence/phone-viewer.js";
import phoneServices from "./services/phone-service.js";

export default class phoneMain {
    constructor({element}){
        this._element = element;
        this._render();
        this._catalog = new phoneCatalog({
            element: document.querySelector('[data-phone="phone-catalog"]'),
            phone: phoneServices.getAll(),
        });
        this._phoneViewer = new phoneViewer({
            element: document.querySelector('[data-phone="phone-viewer"]'),
            phoneDetail: phoneServices.getId()
        })
    }
    _render(){
        this._element.innerHTML = `
        
            <div class="row">

      <!--Sidebar-->
      <div class="col-md-2">
        <section>
          <p>
            Search:
            <input>
          </p>

          <p>
            Sort by:
            <select>
              <option value="name">Alphabetical</option>
              <option value="age">Newest</option>
            </select>
          </p>
        </section>

        <section>
          <p>Shopping Cart</p>
          <ul>
            <li>Phone 1</li>
            <li>Phone 2</li>
            <li>Phone 3</li>
          </ul>
        </section>
      </div>

      <!--Main content-->
      <div data-phone="phone-catalog"></div>
      <div data-phone="phone-viewer" hidden></div>
    </div>
        `

    }
}