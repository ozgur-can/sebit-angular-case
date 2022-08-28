import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, limit: number, ...args: unknown[]): unknown {
    return value.length < limit ? value : value.slice(0, limit) + '...';
  }
}
