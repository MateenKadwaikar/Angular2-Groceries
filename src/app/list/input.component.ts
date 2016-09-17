import { Component, Output , EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-my-input-component',
	templateUrl: 'input.component.html'
})
export class InputComponent {

	@Input() groceryItems = '';
	@Output() inputValue = new EventEmitter<string>();

	onBlurMethod() {
		this.inputValue.emit(this.groceryItems);
	}
}
