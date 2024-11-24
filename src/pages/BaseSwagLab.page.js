import { BasePage } from './Base.page';

export class BaseSwagLabPage extends BasePage {
    // header
    shoppingCart = this.page.getByTestId('shopping-cart-link');

    shoppingCartBadge = this.page.getByTestId('shopping-cart-badge');

    async openShoppingCart() {
        await this.shoppingCart.click();
    }
}
