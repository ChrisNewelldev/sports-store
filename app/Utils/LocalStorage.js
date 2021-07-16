import { ProxyState } from "../AppState.js";


export function saveState() {
  localStorage.setItem('SportsStore', JSON.stringify({
    pizzas: ProxyState.pizzas,
    toppings: ProxyState.toppings
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('SportsStore'))
  console.log(data)
  if (data != null) {
    ProxyState.pizzas = data.pizzas.map(p => new Pizza(p))
    ProxyState.toppings = data.toppings.map(t => new Topping(t))
  }

}