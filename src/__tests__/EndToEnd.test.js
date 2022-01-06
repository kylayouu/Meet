import puppeteer from 'puppeteer';
import Event from '../Event';

describe('show/hide an events details', () => {
	let browser;
	let page;
	beforeAll(async () => {
    jest.setTimeout(30000);
		// jest.useFakeTimers('legacy')
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 250,
			ignoreDefaultArgs: ['--disable-extensions']
		});
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector(Event);
	});

	afterAll(() => {
		browser.close();
	});

	// Scenario 1
	test('An event element is collapsed by default', async () => {
		const eventDetails = await page.$('Event .event__Details');
		expect(eventDetails).toBeNull();
		browser.close();
	});

	// Scenario 2
	test('User can expand an event to see its details', async () => {
    await page.click('Event .details-btn');
    const eventDetails = await page.$('Event .event__Details');
    expect(eventDetails).toBeDefined();
    browser.close();
  });

	// Scenario 3
	test('User can collapse an event to hide its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
  });

})