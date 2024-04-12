//video oynatma ekranında F12 tuşuna basarak console açın. daha sonra bu kodu yapıştrın. Otomatik izler ve ilerler.

var divElements = document.getElementsByClassName('sc-cabOPr fhJwVK');
var currentIndex = 0; //videonun başlayacağı sayı sen 0 yaz
var delay = 8000; //izleme süresi (bende 8 saniyede yeşil tik oluyo sende olmazsa yükselt)

function clickNextDiv() {
  if (currentIndex < divElements.length) {
    var currentDiv = divElements[currentIndex];
    currentDiv.click();
    currentIndex++;
    console.log(currentIndex + '/'+ divElements.length + " TIKLANDI!");
    setTimeout(clickNextDiv, delay);
  }
}

clickNextDiv();


//anket varsa anket çözen bot.
var radioButtons = document.querySelectorAll('input[type="radio"]');

for (var i = 0; i < radioButtons.length; i++) {
  if (radioButtons[i].value == 816 || radioButtons[i].value == 821) {
    radioButtons[i].click();
  }
}
