let runnerRegistrationEarly = false;
let runnerAge = 15;

let raceNumber = Math.floor(Math.random()*1000);

if (runnerRegistrationEarly === false) {
  raceNumber =+ 1000;
};

if (runnerRegistrationEarly && runnerAge >= 18) {
  console.log(raceNumber + ' You will race at 9:30 am');
} else if (runnerRegistrationEarly || runnerAge >= 18) {
  console.log(raceNumber + ' You will race at 11:00 am')
} else if (!runnerRegistrationEarly && runnerAge <= 18) {
  console.log(raceNumber + ' You will race at 12:30 am')
} else {
  console.log('See the registration desk!');
}
