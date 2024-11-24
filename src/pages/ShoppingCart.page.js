import { BasePage } from './Base.page';

export class ShoppingCartPage extends BasePage {
    url = '/cart.html';

    headerTitle = this.page.getByTestId('title');

    inventoryItems = this.page.getByTestId('inventory-item');

    removeButtonFirstProduct = this.page.getByTestId(
        'remove-sauce-labs-backpack',
    );

    async removeFirstProductFromCart() {
        await this.removeButtonFirstProduct.click();
    }
}
