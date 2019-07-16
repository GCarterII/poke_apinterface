import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { ɵBrowserGetTestability } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Casa-de-Snorelax';
  pokemon_details = {};
  poke_id:number = 143
  getDetail(){
    let output:string = ''
    let abilityList = [];
    let pokeWithAbilitiy:object = {}
    let secondTempObservable = [];
    let tempObservable = this._httpService.getDetails(this.poke_id);
    tempObservable.subscribe(data => {
      console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
      console.log(`got information about the pokemon number ${[this.poke_id]}!`,data);
      console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
      // console.log(data.abilities[0].ability.name)
      console.log(`${(data.name).charAt(0).toUpperCase() + (data.name).slice(1)} is a pocket monster with the following abilities: ${abilityList}`);
      // console.log(data.abilities[0].ability.url)
      console.log(`Here is the information about his abilities:`);
      for(let i in data.abilities){
        // console.log(data.abilities[i].ability.name);
        pokeWithAbilitiy[data.abilities[i].ability.name] = [];
        // console.log(pokeWithAbilitiy);
        secondTempObservable[i] = this._httpService.getOtherMonByAbility(data.abilities[i].ability.url);
        secondTempObservable[i].subscribe(abilityData =>{
          for(let j in abilityData.pokemon){
            console.log('++++++++++++++++++++++++++++++++++')
            // console.log
            if(data.name != abilityData.pokemon[j].pokemon.name){
              pokeWithAbilitiy[abilityData.name].push(abilityData.pokemon[j].pokemon.name)
              // console.log(pokeWithAbilitiy)
            }
          }
          // console.log(`testing 1 2 3`,data);
          // console.log(secondTempObservable);
        })
        // console.log(`**************************************************************`)
        // console.log(pokeWithAbilitiy)
      }
      // console.log(`hahahahahahahahha`, abilityList)
      console.log(pokeWithAbilitiy)
    })
    
    
  }
  // getAbility(abilityLoc){
  //   let tempObservable = this._httpService.getOtherMonByAbility(abilityLoc);
  //   tempObservable.subscribe(data =>{
  //     console.log(`maybe this works?`, data)
  //   })
  // }
  constructor(private _httpService: HttpService){
    this.getDetail();
    // this.getAbility(`https://pokeapi.co/api/v2/ability/82/`);
  }
}
