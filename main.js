var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];
planets.reverse;
let gravity = ('');
let selection = document.getElementById('planets')
    // 1. Populate the dropdown element with the data found in the planets array.
    // The value of each option should be the planet's name.
    // Use the following built-in methods:
    // `.forEach` `document.createElement` `document.getElementById` `.appendChild`


planets.forEach(function(planetInfo) {
    let selectedPlanet = document.getElementById('planets');
    let opt = document.createElement('option');
    opt.text = planetInfo[0];
    opt.value = planetInfo[0];
    opt.id = planetInfo[0];
    selectedPlanet.appendChild(opt);
    // let sel_opn = $('#planets');
    // let option = document.createElement('option');
    // console.log("this is planetInfo[0]: " + world[0]);
    //  console.log("this is planetInfo[1]: " + world[1]);
})

//function calculateWeight(weight, planetName) {
// 2. Write the code to return the correct weight
function calculateWeight(userWeight, planetName) {
    for (let i = 0; i < planets.length; i++) {
        if (planetName === planets[i][0]) {
            var gravity = planets[i][1];
            console.log(gravity);
        }
    }
    return userWeight * gravity;
}

//let select = document.getElementById('planets');
//let button = document.getElementById('calculate-button');
// console.log("1a hello there");
//button.onclick = function() {
//let selectedOptions = select.selectedOptions;
// let selectedOption = selectedOptions[1];
// let gravity = selectedOption.value;
//let result = userWeight * gravity;
//const selectedOptions = select.selectedOptions;
//console.log('a this is selectedOptions: ' + selectedOptions);
//const selectedOption = selectedOptions[1];
// console.log('b this is selectedOption: ' + selectedOption);
//const gravity = selectedOption;
//let planetID = selectedOption.text;
//console.log('d this is text: ' + text);
// }
//};
// 7. Set the calculate-weight button's onclick method to use the handleClickEvent function.
//function handleClickEvent(e) {
function handleClickEvent() {
    // 3. Create a variable called userWeight and assign the value of the user's weight.
    let userWeight = document.getElementById('user-weight').value;
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
    let planetName = document.getElementById('planets').value;
    // 5. Create a variable called result and assign the value of the new calculated weight.
    let result = calculateWeight(userWeight, planetName);
    Math.round(result)
        // 6. Write code to display the message shown in the screenshot.
    $('#output').html('If you were on  ' + planetName + ', you would weigh ' + result + 'lbs!');
    // document.getElementById('output').innerHTML('If you were on  ' + planetName + ', you would weigh ' + result + 'lbs!');
}
const calculateButton = document.getElementById('calculate-button');
calculateButton.addEventListener('click', handleClickEvent);
// }
// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)