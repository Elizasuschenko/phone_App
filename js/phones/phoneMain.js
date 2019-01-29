import phoneCatalog from './componence/phone-catalog.js';
import phoneViewer from './componence/phone-viewer.js';
import phoneService from './services/phone-service.js';





export default class phoneMain{
    constructor({element}){
        this._element = element;
        this._render();
        this._catalog = new phoneCatalog({
            element: document.querySelector('[data-component = "catalog"]'),
            phones: phoneService.getAll()
        });
        this._viewer = new phoneViewer({
            element: document.querySelector('[data-component = "viewer"]')
        });
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
        <div class="col-md-10" >
            <div data-component = "catalog"></div>
            <div data-component = "viewer" hidden></div>

        </div>
    </div>
        `
    }
}