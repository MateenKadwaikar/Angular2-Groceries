import {
    Component,OnInit
} from '@angular/core';


import {
    Grocery
} from './list.model';
import {
    ListService
} from '../services/list.service';


@Component({
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css'],
    providers: [ListService]
})

export class ListComponent implements OnInit {

    private groceriesItemsList: Grocery[] = [];

    private isLoading: boolean = true;
    private groceryItems: string = '';

    constructor(private _listService: ListService) {
        this.loadGrocery();
    }

    ngOnInit() {}

    loadGrocery() {
        this._listService.load()
            .subscribe(data => {
                this.groceriesItemsList = data;
                this.isLoading = false;
            });
    };

    myStringChanged(e) {
        this.groceryItems = e;
    }

    add() {
        if (this.groceryItems.trim() === '') {
            alert('Enter a grocery item');
            return;
        }
        this._listService.post(this.groceryItems)
            .subscribe(data => {
                this.loadGrocery();
                this.groceryItems = '';
            });
    }

    selectGrocery(item: Grocery) {
        console.log(item);
     }



}
