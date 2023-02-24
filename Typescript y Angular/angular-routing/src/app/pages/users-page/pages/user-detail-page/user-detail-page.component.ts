import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss']
})
export class UserDetailPageComponent implements OnInit{
  
  idUser : any;
  actualUser: any;
  
  //SIMULACIÓN DE API
  userList = [
    {
      id:1, name:'Jose', role: 'professor', from: 'Portugal'
    },
    {
      id:2, name:'Pedro', role: 'student', from: 'Japón'
    },
    {
      id:3, name:'Laura', role:'student', from:'Jamaica'
    }
  ];

  constructor(private route: ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idUser = params.get('idUser');
      //SIMULACIÓN DE PETICIÖN API
      this.actualUser = this.findUser(this.idUser);
    })
  }

  findUser(idUser: any){
    return this.userList.find(user => user.id == idUser);
  }
}
