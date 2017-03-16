import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent  { 
    jbtHeading:string;
    jbtText:string;
    jbtBtnText:string;
    jbtBtnUrl:string;

  constructor()
  {
      this.jbtHeading = "Hello World";
      this.jbtText = "Hello World";
      this.jbtBtnText = "Read More";
      this.jbtBtnUrl = "/about";
  }
}
