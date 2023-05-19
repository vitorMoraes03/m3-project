import { type Product } from "./interfaces";

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
    if (this._templateElement != null && this._hostElement != null) {
      const templateContent = this._templateElement.content;
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

      name.textContent = this.name;
      price.textContent = `R$ ${this.price.toString()}`;
      parcelamento.textContent = `${
        this.parcelamento[0]
      }x de R$${this.parcelamento[1].toFixed(2)}`;
      image.src = this.image;

      const importedNode = document.importNode(templateContent, true);
      this._hostElement.appendChild(importedNode);
    } else {
      console.error("Produtos não encontrados.");
    }
  }
}

// export function renderProduct(
//   product: Product,
//   templateElement: HTMLTemplateElement,
//   hostElement: HTMLDivElement
// ): void {
//   if (templateElement != null && hostElement != null) {
//     const templateContent = templateElement.content;
//     const name = templateContent.querySelector(
//       ".card-name"
//     ) as HTMLHeadingElement;
//     const price = templateContent.querySelector(
//       ".card-price"
//     ) as HTMLHeadingElement;
//     const parcelamento = templateContent.querySelector(
//       ".parcelamento"
//     ) as HTMLParagraphElement;
//     const image = templateContent.querySelector(
//       ".card-image"
//     ) as HTMLImageElement;

//     name.textContent = product.name;
//     price.textContent = product.price.toString();
//     parcelamento.textContent = `${
//       product.parcelamento[0]
//     }x de R$${product.parcelamento[1].toFixed(2)}`;
//     image.src = product.image;

//     const importedNode = document.importNode(templateContent, true);
//     hostElement.appendChild(importedNode);
//   } else {
//     console.error("Produtos não encontrados.");
//   }
// }
