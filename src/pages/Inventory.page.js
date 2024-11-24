import { BasePage } from './Base.page';

export class InventoryPage extends BasePage {
    url = '/inventory.html';

    headerTitle = this.page.getByTestId('title');

    inventoryItems = this.page.getByTestId('inventory-item');

    addToCartButtonFirstProduct = this.page.getByTestId(
        'add-to-cart-sauce-labs-backpack',
    );

    async addFirstProductToCart() {
        await this.addToCartButtonFirstProduct.click();
    }
}
