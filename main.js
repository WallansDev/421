function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let dice1 = getRandomInt(1, 6);
let dice2 = getRandomInt(1, 6);
let dice3 = getRandomInt(1, 6);

let resTab = [dice1, dice2, dice3];
resTab.sort(function (a, b) {
  return b - a;
});

var res = document.getElementById("res");
console.log(resTab.join(""));
if (resTab.join("") == "421") {
  res.innerHTML = "" + resTab.join("") + ". Bravo, c'est gagné !";
} else {
  res.innerHTML =
    "" + resTab.join("") + ". c'est perdu, vous pouvez toujours retenter";
}
var diceImg1 = document.getElementById("dice1");
diceImg1.src = "./img/" + dice1 + ".png";
var diceImg2 = document.getElementById("dice2");
diceImg2.src = "./img/" + dice2 + ".png";
var diceImg3 = document.getElementById("dice3");
diceImg3.src = "./img/" + dice3 + ".png";
