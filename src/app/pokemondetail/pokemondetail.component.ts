import { PokemonDetails, Results } from './../interfaces';
import { PokemonserviceService } from './../pokemonservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrls: ['./pokemondetail.component.css']
})
export class PokemondetailComponent implements OnInit {
pokemon: PokemonDetails | undefined;
pokemonname = 'Name';
id:number | undefined;
pokemonheight= 'Height';
pokemonweight = 'Weight';
pokemonid = 'Id';
pokemonforms = 'Forms'
  constructor(private route: ActivatedRoute,
    private router: Router, private pokemonservice: PokemonserviceService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.getPokemondetailsbyid(id);
    }   
  }

  getPokemondetailsbyid(id:number) {
    this.pokemonservice.getPokemonDetailsById(id).subscribe(res=>{
       this.pokemon= res;
   })
  }

  onBack(): void {
    this.router.navigate(['']);
  }

}
