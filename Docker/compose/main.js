document.getElementById('suma').addEventListener('click', () => {
  let sum1 = document.getElementById('sum1').value;
  let sum2 = document.getElementById('sum2').value;

  let resultado = sum1 + sum2;

  document.getElementById('result').innerHTML = resultado;

  document.querySelector('.alert').classList.remove('collapse');
  document.querySelector('.alert').classList.add('show');
});
