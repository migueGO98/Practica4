import { Component } from '@angular/core';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-youami',
  templateUrl: './youami.component.html',
  styleUrls: ['./youami.component.css']
})
export class YouamiComponent {

  constructor(private youtubeService: YoutubeService){ }

  obtenerListaVideos(idPlaylist: string){
    this.youtubeService.getListaVideos(idPlaylist).subscribe(data => console.log(data))
  }

}
