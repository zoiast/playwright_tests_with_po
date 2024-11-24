import { BasePage } from './Base.page';

export class InventoryPage extends BasePage {
    url = '/inventory.html';

    headerTitle = this.page.getByTestId('title');

    inventoryItems = this.page.getByTestId('inventory-item');

    sortDropdown = this.page.getByTestId('product-sort-container');

    addToCartButtonFirstProduct = this.page.getByTestId(
        'add-to-cart-sauce-labs-backpack',
    );

    async addFirstProductToCart() {
        await this.addToCartButtonFirstProduct.click();
    }

    async sortBy(optionValue) {
        await this.sortDropdown.selectOption(optionValue);
    }
}
