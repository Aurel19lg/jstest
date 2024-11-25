document.getElementById('btnCalculer').onclick = function () {
    let poids = document.getElementById('poids').value ;
    let taille = document.getElementById('taille').value ;

    document.getElementById('poids').value = '';
    document.getElementById('taille').value = '';
    let imc = poids / (taille * taille);

    document.getElementById('imc').innerHTML = imc.toFixed(1);
    let tranche = '';
    if (imc < 18.5) {
      tranche = 'maigreur';
    } else if (imc < 25) {
      tranche = 'normal';
    } else if (imc < 30) {
      tranche = 'surpoids';
    } else if (imc < 35) {
      tranche = 'obésité';
    } else if (imc < 40) {
      tranche = 'obésité sévère';
    } else if (imc >= 40) {
      tranche = 'obésité morbide';
    }
    document.getElementById('tranche').innerHTML = tranche;
  };