import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeAccents',
})
export class RemoveAccentsPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
