/* Galería de Fotos */

var galeria = [
  {foto:'galeria1.jpg', texto: 'Imagen 1'}, /* posición 0 */
  {foto:'galeria2.jpg', texto: 'Imagen 2'}, /* posición 1 */
  {foto:'galeria3.webp', texto: 'Imagen 3'}, /* posición 2 */
];

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