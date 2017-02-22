/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpotifySongService } from './spotify-song.service';

describe('SpotifySongService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifySongService]
    });
  });

  it('should ...', inject([SpotifySongService], (service: SpotifySongService) => {
    expect(service).toBeTruthy();
  }));
});
