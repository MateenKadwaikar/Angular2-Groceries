import {
    Pipe,
    PipeTransform

} from '@angular/core';

@Pipe({
    name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        if (value.length !== 0) {
            return value.filter((item) => item.Name.startsWith(args));
        } else {
            return [];
        }
    }
}
