import { PokemondetailComponent } from './pokemondetail/pokemondetail.component';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes= [
  {path: '', component: PokemonlistComponent},
  {path: 'detail/:id',
          component: PokemondetailComponent,
          },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
