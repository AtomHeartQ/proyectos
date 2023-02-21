import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-over-age',
  templateUrl: './over-age.component.html',
  styleUrls: ['./over-age.component.scss']
})
export class OverAgeComponent implements OnInit{
@Input() person: any;

constructor(){

}
ngOnInit(): void {
    
}
}
