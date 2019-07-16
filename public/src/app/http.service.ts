import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  getDetails(id:number) {
    return this._http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }
  getOtherMonByAbility(abid:string){
    // return this._http.get(`https://pokeapi.co/api/v2/ability/${abid}`)
    return this._http.get(`${abid}`)
  }
  constructor(private _http: HttpClient) { }
}
