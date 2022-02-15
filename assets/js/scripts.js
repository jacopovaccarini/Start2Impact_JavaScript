//per nascondere la barra di scorrimento laterale
document.body.style.overflow = "hidden";

//variabili oggetti documento
let less = document.querySelector('[counter-less]');
let more = document.querySelector('[counter-more]');
let reset = document.querySelector('[counter-reset]');
let config = document.querySelector('[counter-config]');
let number = document.querySelector('[counter-value]');

//impostazione iniziale del counter a zero
let counter = 0;
number.innerHTML = counter;

//click sul pulsante "-"
less.onclick = function() {
  if (counter == 0) {
    Swal.fire({ //messaggio avviso contatore già a zero
      title: "Il contatore è già a zero",
      showCancelButton: false,
      confirmButtonColor: "#22b14c"
    });
  } else {
    counter -= 1;
    number.innerHTML = counter;
  }
}

//click sul pulsante "+"
more.onclick = function() {
  counter += 1;
  number.innerHTML = counter;
}

//click sul pulsante "AZZERA"
reset.onclick = function() {
  if (counter == 0) {
    Swal.fire({ //messaggio avviso contatore già a zero
      title: "Il contatore è già a zero",
      showCancelButton: false,
      confirmButtonColor: "#22b14c"
    });
  } else {
    Swal.fire({ //messaggio di avviso prima di azzerare
      title: "Vuoi azzerare il contatore?",
      showCancelButton: false,
      showDenyButton: true,
      confirmButtonText: "SI",
      denyButtonText: "NO",
      confirmButtonColor: "#22b14c",
      denyButtonColor: "#ff0000"
    }).then((result) => {
      if (result.isConfirmed) { //controllo sul pulsante di conferma del messaggio
        counter = 0;
        number.innerHTML = counter;
        if (counter == 0) {
          Swal.fire({ //messaggio per confermare che il contatore è stato azzerato
            icon: "success",
            title: "Contatore azzerato con successo",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    });
  }
}

//click sul pulsante "CONFIGURA"
config.onclick = function() {
  Swal.fire({ //messaggio per impostare numero il numero di partenza
    title: 'Da quale numero deve partire il contatore?',
    input: 'number',
    inputLabel: 'Scrivi il numero',
    inputValue: counter,
    showCancelButton: true,
    confirmButtonColor: "#22b14c",
    cancelButtonColor: "#ff0000",
    inputValidator: (value) => {
      if (!value) { //controllo se il valore inserito è un numero
        return 'Devi inserire un numero!'
      } else if (Number(value) < 0) { // controllo se il numero inserito è maggiore o uguale a zero
        return 'Devi inserire un numero maggiore o uguale a zero!'
      } else {
        counter = Number(value);
        number.innerHTML = counter;
        if (counter == Number(value)) {
          Swal.fire({ //messaggio per confermare che il contatore è stato correttamente impostato
            icon: "success",
            title: `Contatore impostato a ${ counter } con successo`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    }
  });
}
