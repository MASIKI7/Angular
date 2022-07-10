import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproo';
  getName(name:any){
    alert("My name is "+name)
  };
  getNumber(num:number){
   alert("Age = "+num)
  };
  KeyUp(val:string){
    console.log(val);
    
  };
  getNames(name:String){
    alert(name)
  }

}
