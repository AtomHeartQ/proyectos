import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-hello-world',
  templateUrl: './input-hello-world.component.html',
  styleUrls: ['./input-hello-world.component.scss']
})
export class InputHelloWorldComponent {
  @Input() name = 'Albert';

  constructor(){}

  ngOnInit(): void{
    
  }
}
