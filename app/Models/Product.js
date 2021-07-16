import { generateId } from "../Utils/GeneratedID.js"

export default class Product {

  constructor (img, name, price, description, stock, id = generateId()) {
    this.img=img
    this.name=name
    this.price=price
    this.description=description
    this.stock=stock
    this.id=id
  } 

  get Template (){
    return `
    
                <img src=${this.img} alt="item">
                <h3>${this.name}</h3>
                <h3>${this.price}</h3>
                <p>${this.description}</p>
                <p>Stock:  ${(this.stock==0) ? 'Not available' : this.stock+' <span><button type="button" class="btn btn-primary" onclick="app.productsController.addCart(`'+this.id+'`)">Add To Cart</button></span>'}</p>
                
           
    `


  }

  removeStock(quantity){
      this.stock -= quantity //conditional here..if quantity is greater than stock throw and error
  }
}


