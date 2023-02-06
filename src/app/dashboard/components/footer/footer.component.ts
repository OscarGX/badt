import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public today = new Date();
}
