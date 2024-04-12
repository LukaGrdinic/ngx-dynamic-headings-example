import { Component, Input } from '@angular/core';
import { NgxDynamicHeadingsModule } from 'ngx-dynamic-headings';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgxDynamicHeadingsModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  @Input({ required: true }) message!: string;
}
