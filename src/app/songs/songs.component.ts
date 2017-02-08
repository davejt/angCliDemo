import { Component, OnInit } from '@angular/core';
import { Songs } from '../songs';
import { SpotifySongService } from '../spotify-song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  providers: [ SpotifySongService ]
})
export class SongsComponent implements OnInit {

  songs: Songs[];


  constructor(private songService: SpotifySongService) { }

  getSongs() :void {
  	this.songService.getSongs().then(songs => this.songs = songs);
  }

  ngOnInit() {
  	this.getSongs();		
  }

}
