import { isSmallScreen } from "./smallerFunctions/isSmallScreen";

export class SelectOrder {
  private static _instance: SelectOrder;
  private readonly _templateElementDesktop: HTMLTemplateElement;
  private readonly _templateElementMobile: HTMLTemplateElement;
  private readonly _titleContainer: HTMLDivElement;

  constructor() {
    this._templateElementDesktop = document.querySelector(
      "#template-filter-order-desktop"
    ) as HTMLTemplateElement;
    this._templateElementMobile = document.querySelector(
      "#template-filter-order-mobile"
    ) as HTMLTemplateElement;
    this._titleContainer = document.querySelector(
      "#title-container"
    ) as HTMLDivElement;
    isSmallScreen() ? this.renderMobile() : this.renderDesktop();
  }

  public static getInstance(): SelectOrder {
    if (this._instance != null) {
      return this._instance;
    }
    this._instance = new SelectOrder();
    return this._instance;
  }

  private renderDesktop(): void {
    if (this._templateElementDesktop != null) {
      const templateContent = this._templateElementDesktop.content;
      const importedNode = document.importNode(templateContent, true);
      this._titleContainer.appendChild(importedNode);
    }
  }

  private renderMobile(): void {
    if (this._templateElementMobile != null) {
      const templateContent = this._templateElementMobile.content;
      const importedNode = document.importNode(templateContent, true);
      this._titleContainer.appendChild(importedNode);
    }
  }
}
