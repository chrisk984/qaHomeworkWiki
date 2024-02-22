import {By, until, WebDriver, WebElement} from 'selenium-webdriver';

export class employeePage {
    driver: WebDriver;
    url: string = 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html
    bernice: By = By.name('employee1');
    name: By = By.name('nameEntry');
    addEmployee: By = By.name('addEmployee');
    newEmployee: By = By.xpath('//li[test()="New Employee"]');
    phone: By = By.name('phoneEntry');
    title: By = By.name('titleEntry');
    phillip: By = By.name('employee3');
    saveBtn: By = By.id('saveBtn');
    employeeName: By = By.name('employeeName');

    constructor(driver: WebDriver, url: string){
        this.driver = driver;
        this.url = url;
    };
async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.bernice));
};
async getElement(elementBy: By): Promise<WebElement> {
    await this.driver.wait(until.elementLocated(elementBy));
    let element = await this.driver.findElement(elementBy);
    await this.driver.wait(until.elementIsVisible(element));
    return element;
};
async sendKeys(elementBy: By, keys: any) {
    await this.driver.wait(until.elementsLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys);
};
async setInput(elementBy: By, keys: any): Promise<void>{
    let input = await this.getElement(elementBy);
    await input.clear();
    return input.sendKeys(keys);
};
async search(searchItem: string) {
    return this.setInput(this.bernice,`${this.bernice}\n`);
};
async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).getText();
};
async getResults() {
    return this.getText(this.Results);
};

};