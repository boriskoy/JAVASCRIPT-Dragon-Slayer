var slaying = true;
var youHit = Math.floor(Math.random() * 2); 
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while(slaying) {
    /* Do this */
    slaying = false;
}

if(youHit === 1) {
    console.log("Great job!");
    slaying = false;
    if(totalDamage >= 4) {
        console.log("you slayed the dragon!");
        slaying = false;
            } else {
                youHit = Math.floor(Math.random() * 2);
            }
} else {
    console.log("The dragon kicked your ass, hombre!");
}