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
  status;
  textarea;

  constructor() {
    this.Data = [
      { Company: 'Google', Contact: 'Raju', Country: 'US' },
      { Company: 'Apple', Contact: 'Babu bhaiya', Country: 'UK' },
      { Company: 'Amazon', Contact: 'Shyam', Country: 'IN' }
      ,
    ];
  }

  submit(){
 console.log(this.status,this.textarea)
  }

  approve() {
    this.rejectFlag = false;
    if (this.approveFlag === true) {
      this.approveFlag = false;
    } else {
      this.approveFlag = true;
    }
  }

  reject() {
    this.approveFlag = false;
    if (this.rejectFlag === true) {
      this.rejectFlag = false;
    } else {
      this.rejectFlag = true;
    }
  }
}
