import "./scss/style.scss";
import { requestProducts, ProductObj } from "./ts/products";
import { type Product } from "./ts/interfaces";
import { SelectOrder } from "./ts/selectOrder";

const products: Product[] = [];

requestProducts()
  .then((data) => {
    data.forEach((product) => {
      const productObj = new ProductObj(product);
      productObj.renderProduct();
      products.push(productObj);
    });
    // eslint-disable-next-line no-new
    new SelectOrder();
    console.log(products);
  })
  .catch((error) => {
    console.error(error);
  });
