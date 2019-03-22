import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
import { topmost } from 'tns-core-modules/ui/frame';
registerElement("VideoPlayer", () => Video);

@Component({
  selector: 'ns-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css'],
  moduleId: module.id,
})
export class AudioComponent implements OnInit {
  videoPlayer: any;
 constructor( private page: Page) { }

  ngOnInit()  : void  {

    
  }
  ngAfterViewInit() {
    this.videoPlayer = this.page.getViewById('nativeVideoPlayer');
}

play() {
    this.videoPlayer.play();
}

pause() {
    this.videoPlayer.pause();
}

seekToTime() {

}

}
