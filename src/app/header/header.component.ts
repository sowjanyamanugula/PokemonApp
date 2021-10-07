import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*search!: string;
  @Output() searchChange = new EventEmitter();
  selectedValue: string | undefined;

  filterValues= [
    {value: '10', viewValue: '10'},
    {value: '20', viewValue: '20'},
    {value: '50', viewValue: '50'}
  ];

  name = '';
  height='';
  weight='';

  sortValues=[
    {value: 'Asc to Desc', viewValue: 'Asc to Desc'},
    {value: 'Desc to Asc', viewValue: 'Desc to Asc'},
  ]

  searchValue(search: string){
    if (search === '') {
      this.search = search;
    }
    this.searchChange.emit(this.search);
  }*/

}
