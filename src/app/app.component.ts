import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Nrich';

  // Loader
  isLoading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 600);
  }
}
