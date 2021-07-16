import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  Data: Array<any>;

  constructor(){
    this.Data = [
      {Company:"Google",Contact:"Raju",Country:'US'},
      {Company:"Google",Contact:"Raju",Country:'US'},
      {Company:"Google",Contact:"Raju",Country:'US'},
      {Company:"Google",Contact:"Raju",Country:'US'}
    ]
  }
}
