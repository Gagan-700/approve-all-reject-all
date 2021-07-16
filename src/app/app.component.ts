import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Data: Array<any>;
  approveFlag: boolean = false;
  rejectFlag: boolean = false;

  constructor() {
    this.Data = [
      { Company: 'Google', Contact: 'Raju', Country: 'US' },
      { Company: 'Google', Contact: 'Raju', Country: 'US' },
      { Company: 'Google', Contact: 'Raju', Country: 'US' },
      { Company: 'Google', Contact: 'Raju', Country: 'US' }
    ];
  }

  approve() {
    console.log('heyyyy');
    if (this.approveFlag === true) {
      this.approveFlag = false;
    } else {
      this.approveFlag = true;
    }
  }

  reject() {
    if (this.rejectFlag === true) {
      this.rejectFlag = false;
    } else {
      this.rejectFlag = true;
    }
  }
}
