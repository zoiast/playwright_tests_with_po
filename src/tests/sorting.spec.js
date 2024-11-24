import { test, expect } from '../fixtures/base';

test.describe('sorting invertory page', () => {
    test('sorting name A-Z', async ({ page, app }) => {
        await app.login.navigate('/');
        await app.login.performLogin('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(app.inventory.url);

        await app.inventory.sortBy('az');

        await expect(app.inventory.inventoryItems.nth(0).getByTestId('inventory-item-name')).toHaveText('Sauce Labs Backpack');
    });

    test('sorting name Z-A', async ({ page, app }) => {
        await app.login.navigate('/');
        await app.login.performLogin('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(app.inventory.url);

        await app.inventory.sortBy('za');

        await expect(app.inventory.inventoryItems.nth(0).getByTestId('inventory-item-name')).toHaveText('Test.allTheThings() T-Shirt (Red)');
    });

    test('sorting Price (low to high)', async ({ page, app }) => {
        await app.login.navigate('/');
        await app.login.performLogin('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(app.inventory.url);

        await app.inventory.sortBy('lohi');

        await expect(app.inventory.inventoryItems.nth(0).getByTestId('inventory-item-name')).toHaveText('Sauce Labs Onesie');
    });

    test('sorting Price (high to low)', async ({ page, app }) => {
        await app.login.navigate('/');
        await app.login.performLogin('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(app.inventory.url);

        await app.inventory.sortBy('hilo');

        await expect(app.inventory.inventoryItems.nth(0).getByTestId('inventory-item-name')).toHaveText('Sauce Labs Fleece Jacket');
    });
});
