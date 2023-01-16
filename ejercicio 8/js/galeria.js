/* Galería de Fotos */

var galeria = [
  {foto:'galeria1.jpg', texto: 'Imagen 1'}, /* posición 0 */
  {foto:'galeria2.jpg', texto: 'Imagen 2'}, /* posición 1 */
  {foto:'galeria3.webp', texto: 'Imagen 3'}, /* posición 2 */
  {foto:'galeria1.jpg', texto: 'Imagen 4'}, /* posición 3 */
  {foto:'galeria2.jpg', texto: 'Imagen 5'}, /* posición 4 */
  {foto:'galeria3.webp', texto: 'Imagen 6'}, /* posición 5 */
  {foto:'galeria1.jpg', texto: 'Imagen 7'}, /* posición 6 */
  {foto:'galeria2.jpg', texto: 'Imagen 8'}, /* posición 7 */
  {foto:'galeria3.webp', texto: 'Imagen 9'}, /* posición 8 */
  {foto:'galeria1.jpg', texto: 'Imagen 10'}, /* posición 9 */
  {foto:'galeria2.jpg', texto: 'Imagen 11'}, /* posición 10 */
  {foto:'galeria3.webp', texto: 'Imagen 12'}, /* posición 11 */
];

var indices=[0, 1, 2];
var intervalo = null;

function incrementarIndices(){
    for(var i=0; i<indices.length; i++){
        indices[i]++;
        if(indices[i] == galeria.length) indices[i] = 0;
    }
}

function decrementarIndices(){
    for(var i=0; i<indices.length; i++){
        indices[i]--;
        if(indices[i] < 0) indices[i] = galeria.length - 1; 
        /*Con una sola instrucción no son necesarias las llaves */
    }
}

function mostrarImagenes(){
    for(var i=0;i<indices.length;i++){
        var foto = document.getElementById('foto' + i);
        if (foto){
            foto.src="assets/img/"+galeria[indices[i]].foto;
        }
        var texto = document.getElementById('texto' + i);
        if(texto){
            texto.innerText = galeria[indices[i]].texto;
        }
    }
   
}

function anterior(){
    decrementarIndices();
    mostrarImagenes();
}

function proxima(){
    incrementarIndices();
    mostrarImagenes();
}

function desactivarMovimiento(){
    if(intervalo) clearInterval(intervalo);
}

function activarMovimiento(){
    if(intervalo == null) intervalo = setInterval(proxima, 3000);
}

function ActivarDesactivar(){
    var check = document.getElementById('mover');
    if(check){
        if(check.checked){
            activarMovimiento();
        }
        else{
            desactivarMovimiento();
        }
    }
}

mostrarImagenes();
activarMovimiento();


/*
var indice = 0;

function mostrarFoto(){
    var foto = document.getElementById('galeria_foto');
    if (foto){
        foto.src = "assets/img/" + galeria[indice].foto;
    }

    var texto = document.getElementById('galeria_texto');
    if (texto){
        texto.innerText = galeria[indice].texto;
    }
}

function anterior(){
    indice--;
    if(indice <0) indice=galeria.length-1;
    mostrarFoto();
}

function proxima(){
    indice++;
    if(indice == galeria.length) indice = 0;
    mostrarFoto();
}

mostrarFoto();
*/