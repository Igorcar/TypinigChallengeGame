import { Component } from '@angular/core';
import { lorem } from 'faker';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   randomText = lorem.sentence();
   enteredText = '';
   youWin;
   check = (e)=>{
     this.enteredText = e;
     }
makeClass=(letter: string, eText: string)=>{
  if(!eText){
    return "black";
  }
  else if(letter === eText){
    return "green";
  }
  else if(letter !== eText){
    return "red";
  }
}
   }

