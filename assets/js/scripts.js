document.body.style.overflow = "hidden";

let less = document.querySelector('[counter-less]');
let more = document.querySelector('[counter-more]');
let reset = document.querySelector('[counter-reset]');
let value = document.querySelector('[counter-value]');

let counter = 0;
value.innerHTML = counter;

less.onclick = function() {
  if (counter <= 0) {
    alert("Il contatore è a zero");
  } else {
    counter -= 1;
    value.innerHTML = counter;
  }
}

more.onclick = function() {
  counter += 1;
  value.innerHTML = counter;
}

reset.onclick = function() {
  if (counter == 0) {
    alert("Il contatore è a zero");
  } else {
    if (confirm("Vuoi azzerare il contatore?")) {
      counter = 0;
      value.innerHTML = counter;
    }
  }
}
