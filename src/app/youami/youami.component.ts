import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { VideoYoutubeI } from '../components/interfaces/interfaces';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

let apiLoaded = false;

@Component({
  selector: 'app-youami',
  templateUrl: './youami.component.html',
  styleUrls: ['./youami.component.css']
})
export class YouamiComponent implements OnInit {

  public listaVideos: VideoYoutubeI[] = []
  public idVideoSeleccionado!: SafeResourceUrl;

  constructor(private youtubeService: YoutubeService, private sanitizer: DomSanitizer){  }

  ngOnInit(): void {
    //this.obtenerListaVideos("RDnCkblLhs0-4")
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }

    this.idVideoSeleccionado = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1");
  }

  recibirIdPlaylist(idPlaylist: string){
    this.obtenerListaVideos(idPlaylist)
  }

  obtenerListaVideos(idPlaylist: string){
    this.youtubeService.getListaVideos(idPlaylist).subscribe(data => {
      this.listaVideos = data.items.map((
        item: { 
          snippet: { 
            channelTitle: string, 
            title: string,
            description: string, 
            thumbnails?: { 
              default?: { 
                url?: string 
              } 
            }, 
            resourceId: { 
              videoId: string 
            }, 
          } 
        }
        ) => {
          return {
          artista: item.snippet.channelTitle,
          titulo: item.snippet.title,
          descripcion: item.snippet.description,
          imagen: item.snippet.thumbnails?.default?.url,
          idVideo: item.snippet.resourceId.videoId
        }
      })
    },
      (error) => console.log(error, "sucedio un error"),
      () => console.log("Petición Finalizada")
    )
  }

  cambiarVideo(idVideo: string) {
    this.idVideoSeleccionado = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+idVideo+"?autoplay=1");
  }
}
