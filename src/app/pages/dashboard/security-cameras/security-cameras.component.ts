import { Component } from '@angular/core';

@Component({
  selector: 'ngx-security-cameras',
  styleUrls: ['./security-cameras.component.scss'],
  templateUrl: './security-cameras.component.html',
})
export class SecurityCamerasComponent {

  cameras: any[] = [{
    title: 'PROCESS 1',
    source: 'assets/images/flow.gif',
  }, {
    title: 'PROCESS  #2',
    source: 'assets/images/flow.gif',
  }, {
    title: 'PROCESS  #3',
    source: 'assets/images/flow.gif',
  }, {
    title: 'PROCESS  #4',
    source: 'assets/images/flow.gif',
  }];

  selectedCamera: any = this.cameras[0];

  userMenu = [{
    title: 'Profile',
  }, {
    title: 'Log out',
  }];

  isSingleView = false;

  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
  }
}
