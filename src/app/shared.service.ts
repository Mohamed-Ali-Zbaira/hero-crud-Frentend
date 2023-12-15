import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }
  private Url='https://hero-crud-backend.onrender.com/'

  createnewHero(hero:any){
     return this.http.post(this.Url+'hero/create',hero)
  }

  getallHero(){
    return this.http.get(this.Url+'hero/all')
  }

  deletehero(id:any){
    return this.http.delete(this.Url+'hero/supprimer/'+id)
  }

  getbyid(id:any){
    return this.http.get(this.Url+'hero/getbyid/'+id)
  }

  update(id:any,hero:any){
    return this.http.put(this.Url+'hero/update/'+id,hero)
  }
}
