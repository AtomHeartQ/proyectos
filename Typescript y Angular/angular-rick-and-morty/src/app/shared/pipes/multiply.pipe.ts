import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value: any, arg1: any, arg2: any): unknown {
    return value * arg1 * arg2;
  }

}
