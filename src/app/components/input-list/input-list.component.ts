import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.css']
})
export class InputListComponent {

  @Output()

  public onNewString: EventEmitter<string> = new EventEmitter();

  idPlayList = new FormControl('', [Validators.required]);

  constructor() { }

  enviarIdPlayList(): void {
    if (this.idPlayList.value !== null && this.idPlayList.value !== '') {
      this.onNewString.emit(this.idPlayList.value)
      this.idPlayList.reset();
    }
  }

  getErrorMessage() {
    return this.idPlayList.hasError('required') ? 'Debes ingresar el id de la lista' : '';
  }
}
