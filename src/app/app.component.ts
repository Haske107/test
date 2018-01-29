import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.phone.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  state = 'block';
  Left = '0%';
  bottom = '100px';

  opacity = 0;
  blurr = 100;
  scale = 0;

  @ViewChild('videoPlayer') videoplayer: any;

  show = true;

  borderCircle = '#363636';
  borderSquare = '#363636';
  borderTriangle = '#363636';

  ContactLeft = '-500px';
  MottoLeft = '0' ;

  infoOpacity = '0';
  comingOpacity = '0';

  toggleVideo(event: any) {
    if(!this.videoplayer.nativeElement.paused)  {
      if(this.videoplayer.nativeElement.muted)  {
        this.videoplayer.nativeElement.muted = false;

      } else {
        this.videoplayer.nativeElement.pause();
      }
    } else {
      this.videoplayer.nativeElement.play();
    }
  }

  ngOnInit()  {
  }

  toggleHider() {
    this.toggleSquare();
    if(this.state === 'block')  {
      this.state = 'none';
      this.Left = '-110%';
      this.videoplayer.nativeElement.muted = true;
      this.videoplayer.nativeElement.pause();
      this.scale = 100;
      this.opacity = 1;
      this.blurr = 0;
    } else  {
      this.videoplayer.nativeElement.muted = false;
      this.videoplayer.nativeElement.play();

      this.state = 'block';
      this.Left = '0%';
      this.scale = 0;
      this.opacity = 0;
      this.blurr = 100;
    }
  }

  ngAfterViewInit() {
    this.videoplayer.nativeElement.muted = true;
    this.videoplayer.nativeElement.play();
  }




  toggleCircle()  {
    if(this.borderCircle === '#363636') {
      this.ContactLeft = '10%';
      this.MottoLeft = '0%';
      this.borderCircle = 'whitesmoke';
    } else{
      this.borderCircle = '#363636';
      this.ContactLeft = '-500px';
      this.MottoLeft = '0';
    }
  }

  toggleTriangle()  {
    if(this.show === true) {
      this.show = false;
      this.bottom = '-100%';
      this.comingOpacity = '0';
      this.videoplayer.nativeElement.muted = true;
      this.videoplayer.nativeElement.pause();

    } else{
      this.show = true;
      this.bottom = '100px';
      this.comingOpacity = '1';
      this.videoplayer.nativeElement.muted = false;
      this.videoplayer.nativeElement.play();

    }
  }

  toggleSquare()  {
    if(this.borderSquare === '#363636') {
      this.comingOpacity = '0';
      this.infoOpacity = '1';
      this.borderSquare = 'whitesmoke';
    } else{
      this.borderSquare = '#363636';
      this.comingOpacity = '0';
      this.infoOpacity = '0';

    }
  }


}
