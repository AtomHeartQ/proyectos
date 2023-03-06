import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-galley',
  templateUrl: './characters-galley.component.html',
  styleUrls: ['./characters-galley.component.scss']
})
export class CharactersGalleyComponent implements OnInit {

  @Input() characters: any;

  ngOnInit(): void {
    
  }

}
