import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DigimonService } from 'src/app/shared/services/digimon.service';

@Component({
  selector: 'app-add-digimon',
  templateUrl: './add-digimon.component.html',
  styleUrls: ['./add-digimon.component.scss']
})
export class AddDigimonComponent implements OnInit {

  addDigimonForm: any;

  levelList: any = ['Fresh', 'In Training', 'Rookie', 'Champion', 'Ultimate', 'Mega'];
  imageUrl: any;

  constructor (private formBuilder: FormBuilder, private digimonService: DigimonService){

  }

  ngOnInit(): void {
    this.addDigimonForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      level: ['', [Validators.required]],
      img: ['', [Validators.required]]
    })
  }

  file(file: any){
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = (e: any) => res(e.target.result);
      reader.onerror = (e:any) => rej(e);
      reader.readAsDataURL(file);
    });
  };

  async preview(event: any){
    const file = event.target.files[0];
    const url = await this.file(file);
    this.imageUrl = url;
  }

  addDigimon(){
    const newDigimon = {...this.addDigimonForm.value, img: this.imageUrl}
    this.digimonService.postDigimon(newDigimon).subscribe();
  }
}
