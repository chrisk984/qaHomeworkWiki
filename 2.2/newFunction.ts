export function myFunction(myNum: number): string {
    if (myNum == 15) {
        return 'true';
    } else if(myNum > 16) {
        return 'false';
    } else if (myNum < 25){
        return 'true';
    } else if (myNum > 18){
        return 'false';
    };
};


/* 
EN: Add your own function starting on line 20 
!Write a function that returns a movie when the user inputs movieOne - movieFive
!The movies are up to you use the 'writeIfElseStatment' example from class for help 
!Add expects to the test checking to make sure you are getting back the correct movie.
*/

export function blockBuster(movie: string): string {
    if (movie == "movie One") {
        return "Poor Things"; 
    } else if (movie == "movie Two") {
        return "saltBurn";
    } else if (movie == "movie Three") {
        return "The Holdovers"; 
    } else if (movie == "movie Four") {
        return "Killers Of The Flower Moon"; 
    } else if (movie == "movie Five") {
        return "Oppenheimer"; 
    }
        return `I'm Sorry We Do Not Carry ${"Oppenheimer"}'; 
    }
}