import { Component, OnInit } from '@angular/core';
import { Songs } from './songs';
import { SpotifySongService } from './spotify-song.service';

@Component({
  moduleId: module.id,
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  providers: [ SpotifySongService ]
})
export class SongsComponent implements OnInit {
  errorMessage: string;
  songs: Songs[];
  mode = 'observable';


  constructor(private songService: SpotifySongService) { }

  getSongs() {
  	this.songService.getSongs()
        .subscribe(
            songs => this.songs = songs,
            error => this.errorMessage = <any>error);
  }

  ngOnInit() {
  	this.getSongs();		
  }

}
