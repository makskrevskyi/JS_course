let age = prompt ("Enter your age:");
function ageCheck () {
    if (age <18 || age > 99 || age < 1) {
    console.log('You can`t enter the club, sorry');
    } else {
        console.log('Welcome to the club, buddy');
    } 
}
ageCheck()