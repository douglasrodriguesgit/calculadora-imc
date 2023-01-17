const calc = document.querySelector(".btn");

function calcImc() {
  const namePerson = document.querySelector("#name").value;
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector(".result");

  const imc = (weight / (height * height)).toFixed(1);

  if (namePerson !== "" && height !== "" && weight !== "") {
    let classification = "";

    if (imc < 18.5) {
      classification = " você está abaixo do peso";
    } else if (imc < 24.9) {
      classification = "parabéns seu peso é o ideal";
    } else if (imc < 29.9) {
      classification = "você está acima do peso";
    } else if (imc < 34.9) {
      classification = "você está com obesidade I";
    } else if (imc < 40) {
      classification = "você está com obesidade II";
    } else {
      imc < 40;
      classification = " cuidado!!! Você está com obesidade III";
    }

    result.textContent = `Olá ${namePerson} seu IMC é de ${imc} ${classification}`;
  } else {
    result.textContent = "Favor preencher todos os campos";
  }
}
calc.addEventListener("click", calcImc);
