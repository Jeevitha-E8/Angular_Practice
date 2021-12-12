import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameApp';
  oddnumbers:number[]=[];
  evennumbers:number[]=[];
  OnintervalFired(firednumber:number)
  {
    if (firednumber%2===0){
      this.evennumbers.push(firednumber);
    }
    else{
      this.oddnumbers.push(firednumber);
    }
  }
}
