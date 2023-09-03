import { Component } from '@angular/core';


export interface VideoYoutubeI {
  artista: string,
  titulo: string,
  descripcion: string,
  imagen: string,
  idVideo: string
}



@Component({
  selector: 'app-lista-videos',
  templateUrl: './lista-videos.component.html',
  styleUrls: ['./lista-videos.component.css']
})

export class ListaVideosComponent {

  public listaVideos: VideoYoutubeI[] = [
    {
      artista: "Artista 1",
      titulo: "Video 1",
      descripcion: "Descripcion 1",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "h4UqMyldS7Q"
    },
    {
      artista: "Artista 2",
      titulo: "Video 2",
      descripcion: "Descripcion 2",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "Zi_XLOBDo_Y",
    },
    {
      artista: "Artista 3",
      titulo: "Video 3",
      descripcion: "Descripcion 3",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "QUH_Sr_aFy4"
    },
    {
      artista: "Artista 4",
      titulo: "Video 4",
      descripcion: "Descripcion 4",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "v2AC41dglnM",
    },
    {
      artista: "Artista 1",
      titulo: "Video 1",
      descripcion: "Descripcion 1",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "h4UqMyldS7Q"
    },
    {
      artista: "Artista 2",
      titulo: "Video 2",
      descripcion: "Descripcion 2",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "Zi_XLOBDo_Y",
    },
    {
      artista: "Artista 3",
      titulo: "Video 3",
      descripcion: "Descripcion 3",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "QUH_Sr_aFy4"
    },
    {
      artista: "Artista 4",
      titulo: "Video 4",
      descripcion: "Descripcion 4",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "v2AC41dglnM",
    },
    {
      artista: "Artista 1",
      titulo: "Video 1",
      descripcion: "Descripcion 1",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "h4UqMyldS7Q"
    },
    {
      artista: "Artista 2",
      titulo: "Video 2",
      descripcion: "Descripcion 2",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "Zi_XLOBDo_Y",
    },
    {
      artista: "Artista 3",
      titulo: "Video 3",
      descripcion: "Descripcion 3",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "QUH_Sr_aFy4"
    },
    {
      artista: "Artista 4",
      titulo: "Video 4",
      descripcion: "Descripcion 4",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "v2AC41dglnM",
    },
    {
      artista: "Artista 1",
      titulo: "Video 1",
      descripcion: "Descripcion 1",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "h4UqMyldS7Q"
    },
    {
      artista: "Artista 2",
      titulo: "Video 2",
      descripcion: "Descripcion 2",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "Zi_XLOBDo_Y",
    },
    {
      artista: "Artista 3",
      titulo: "Video 3",
      descripcion: "Descripcion 3",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "QUH_Sr_aFy4"
    },
    {
      artista: "Artista 4",
      titulo: "Video 4",
      descripcion: "Descripcion 4",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "v2AC41dglnM",
    },
    {
      artista: "Artista 1",
      titulo: "Video 1",
      descripcion: "Descripcion 1",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "h4UqMyldS7Q"
    },
    {
      artista: "Artista 2",
      titulo: "Video 2",
      descripcion: "Descripcion 2",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "Zi_XLOBDo_Y",
    },
    {
      artista: "Artista 3",
      titulo: "Video 3",
      descripcion: "Descripcion 3",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "QUH_Sr_aFy4"
    },
    {
      artista: "Artista 4",
      titulo: "Video 4",
      descripcion: "Descripcion 4",
      imagen: "https://i.ytimg.com/vi/1q8YQHqHi0E/hqdefault.jpg",
      idVideo: "v2AC41dglnM",
    },
  ]
  
  videoSeleccionado!: VideoYoutubeI;

  onSelect(video: VideoYoutubeI): void {
    this.videoSeleccionado = video;
    console.log(this.videoSeleccionado);
    
  }
}
