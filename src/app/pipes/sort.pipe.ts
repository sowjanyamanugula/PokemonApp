import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>, args: any[]): any {
    const sortField = args[0];
    const sortDirection = args[1];
    let multiplier = 1;

    if (sortDirection === 'desc') {
      multiplier = -1;
    }

    value.sort((a:any , b:any) : any=> {
      if(sortField === 'name'){
        if (a[sortField] < b[sortField]) {
          return -1 * multiplier;
        } else if (a[sortField] > b[sortField]) {
          return 1 * multiplier;
        } else {
          return 0;
        }
      }else if(sortField === 'height' || sortField === 'weight'){
        
            return (a.details[sortField] - b.details[sortField]) * multiplier ;
     }
      
    }
    );

    return value;
  }

}
