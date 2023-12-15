import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  hero = {
    name: '',
    power: 0,  // Default to a valid number
    
  };
  
 ajouter() {
    // Make sure 'power' is a valid number before sending the request
    let formData = new FormData();
    formData.append('name', this.hero.name);
    formData.append('power', this.hero.power.toString());
    formData.append('image', this.image);

    this.shared.createnewHero(formData)
        .subscribe(
            res => {
                this.hero = {
                    name: '',
                    power: 0,
                };
            },
            err => {
                console.log(err);
            }
        );
}

  image :any;
  UploadImage(e:any){
      this.image=e.target.files[0];
      console.log(this.image)
  }

  constructor(public shared: SharedService) { }
}
