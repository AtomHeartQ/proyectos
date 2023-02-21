import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-angular-project';
  name: string = 'Paco';
  imgUrl: string = "https://viajes.nationalgeographic.com.es/medio/2022/09/23/osaka_60a5b4f0_800x800.jpg"
  card1 ={
    title: "Soy el título 1",
    imgUrl: "https://a.cdn-hotels.com/gdcs/production101/d154/ee893f00-c31d-11e8-9739-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium", 
    pText: 'Soy un parrafo de muestra y no tengo nada mejor que decir',
    buttonText: 'Visitar'
  }
  card2 ={
    title: "Soy el título 2",
    imgUrl: "https://media.iatiseguros.com/wp-content/uploads/2018/05/04005529/bali-que-hacer-Templo-Ulun-Danu.jpg", 
    pText: 'Soy otro parrafo de muestra y tampoco tengo nada mejor que decir',
    buttonText: 'Visitar'
  }

  person1 = {
    name: 'Sara',
    age: 19
  }

  person2 = {
    name: 'Raquel',
    age: 17
  }

  person3 = {
    name: 'Marcos',
    age: 21
  }
}
