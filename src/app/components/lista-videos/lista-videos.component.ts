import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VideoYoutubeI } from '../interfaces/interfaces';

@Component({
  selector: 'app-lista-videos',
  templateUrl: './lista-videos.component.html',
  styleUrls: ['./lista-videos.component.css']
})

export class ListaVideosComponent {

  videoSeleccionado!: VideoYoutubeI;

  @Input()
  public listaVideos: VideoYoutubeI[] = []

  @Output()
  public idVideoSeleccionado: EventEmitter<string> = new EventEmitter();
  
  onSelect(video: VideoYoutubeI): void {
    this.videoSeleccionado = video
    this.idVideoSeleccionado.emit(this.videoSeleccionado.idVideo)
  }
}
