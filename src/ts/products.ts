import { type Product } from "./interfaces";

const serverUrl = "http://localhost:3000";

export async function requestProducts(): Promise<Product[]> {
  const getData = await fetch(`${serverUrl}/products`);
  const resolvedData: Product[] = await getData.json();
  return resolvedData;
}
