import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styles: '',
})
export class AppComponent {
  title = 'angular-17-app';
}
