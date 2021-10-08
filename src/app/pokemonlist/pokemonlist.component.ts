import { pokemonapi, Results } from './../interfaces';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { PokemonserviceService } from '../pokemonservice.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit,AfterViewInit {
  pokemons:pokemonapi | undefined;
  list: any;
  pokemonimg:any;
  firstLastButtons = true; 
  pageSlice:any;
  SortbyParam = '';
  SortDirection = 'asc';
  SearchValue = '';
  SearchField = '';
  query: string | undefined;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  //@ViewChild('paginator') paginator: MatPaginator | undefined;
 // obs: Observable<any> | undefined;
  //dataSource: MatTableDataSource<> = new MatTableDataSource<>();
  constructor(private pokemonservice:PokemonserviceService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    //getting the pokemon list from the service
      this.pokemonservice.getPokemonList().subscribe(data =>{
        this.pokemons = data;
         this.list= this.pokemons.results;
       //  this.changeDetectorRef.detectChanges();
         this.list.paginator= this.paginator;
        // this.obs = this.list.connect();
         //this.pageSlice=this.list.splice(0,3);
        // console.log(this.list)
        if (this.pokemons.results.length ){
          this.pokemons.results.forEach(pokemon => {
            pokemon.id = pokemon.url.split('/')[
              pokemon.url.split('/').length - 2
            ];
  
            this.getPokemonDetails(pokemon);
          });
        }
      })
  }

  getPokemonDetails(pokemon: Results) {
    //to get the pokemon details by name
    this.pokemonservice.getPokemonDetails(pokemon.name).subscribe(res=>{
    pokemon.details=res;
    this.pokemonimg= pokemon.details.sprites.front_default;
    })
  }

  onChangePage(pe:PageEvent) {
    //for pagination
    const startIndex=pe.pageIndex * pe.pageSize;
    let endIndex= startIndex + pe.pageSize;
    if(endIndex > this.list.length){
      endIndex= this.list.length;
    }
    this.pageSlice= this.list.slice(startIndex,endIndex)
  } 

  ngAfterViewInit() {
    this.list.paginator = this.paginator;
  }    

  onSortDirection() {
    //sorting 
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }

  onSearchFilter() {
    //search functionality
    this.SearchField = this.SearchValue;
  }

  onSearchFilterClear() {
    //clearing the search field
    this.SearchField = '';
    this.SearchValue = '';
  }

  @Input() set search(newSearch: string) {
    if (newSearch !== this.query) {
      this.query = newSearch;
    }
  }

  filterValues: any[] = [
    {value: 'name', viewValue: 'Name'},
    {value: 'height', viewValue: 'Height'},
    {value: 'weight', viewValue: 'Weight'}
  ];


}
