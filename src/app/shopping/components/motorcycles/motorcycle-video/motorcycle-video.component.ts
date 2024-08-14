import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
declare const MediaElementPlayer: any;
@Component({
  selector: 'app-motorcycle-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './motorcycle-video.component.html',
  styleUrl: './motorcycle-video.component.css'
})
export class MotorcycleVideoComponent {
  public showVideo:Boolean;
  public videoSrc;
  public videoClass:string;
  public sectionClass: string; 

  constructor() {
    this.showVideo = false;
    this.videoSrc = '../../../../../video.mp4';
    this.videoClass = '';  
    this.sectionClass = '';
  }

  handlevideo() {
    if (this.showVideo) {
      this.showVideo = false;
      this.videoClass = 'descend-video';
    } else {
      this.showVideo = true;
      this.videoClass = 'elevate-video';
    }
  }
  

  ngAfterViewInit() {
    this.initializePlayer();
  }

  initializePlayer() {
    const player = new MediaElementPlayer('player1', {
      features: ['playpause', 'progress', 'volume', 'fullscreen'],
      pluginPath: 'assets/mediaelement/',
      success: (mediaElement: any) => {
        mediaElement.setSrc(`https://www.youtube.com/watch?v=9uY6Pw36iBA`);
        mediaElement.load();
      }
    }); 
  }
}
