// * დავალება 3
// მომხარებელს შემოაქვს რაღაც რიცხვი.
// რა რიცხვსაც შემოიყვანს იმდენი რენდომული რიცხვი მოათავსეთ მასივში.
// მასვიში იპოვეთ უდიდესი და უმცირესი რიცხვები
//გამოიყვანეთ მასივის რიცხვების არითმეტიკული საშუალო
// ! არ გამოიყენოთ Math.min და Math.max

function costumerNum() {
  const randNum = Number(prompt("შეიყვანეთ შემთხვევითი რიცხვების რაოდენობა"));

  // დავამოწომოთ შეყვანილი რიცხვი (არარიცხვიერი ან უარყოფით რიცხვების შემოწმება)
  if (isNaN(randNum) || randNum <= 0) {
    alert("გთხოვთ შეიყვანოთ დადებით რიცხვი");
    return costumerNum(); // დაგვაბრუნებს შეყვანაზე სანამ სწორად არ შევიყვანთ
  }

  return randNum;
}

function getMinMax(numbers) {
  // შევამოწმოთ ცარიელია თუ არა შესავსები ველი
  if (numbers.length === 0) {
    throw new Error("შეავსეთ ველი"); // გამოვიტანოთ შეცდომა ცარიელ ველზე
  }

  // მივანიჭოთ მინიმალური და მაქსიმალური მნიშვნელობა პირველ ელემენტს
  let minValue = numbers[0];
  let maxValue = numbers[0];
  let sum = 0; //შემოგვაქვს ჯამი

  // დავიწყოთ მეორე ელემენტიდან
  for (let i = 1; i < numbers.length; i++) {
    //შევამოწმოთ მოცემული რიცხვი ნაკლებია თუ არა მინიმალურ რიცხვზე
    if (numbers[i] < minValue) {
      minValue = numbers[i]; // თუ ნაკლებია განვაახლოთ მინიმალური რიცხვი
    } else if (numbers[i] > maxValue) {
      // აქ მოწმდება მოცემული რიცხვი მეტი თუა მაქსიმალურზე
      maxValue = numbers[i]; // თუ მეტია ვანახლებთ მაქსიმალურს
    }
    sum += numbers[i];
  }
  const average = sum / numbers.length; // არითმეტიკული საშუალოს გამოთვლის ფორმულა

  return { min: minValue, max: maxValue, average: average }; //დავაბრუნოთ მინიმალური, მაქსიმალური და საშუალო მნიშვნელობები
}

// შემთხვევითი რიცხვების გენერირება და მინიმალურის და მაქისმალურის პოვნა
const randNum = costumerNum();
const numbers = [];
for (let i = 0; i < randNum; i++) {
  numbers.push(Math.floor(Math.random() * 1000) + 1); //რიცხვები 1 დან 1000 მდე
}

const { min, max, average } = getMinMax(numbers);

console.log("მასივი:", numbers);
console.log("მინიმუმი:", min);
console.log("მაქსიმუმი:", max);
console.log("არითმეტიკული საშუალო:", average);
