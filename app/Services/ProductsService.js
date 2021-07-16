import { ProxyState } from "../AppState.js"
import Product from "../Models/Product.js"


class ProductsService{
addCart(productID) {
  let allItems = ProxyState.items
  debugger
  let foundItem = allItems.find(product=> product.id == productID) 

  if(ProxyState.cart.find(product=> product.id == productID)){
    let cartItem = cart.find(product=> product.id == productID)
    cartItem.stock++
  } else {
    //shallow copying, id connects it and it doesn't destroy the img on the front page
    let newCartItem = new Product(
      foundItem.img,
      foundItem.name,
      foundItem.price,
      foundItem.description,
      1,
      foundItem.id)
      ProxyState.cart = [...ProxyState.cart, newCartItem]
  }


}


}

export const productsService = new ProductsService()