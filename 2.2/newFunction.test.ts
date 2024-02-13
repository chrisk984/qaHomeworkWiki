//!Here we are importing our function called myFunciton from our newFunction.ts file so we can use it in our test.
import { myFunction } from "./newFunction";

describe("myFunction", () => {
  it("returns the word 'true' if I pass the function the number 5", () => {
    expect(myFunction(5)).toBe("true");
  });
  it("returns the word 'false' if I pass in a number less than 5", () => {
    expect(myFunction(1)).toBe("false");
  });
  it("returns the word 'big' if I pass in a numbewr greater than 5", () => {
    expect(myFunction(100)).toBe("true");
  });
  it("returns the word 'negative' if a negative number is passed in", () => {
    expect(myFunction(-1)).toBe("false");
  });
});


import { blockBuster } from "./newFunction";

describe('Testing Block Buster', () => {
  it('should return the movie set for MovieOne', () => {
    expect(blockBuster("Movie One")).toBe("Poor Things"); 
  }); 
  it("should return the movie set for movie two", () => {
    expect(blockBuster('Movie Two')).toBe("SaltBurn"); 
  }); 
  it("should return the movie set for movie three", () => {
    expect(blockBuster('Movie Three')).toBe("The Holdovers"); 
  }); 
  it("should return the movie set for movie four", () => {
    expect(blockBuster("Movie Four")).toBe("Killers Of The Flower Moon"); 
  });
  it("should return the movie set for movie five", () => {
    expect(blockBuster("Movie Five")).toBe("Oppenheimer"); 
  }); 
  it("should return the default", () => {
    expect(blockBuster("Oppenheimer")).toBe("I'm sorry we do not carry Oppenheirmer"); 
  });
}); 