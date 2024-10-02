let day = prompt("Enter a day of the week: "); //Let the user enter a day of the week
day = day.toLocaleLowerCase(); //to make the enter day to lower case
console.log("Enter a day of the week: " + day); //to print

//to switch statement to map each day to a specific task
switch(day){
    case "monday":
        console.log(`Your task on ${day} is: Finish your assignment.`);
        break;
    
    case "tuesday":
        console.log(`Your task on ${day} is: Attend your class.`);
        break;
    
    case "wednesday":
        console.log(`Your task on ${day} is: Do your laundry.`);
        break;
    
    case "thursday":
        console.log(`Your task on ${day} is: Attend your 10am class.`);
        break;

    case "friday":
        console.log(`Your task on ${day} is: Take a rest.`);
        break;
    
    default:
        console.log("Invalid input");
}
