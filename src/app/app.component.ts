import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxDynamicHeadingsModule } from 'ngx-dynamic-headings';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxDynamicHeadingsModule, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-dynamic-headings-example';
}
