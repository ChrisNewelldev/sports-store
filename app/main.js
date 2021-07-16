import ProductsController from "./Controllers/ProductsController.js";


class App {
  productsController = new ProductsController();
}

window["app"] = new App();
