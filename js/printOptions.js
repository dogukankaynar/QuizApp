const quiz = new Question();
const responseA = document.getElementById("cevapA");
const responseB = document.getElementById("cevapB");
const responseC = document.getElementById("cevapC");
const responseD = document.getElementById("cevapD");
const main = document.querySelector(".main");
class Print {}
Print.prototype.printQuestion = (sayac) => {
  main.textContent = quiz.sorular[sayac].soru;
  responseA.textContent = quiz.sorular[sayac].a;
  responseB.textContent = quiz.sorular[sayac].b;
  responseC.textContent = quiz.sorular[sayac].c;
  responseD.textContent = quiz.sorular[sayac].d;
};
Print.prototype.endQuiz = (score, yanliscevap) => {
  document.querySelector(".container").innerHTML += `
    <h2>Sınavınız Bitti</h2>
    <h2>${score} Doğru </h2>
    <h2>${yanliscevap} Yanlıs</h2>`;
};
