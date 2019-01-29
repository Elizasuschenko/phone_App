export default class phoneCatalog {
    constructor({element, phones = [1, 2, 3]}){
        this._element = element;
        this._phones = phones;
        this._render()
    }
    _render(){
        this._element.innerHTML =  `
            <ul class="phones">
                ${this._phones.map(phone => 
                
                `
                    <li class="thumbnail">
                    <a href="#!/phones/${phone.id}" class="thumb">
                        <img alt="${phone.name}" src="${phone.imageUrl}">
                    </a>

                    <div class="phones__btn-buy-wrapper">
                        <a class="btn btn-success">
                            Add
                        </a>
                    </div>

                    <a href="#!/phones/motorola-xoom-with-wi-fi">${phone.name}</a>
                    <p>${phone.snippet}</p>
                </li>
                `
            
        ).join('')}
            </ul>
        `
    }
}