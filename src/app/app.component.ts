import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.phone.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';

  @ViewChild('videoPlayer') videoplayer: any;

  toggleVideo(event: any) {
    console.log(this.videoplayer);
    if(!this.videoplayer.nativeElement.paused)  {
      this.videoplayer.nativeElement.pause();
    } else {
      this.videoplayer.nativeElement.play();
    }
  }

  ngOnInit()  {
  }

  ngAfterViewInit() {
    this.videoplayer.nativeElement.play();
  }
}
