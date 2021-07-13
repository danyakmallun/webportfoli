const text = ["pelajar SMK Nu Ma'arif Kudus","Hamba Allah SWT"];
let text1 = 0;
let text2 = 0;
let text3 = "";
let text4 = "";

(function textEngetik (){
  if ( text1 == text.length){
    text1 = 0;
  }
    text3 = text[text1];
    text4 = text3.slice(0, ++text2);
    document.querySelector('.efek-ngetik').textContent= text4;

    setTimeout(textEngetik,300);

    if (text4.length == text3.length){
      text1++;
      text2 = 0;
    }
})();
