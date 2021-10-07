import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  /*transform(value: any[], filterString: string, propName: string): any{

    const resultArray = [];
    if (value){
    if (value.length === 0 || filterString === '' || propName === '') {
      return value;
    }

    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}*/

transform(value: any, searchText?: any): any {
  if (!value) {
    return;
  }
  if (!searchText) {
    return value;
  }
  searchText = searchText.toLowerCase();

  return value.filter((item: { name: any; url: string; }) => {
    let matchFound = false;

    if (item.name && item.url) {
      const name = item.name;
      const index = item.url.split('/')[item.url.split('/').length - 2];

      const searchName = JSON.stringify(name).toLowerCase().includes(searchText);
      const searchId = JSON.stringify(index).toLowerCase().includes(searchText);

      if (searchName || searchId) {
        matchFound = true;
      }
    }
    return matchFound;
  });
}

}
