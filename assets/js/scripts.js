document.body.style.overflow = "hidden";

let less = document.querySelector('[counter-less]');
let more = document.querySelector('[counter-more]');
let reset = document.querySelector('[counter-reset]');
let config = document.querySelector('[counter-config]');
let number = document.querySelector('[counter-value]');

let counter = 0;
number.innerHTML = counter;

less.onclick = function() {
  if (counter == 0) {
    Swal.fire({
      title: "Il contatore è già a zero",
      showCancelButton: false,
      confirmButtonColor: "#22b14c"
    });
  } else {
    counter -= 1;
    number.innerHTML = counter;
  }
}

more.onclick = function() {
  counter += 1;
  number.innerHTML = counter;
}

reset.onclick = function() {
  if (counter == 0) {
    Swal.fire({
      title: "Il contatore è già a zero",
      showCancelButton: false,
      confirmButtonColor: "#22b14c"
    });
  } else {
    Swal.fire({
      title: "Vuoi azzerare il contatore?",
      showCancelButton: false,
      showDenyButton: true,
      confirmButtonText: "SI",
      denyButtonText: "NO",
      confirmButtonColor: "#22b14c",
      denyButtonColor: "#ff0000"
    }).then((result) => {
      if (result.isConfirmed) {
        counter = 0;
        number.innerHTML = counter;
        if (counter == 0) {
          Swal.fire({
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

config.onclick = function() {
  Swal.fire({
    title: 'Da quale numero deve partire il contatore?',
    input: 'number',
    inputLabel: 'Scrivi il numero',
    inputValue: counter,
    showCancelButton: true,
    confirmButtonColor: "#22b14c",
    cancelButtonColor: "#ff0000",
    inputValidator: (value) => {
      if (!value) {
        return 'Devi inserire un numero!'
      } else if (Number(value) < 0) {
        return 'Devi inserire un numero maggiore di zero!'
      } else {
        counter = Number(value);
        number.innerHTML = counter;
        if (counter == Number(value)) {
          Swal.fire({
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
