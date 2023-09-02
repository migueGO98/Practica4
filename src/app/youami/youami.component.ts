import { Component } from '@angular/core';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-youami',
  templateUrl: './youami.component.html',
  styleUrls: ['./youami.component.css']
})
export class YouamiComponent {

  constructor(private youtubeService: YoutubeService){ }

  recibirIdPlaylist(idPlaylist: string){
    console.log("Desde padre", idPlaylist, "lo imprimo en consola")
    
    //this.obtenerListaVideos(idPlaylist)
  }

  obtenerListaVideos(idPlaylist: string){
    this.youtubeService.getListaVideos(idPlaylist).subscribe(data => console.log(data))
  }

}
