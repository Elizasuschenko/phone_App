export default class phoneViewer extends Component{
    constructor({element}){
        this._element = element;
        this._render();
    }
    _render(){
        const phoneDetails = this._phoneDetails;
        this._element.innerHTML = `
            <div>

    <img class="phone" src="${phoneDetails.images[0]}">

    <button>Back</button>
    <button>Add to basket</button>


    <h1>${phoneDetails.name}</h1>

    <p>Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android™ 3.0 (Honeycomb) — the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you’ll enjoy HD video in a thin, light, powerful and upgradeable tablet.</p>

    <ul class="phone-thumbs">
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg">
      </li>
      <li>
        <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg">
      </li>
    </ul>

   
  </div>
        `
    }
}