import { ProxyState } from "../AppState.js"
import { productsService } from "../Services/ProductsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _draw() {
  let template = ''
  let items = ProxyState.items
  items.forEach(item=> {
    template+= `<div class="col-md-3 p-2">`
    template+=item.Template
    template+= `</div>`
  })
  document.getElementById('product').innerHTML = template
}


export default class ProductsController{


 
    constructor () {
      ProxyState.on['items', _draw]
      //ProxyState.on['cart', saveStates]
      loadState()
      _draw()
    }

    addCart(productID) {
      productsService.addCart(productID)
    }

}