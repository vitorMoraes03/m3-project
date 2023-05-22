import { type Product } from "./interfaces";
import { isSmallScreen } from "./smallerFunctions/isSmallScreen";
import { createBtnCounter } from "./smallerFunctions/createCartCounter";

const serverUrl = "http://localhost:3000";

export async function requestProducts(): Promise<Product[]> {
  const getData = await fetch(`${serverUrl}/products`);
  const resolvedData: Product[] = await getData.json();
  return resolvedData;
}

export class ProductObj implements Product {
  public id;
  public name;
  public price;
  public parcelamento;
  public color;
  public image;
  public size;
  public date;
  private readonly _templateElement: HTMLTemplateElement;
  private readonly _hostElement: HTMLDivElement;

  constructor(obj: Product) {
    this.id = obj.id;
    this.name = obj.name;
    this.price = obj.price;
    this.parcelamento = obj.parcelamento;
    this.color = obj.color;
    this.image = obj.image;
    this.size = obj.size;
    this.date = obj.date;
    this._templateElement = document.querySelector(
      ".template-card"
    ) as HTMLTemplateElement;
    this._hostElement = document.querySelector(
      ".products-container"
    ) as HTMLDivElement;
  }

  public renderProduct(): void {
    const templateContent = this._templateElement.content;
    const card = templateContent.querySelector(
      ".card-product"
    ) as HTMLDivElement;
    const name = templateContent.querySelector(
      ".card-name"
    ) as HTMLHeadingElement;
    const price = templateContent.querySelector(
      ".card-price"
    ) as HTMLHeadingElement;
    const parcelamento = templateContent.querySelector(
      ".parcelamento"
    ) as HTMLParagraphElement;
    const image = templateContent.querySelector(
      ".card-image"
    ) as HTMLImageElement;
    const btn = templateContent.querySelector(".btn-card") as HTMLButtonElement;

    if (this._templateElement != null && this._hostElement != null) {
      name.textContent = this.name;
      price.textContent = `R$ ${this.price.toString()}`;
      parcelamento.textContent = `${
        this.parcelamento[0]
      }x de R$${this.parcelamento[1].toFixed(2)}`;
      image.src = this.image;
      btn.id = `btn-${this.id}`;
      const importedNode = document.importNode(templateContent, true);
      this._hostElement.appendChild(importedNode);

      const allCards = document.querySelectorAll(".card-product");
      let lengthLimit;
      isSmallScreen() ? (lengthLimit = 3) : (lengthLimit = 5);
      if (allCards.length > lengthLimit) {
        card.classList.add("hidden");
      }
    } else {
      console.error("Produtos não encontrados.");
    }
    createBtnCounter(btn.id);
  }
}
