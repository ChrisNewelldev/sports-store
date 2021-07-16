
import Product from "./Models/Product.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
    /**@type {Product[]} */
    items = [
      new Product('//placebeard.it/200x200', 'Football', 10, 'I can catch it', 45),
      new Product('//placebeard.it/200x200', 'Soccerball', 12, 'I can kick it', 65),
      new Product('//placebeard.it/200x200', 'Baseball', 186, 'Signed by Nomar Garciapara', 3),
      new Product('//placebeard.it/200x200', 'Basketball', 110, 'I can put it in a basket', 45)
    ]

    cart = [

    ]

    currentMoney = 400
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
