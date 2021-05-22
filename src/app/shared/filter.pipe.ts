import { Pipe, PipeTransform } from '@angular/core';
import { Medicine } from './medicine.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Medicine[], filterString: string) {
    if(value.length === 0 || filterString === ''){
      return value;
    }

    let result = [];

    for(let item of value) {

        console.log(item.name, filterString);

      if(item.name.toUpperCase().startsWith(filterString.toUpperCase())) {
        result.push(item);
      }
    }

    console.log(result);

    return result;
  }

}
