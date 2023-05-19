import "./scss/style.scss";
import { requestProducts, ProductObj } from "./ts/products";
import { type Product } from "./ts/interfaces";

const products: Product[] = [];

requestProducts()
  .then((data) => {
    data.forEach((product) => {
      const productObj = new ProductObj(product);
      productObj.renderProduct();
      products.push(productObj);
    });
    console.log(products);
  })
  .catch((error) => {
    console.error(error);
  });
