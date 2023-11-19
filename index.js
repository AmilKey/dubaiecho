import { webkit } from 'playwright';

const browser = await webkit.launch();
const newsPage = await browser.newPage();

await newsPage.goto('https://www.khaleejtimes.com/asia/uae/dubai');

await newsPage.screenshot({ path: `screenshot-${new Date().toISOString()}.png`, fullPage: true });

await browser.close();
