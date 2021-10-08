import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {pokemonapi, PokemonDetails} from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class PokemonserviceService {
  pokemonApi= "https://pokeapi.co/api/v2/pokemon";

  constructor(private http:HttpClient) {
   }

   
   getPokemonList():Observable<pokemonapi>{
     return this.http.get<pokemonapi>(this.pokemonApi);
   }

   getPokemonDetails(name: string): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(`${this.pokemonApi}/${name}`);
    }

  getPokemonDetailsById(id:number):Observable<PokemonDetails>{
    return this.http.get<PokemonDetails>(`${this.pokemonApi}/${id}`);
  }
  
}
