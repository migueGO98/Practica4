import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private keyApi = environment.keyApi

  constructor(private httpClient: HttpClient) { }

  getListaVideos(idPlaylist: string): Observable<any> {
    return this.httpClient.get(`https://content.googleapis.com/youtube/v3/playlistItems?playlistId=${idPlaylist}&maxResults=50&part=id,snippet&key=${this.keyApi}`)
  }

}
