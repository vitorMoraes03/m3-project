import "./scss/style.scss";
import { requestProducts } from "./ts/products";
import { type Product } from "./ts/interfaces";

const products: Product[] = [];

requestProducts()
  .then((data) => {
    products.push(...data);
    console.log(products);
  })
  .catch((error) => {
    console.error(error);
  });
