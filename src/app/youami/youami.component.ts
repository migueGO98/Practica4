import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { VideoYoutubeI } from '../components/interfaces/interfaces';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
    this.obtenerListaVideos("RDnCkblLhs0-4")
    this.idVideoSeleccionado = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/nCkblLhs0-4?autoplay=1`);
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
      () => {
        this.cambiarVideo(this.listaVideos[0].idVideo!)  
        console.log("Petición Finalizada")
      }
    )
  }

  cambiarVideo(idVideo: string) {
    this.idVideoSeleccionado = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${idVideo}?autoplay=1`);
  }
}
