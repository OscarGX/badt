import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public headerTitle = '{{ Your title bro }}';
}
