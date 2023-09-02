import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.css']
})
export class InputListComponent {

  @Output()
  public onNewString: EventEmitter<string> = new EventEmitter();

  public idPlayList: string = ""

  enviarIdPlayList(): void {
    if(this.idPlayList.length === 0){
      return
    }else{
      this.onNewString.emit(this.idPlayList)
      this.idPlayList = ""
    }
  }
}
