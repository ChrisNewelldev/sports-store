import { ProxyState } from "../AppState.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _draw() {
  let template = ''
  let items = ProxyState.items
  items.forEach(item=> {
    template+=`<div class="col-md-12 d-flex p-2">`
    template+=item.Template
    template+=`</div>`
  })
  document.getElementById('cart-items').innerHTML = template
}


export default class ProductsController{


 
    constructor () {
      ProxyState.on['cart', _draw]
      //ProxyState.on['cart', saveStates]
      loadState()
      _draw()
    }

}