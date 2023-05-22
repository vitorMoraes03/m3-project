import "./scss/style.scss";
import { requestProducts, ProductObj } from "./ts/products";
import { type Product } from "./ts/interfaces";
import { SelectOrder } from "./ts/selectOrder";
import { addBtnLoadMore } from "./ts/smallerFunctions/btnLoadMore";

const products: Product[] = [];

requestProducts()
  .then((data) => {
    data.forEach((product) => {
      const productObj = new ProductObj(product);
      productObj.renderProduct();
      products.push(productObj);
    });
    SelectOrder.getInstance();
    addBtnLoadMore();
    console.log(products);
  })
  .catch((error) => {
    console.error(error);
  });

