import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxDynamicHeadingsModule } from 'ngx-dynamic-headings';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxDynamicHeadingsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-dynamic-headings-example';
}
