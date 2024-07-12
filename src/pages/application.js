// @ts-check
// eslint-disable-next-line max-classes-per-file
import { LoginPage } from './Login.page';
import { InventoryPage } from './Inventory.page';
import { ShoppingCartPage } from './ShoppingCart.page';
import { BaseSwagLabPage } from './BaseSwagLab.page';

class Page {
    constructor(page) {
        this.page = page;
    }
}

export class Application extends Page {
    login = new LoginPage(this.page);

    inventory = new InventoryPage(this.page);

    shoppingCart = new ShoppingCartPage(this.page);

    baseSwagLab = new BaseSwagLabPage(this.page);
}
