import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/product';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: Category): string {
    return value.Id + ": " + value.Name;
  }

}
