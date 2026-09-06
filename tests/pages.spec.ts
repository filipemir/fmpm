import { expect, test } from '@playwright/test';

const routes = [
    { path: '/', title: /Filipe Miranda/ },
    { path: '/writing', title: /Posts/ },
    { path: '/reading', title: /Books/ },
    { path: '/now', title: /NOW/ }
];

for (const { path, title } of routes) {
    test.describe(path, () => {
        test('renders with JS enabled', async ({ page }) => {
            const consoleErrors: string[] = [];
            page.on('console', (msg) => {
                if (msg.type() === 'error') consoleErrors.push(msg.text());
            });
            await page.goto(path);
            await expect(page).toHaveTitle(title);
            await expect(page.locator('main').first()).not.toBeEmpty();
            expect(consoleErrors).toEqual([]);
        });

        test('renders with JS disabled', async ({ browser }) => {
            const context = await browser.newContext({
                javaScriptEnabled: false
            });
            const page = await context.newPage();
            await page.goto(path);
            await expect(page).toHaveTitle(title);
            await expect(page.locator('main').first()).not.toBeEmpty();
            await context.close();
        });
    });
}

test('post page renders and has body content', async ({ page }) => {
    await page.goto('/writing/hello-world');
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('article, main').first()).not.toBeEmpty();
});
