import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {NgModule} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
//import {MatTableDataSource} from '@angular/material/table';


const MaterialComponents=[MatCardModule,MatToolbarModule,MatInputModule,
    MatIconModule,MatSelectModule,MatCheckboxModule,MatGridListModule,MatPaginatorModule,
]

@NgModule({
    imports:[MaterialComponents],
    exports: [MaterialComponents],
})
export class MaterialModule { }