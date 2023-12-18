import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {
  @ViewChild('videoElement') videoElement: ElementRef;
  private intersectionObserver: IntersectionObserver;

  ngAfterViewInit() {
    // Create an Intersection Observer to watch for the section
    this.intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If section is in view, start the video
          this.playVideo();
        } else {
          // If section is not in view, pause the video
          this.pauseVideo();
        }
      });
    });

    // Start observing the section
    this.intersectionObserver.observe(this.videoElement.nativeElement);
  }

  playVideo() {
    // Check if the play method is available before calling it
    if (this.videoElement.nativeElement.play) {
      this.videoElement.nativeElement.play();
    }
  }

  pauseVideo() {
    // Check if the pause method is available before calling it
    if (this.videoElement.nativeElement.pause) {
      this.videoElement.nativeElement.pause();
    }
  }
}
