const gonder = document.getElementById("gonder");
const startQuiz = document.getElementById("startQuiz");
const answers=document.querySelector('.answers');
const nextQuestion=document.getElementById('gönder');
const sinav = new Question();
const print = new Print();
let sayac = -1;
let score=0;
let yanliscevap=0;


startQuiz.addEventListener("click", removebutton);
function removebutton() {
  startQuiz.parentElement.remove();
  //createQuiz();
  gonderSoru();
  answers.addEventListener('click',check);
  
}




function check(e) {
    console.log(e.target.lastChild.textContent)
    if(e.target.lastChild.textContent==sinav.sorular[sayac].dogruCevap){
        score++;
        console.log('scorunuz '+score)
        console.log('cevap Dogru')
        gonderSoru()
    }
    else{
        yanliscevap++;
        console.log('Yanlis cevap '+yanliscevap )
        gonderSoru()
    }
}

//  nextQuestion.addEventListener('click',gonderSoru)
function gonderSoru() {
  sayac++;
  if(sayac<sinav.sorular.length){
    print.printQuestion(sayac);
   
  }
  else {
      console.log('sinav bitti')
      answers.remove();
      main.remove();
      print.endQuiz(score,yanliscevap);
  }
}