function submitPayment() {

    var cardNumber = document.getElementById('cardNumber').value;
    

    cardNumber = cardNumber.replace(/\s/g, '');


    if (validateCardNumber(cardNumber)) {

      alert('Оплата успешно выполнена!');
    } else {

      alert('Неверный номер карты');
    }
  }

  function validateCardNumber(cardNumber) {

    if (!/^\d+$/.test(cardNumber)) {
      return false;
    }




    var sum = 0;
    var shouldDouble = false;


    for (var i = cardNumber.length - 1; i >= 0; i--) {
      var digit = parseInt(cardNumber.charAt(i));

      if (shouldDouble) {
  
        digit *= 2;


        if (digit > 9) {
          digit = digit % 10 + 1;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }


    return sum % 10 === 0;
  }