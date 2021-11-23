import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my'
})
export class MyPipe implements PipeTransform {

  transform(value: string): string {
    return  value.replace(/o/g, "***");
  }

}
