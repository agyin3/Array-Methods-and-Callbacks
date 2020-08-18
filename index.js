import { fifaData } from './fifa.js';
// console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let finals = fifaData.filter(game => game.Year === 2014 && game.Stage == 'Final')[0]
console.log(finals)
console.log(`${finals["Away Team Name"]}: ${finals["Away Team Goals"]}`)
console.log(`${finals["Home Team Name"]}: ${finals["Home Team Goals"]}`)
if(finals["Away Team Goals"] > finals["Home Team Goals"]){
    console.log(`Winner: ${finals["Away Team Name"]}`)
}else {
    console.log(`Winner: ${finals["Home Team Name"]}`)
}


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    return data.filter(game => game.Stage === "Final")

};

console.log(getFinals(fifaData))

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals, data) {

    let years = getFinals(data).map(game => game.Year)
    return years

};

// console.log(getYears(getFinals, fifaData))

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals, data) {

    let winners = getFinals(data).map(game => {
        if(game["Home Team Goals"] === game["Away Team Goals"]){
            if(game["Win conditions"].includes(game["Home Team Name"])){
                return game["Home Team Name"]
            }else{
                return game["Away Team Name"]
            }
        }else if(game["Home Team Goals"] > game["Away Team Goals"]){
            return game["Home Team Name"]
        }else{
            return game["Away Team Name"]
        }
    })

    return winners

};

// console.log(getWinners(getFinals, fifaData))

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears, data) {
    let winners = getWinners(getFinals, data)
    let years = getYears(getFinals, data)

    winners.forEach((winner, index) => (
        console.log(`In ${years[index]}, ${winner} won the world cup!`)
    ))

    return { winners, years }
};

getWinnersByYear(getWinners, getYears, fifaData);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    let goals = data.map(game => {
        return {
            home: game["Home Team Goals"], 
            away: game["Away Team Goals"]
        }
    })

    let avgGoals = goals.reduce((accum, game, index, array) => {
        if(index === array.length - 1){
            return {home: +(accum.home / array.length).toFixed(1), away: +(accum.away / array.length).toFixed(1)}
        }else{
            return {home: accum.home + game.home, away: accum.away + game.away}
        }
    }, {home: 0, away: 0})

    return avgGoals
};

console.log(getAverageGoals(fifaData))

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
