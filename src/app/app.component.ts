import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';

  @ViewChild('videoPlayer') videoplayer: any;

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

  ngOnInit()  {
  }

  ngAfterViewInit() {
    this.toggleVideo(null);

  }
}
