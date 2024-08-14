import { Component, Input } from '@angular/core';
declare const MediaElementPlayer: any;

@Component({
  selector: 'app-motorcycle-video',
  standalone: true,
  imports: [],
  templateUrl: './motorcycle-video.component.html',
  styleUrl: './motorcycle-video.component.css'
})
export class MotorcycleVideoComponent {
  // @Input() videoSrc: string = '';
  public showVideo:Boolean;
  public videoSrc:string = '';
  
  constructor(){
    this.showVideo = false;
    this.videoSrc = '../../../../../video.mp4';
  }

  ngAfterViewInit() {
    const player = new MediaElementPlayer('player1', {
      features: ['playpause', 'progress', 'volume', 'fullscreen'],
      pluginPath: 'assets/mediaelement/',
      success: (mediaElement: any) => {
        mediaElement.setSrc(`https://www.youtube.com/watch?v=9uY6Pw36iBA`);
        mediaElement.load();
      }
    });  }
}
