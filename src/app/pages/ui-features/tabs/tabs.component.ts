import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tab1',
  template: `
    <p>I would like to order for outside catering in my office. This is SuperDel Company. Reply
    </p>
  `,
})
export class Tab1Component { }

@Component({
  selector: 'ngx-tab2',
  template: `
    <p>Remember to send the invoice to me, Ashakel Furniture.</p>
  `,
})
export class Tab2Component { }

@Component({
  selector: 'ngx-tabs',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
})
export class TabsComponent {

  tabs: any[] = [
    {
      title: 'Yahoo Email',
      route: '/pages/ui-features/tabs/tab1',
    },
    {
      title: 'Company Email',
      route: '/pages/ui-features/tabs/tab2',
    },
  ];

}
