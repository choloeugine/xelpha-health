import { Component } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  template: `
    <nb-card>
      <nb-card-header>Our Location</nb-card-header>
      <nb-card-body>
       <a href="http://satellites.pro/Nairobi.Kenya">View Location</a>
      </nb-card-body>
    </nb-card>
  `,
})
export class GmapsComponent {

  lat = 51.678418;
  lng = 7.809007;
}
