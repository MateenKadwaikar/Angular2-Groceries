import {
    Pipe,
    PipeTransform,
    Injectable
} from '@angular/core';

import {
    Grocery
} from '../shared/list/list.model';


@Pipe({
    name: 'orderBy',
    pure: true
})
@Injectable()
export class OrderByPipe implements PipeTransform {
    transform(value: any, args: any[]): any {

            return value.sort(function(a, b) {
                let nameA = a.Name == undefined ? 'Null' : a.Name.toLowerCase(),
                    nameB = b.Name == undefined ? 'Null' : b.Name.toLowerCase();
                if (nameA < nameB) //sort string ascending
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0; //default return value (no sorting)
            });

    }
}
