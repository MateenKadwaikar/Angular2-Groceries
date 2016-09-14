import { Component, Output , EventEmitter,Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-input-component',
	templateUrl: 'input.component.html'
})
export class InputComponent {
	
	@Input() groceryItems : string = '';
	@Output() inputValue: EventEmitter<string> = new EventEmitter<string>();

	onBlurMethod(){
		this.inputValue.emit(this.groceryItems);
	}
}