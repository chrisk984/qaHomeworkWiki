//LOOPS CLASSES ARRAYS AND SELENIUM
//!first step is importing everything we need from selenium-webdriver
import { Builder, Capabilities, By, until, WebDriver, WebElement } from "selenium-webdriver";

const chromedriver = require("chromedriver"); 
const driver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

class Employee {
  // Write a class that holds the name, phone, and title for the employee.
  name: string;
  phone: number;
  title: string;

  constructor(name:string, phone:number, title:string) {
    this.name = name;
    this.phone = phone;
    this.title = title;
  }

} 

let employee: Array<Employee> = [
  //Create an array of four employees using your class.
    new Employee("Corey Kheba", 5463452423, "Engineer"),
    new Employee("Taliyah Harris", 23142536476, "Operator Manager"),
    new Employee("Arnisha Howard", 7652346574, "Inspector"),
    new Employee("Thierry Mwamba", 9875462345, "Senior Engineer") 
]

const addEmployee: By = By.name("addEmployee");
const newEmployee: By = By.xpath('//li[text() = "New Employee"]');
const nameInput: By = By.name("nameInput");
const phoneInput: By = By.name("phoneInput");
const titleInput: By = By.name("titleInput");
const saveBtn: By = By.id("saveBtn");
let myFunc = async (employees) => {
   //Create a function to add an employee.
   await driver.findElement(addEmployee).click();
   await driver.findElement(newEmployee).click();
   await driver.findElement(nameInput).clear();
   await driver.findElement(nameInput).sendKeys(employees.name);
   await driver.findElement(phoneInput).clear();
   await driver.findElement(phoneInput).sendKeys(employees.phone);
   await driver.findElement(titleInput).clear();
   await driver.findElement(titleInput).sendKeys(employees.title);
   await driver.findElement(saveBtn).click();
}; 

describe("should add employees to employee manager", () => {
    test("can add employees using myFunc", async () => {
        await driver.get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"); 
        for(let i = 0; i < employee.length; i++) {
            await myFunc(employee[i]); 
        }; 
        await driver.sleep(3000); 
        await driver.quit(); 
    });
});

