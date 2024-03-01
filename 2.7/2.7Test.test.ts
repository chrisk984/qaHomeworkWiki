import { pageObject } from "./2.7PageObject";
const page = new pageObject(); 

class Intern {
   //create a class for interns that includes the name phone and title for the intern.
   name: string;
   phone: number;
   title: string;

   constructor(name: string, phone: number, title: string) {
      this.name = name,
      this.phone = phone,
      this.title = title
   }
}; 

let newInterns: Array<Intern> = [
   //create an array of Interns using your class 
   new Intern("Thierry", 1234998761, "CEO"),
   new Intern("Erin", 2345998762, "VP CEO"),
   new Intern("Elvis", 3234498763, "Engineer"),
   new Intern("tina", 1234998765, "Secretary"),
   new Intern("Gerry", 4321998766, "Acountant"),

];

let addInterns = async (newInterns) => {
   //create a function to add the interns from your array
   await page.click(page.addEm);
   await page.click(page.newEm);
   await page.setInput(page.namInp, newInterns.name); 
   await page.setInput(page.phoInp, newInterns.phone); 
   await page.setInput(page.titleInp, newInterns.title); 
   await page.click(page.saveBtn); 
   await page.driver.sleep(3000); 

};

test('can add the bake off crew',async () => {
    await page.navigate(); 
    await page.getElement(page.addEm); 
    for(let i= 0; i < newInterns.length; i ++){
        await addInterns(newInterns[i]); 
    }; 
    await page.driver.quit(); 
})