import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.css']
})
export class InputListComponent {

  @Output()
  public onNewString: EventEmitter<string> = new EventEmitter();

  public idPlayList: string = ""

  constructor() {}
//private messageService: MessageService
 // public messages: Message[] | undefined;

  enviarIdPlayList(): void {
    if(this.idPlayList.length === 0){
      console.log("No hay valor");
      //this.messageService.add({severity:'error', summary: 'Error', detail: 'No hay valor'});
      return
    }else{
      this.onNewString.emit(this.idPlayList)
      this.idPlayList = ""
    }
  }
}
