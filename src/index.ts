import { test } from "./ts/test";
import "./scss/style.scss";

const serverUrl = "http://localhost:3000";

export async function getProducts() {
  const getData = await fetch(`${serverUrl}/products`);
  const resolvedData = await getData.json();

  console.log(resolvedData);
}

getProducts();

test();
console.log("Hello World!");
