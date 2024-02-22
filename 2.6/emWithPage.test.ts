import { Builder, Capabilities, WebDriver, WebElement } from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

import { employeePage } from "./employeeManagerPage";
const page = newEmployeePage(driver);

describe("Page Objects", () => {
    beforeEach(async () => {
        await page.navigate();
    });
    afterAll(async () => {
        await page.driver.quit();
    });
    test('changing bernice name', async () => {
        await page.click(page.bernice);
        await page.click(page.name);
        await page.setInput(page.name, "Corey Kheba");
        await page.click(page.saveBtn);
        let newName = await page.getText(page.employeeName);
        expect(newName).toContain('Corey Kheba');    
    });
    test('adding employee', async () => {
        await page.click(page.addEmployee);
        await page.click(page.newEmployee);
        await page.setInput(page.name, "Taliyah Kheba");
        await page.setInput(page.phone, '1234567891');
        await page.setInput(page.title, 'Physician');
        await page.click(page.saveBtn);
    });
    test('promoting employee', async () => {
        await page.click(page.phillip);
        await page.click(page.name);
        await page.setInput(page.title, 'VP Manager');
        await page.setInput(page.phone, '2314536475');
        await page.click(page.saveBtn);
    })
})


