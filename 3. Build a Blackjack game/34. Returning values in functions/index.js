let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d
function getTotalRaceTime() {
    if (player1Time < player2Time) {
        return player2Time
    } else if (player2Time < player1Time) {
        return player1Time
    } else {
        return player2Time
    }
}

let totalRaceTime = getTotalRaceTime()
console.log(totalRaceTime)
// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out



