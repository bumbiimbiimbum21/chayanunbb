import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { TbAmulet } from '../model/tb-amulet';
import {Router,ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TbAmuletService {

  url ='https://localhost:44391/api/TbAmulets';
  constructor(private http:HttpClient,private router:Router) { }

  GetData(){
    return this.http.get<TbAmulet[]>(this.url);
  }

  createAmu(data) {
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.url, data)
        .toPromise()
        .then(
          res => {
            console.log(res);
            resolve(data);
          }
        );
    });
    return promise;
  }

  deleteAmu(amuletId: any) {
    let promise = new Promise((resolve, reject) => {
      let api = this.url + '/'+amuletId;
      this.http.delete(api)
        .toPromise()
        .then(
          res => {
            console.log(res);
            resolve(amuletId);
          }
        );
    });
    console.log(amuletId);
    return promise
  }


}
