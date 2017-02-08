import { Injectable } from '@angular/core';

import { Songs } from './songs';
import { SONGS } from './songs/mock-songs';

//export const spotifyBaseUrl = "https://api.spotify.com";

@Injectable()
export class SpotifySongService {

	getSongs(): Promise<Songs[]> {
		return Promise.resolve(SONGS);
	}


}
