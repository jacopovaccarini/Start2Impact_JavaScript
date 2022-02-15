//per nascondere la barra di scorrimento laterale
document.body.style.overflow = "hidden";


//creazione elementi del counter
let div_counter = document.querySelector('[counter]');

let div_less = document.createElement('div');
let att_less = document.createAttribute('counter-less');
div_less.className = "less";
div_less.setAttributeNode(att_less);
div_less.innerHTML = "<p>-</p>";
div_counter.append(div_less)

let div_value = document.createElement('div');
div_value.className = "value";
div_value.innerHTML = "<p counter-value>-</p>";
div_counter.append(div_value)

let div_more = document.createElement('div');
let att_more = document.createAttribute('counter-more');
div_more.className = "more";
div_more.setAttributeNode(att_more);
div_more.innerHTML = "<p>+</p>";
div_counter.append(div_more);


//variabili oggetti documento
let less = document.querySelector('[counter-less]');
let more = document.querySelector('[counter-more]');
let number = document.querySelector('[counter-value]');
let reset = document.querySelector('[button-reset]');
let config = document.querySelector('[button-config]');


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
      if (!value) { //controllo se il campo input è vuoto
        return 'Devi inserire un numero!'
      } else if (Number(value) < 0) { //controllo se il numero inserito è maggiore o uguale a zero
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
