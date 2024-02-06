import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TwoWayDataBindingInAngular16';
  //data : string="Dineshydauvnshee";
  data: string | null = "Dineshydauvnshee";
  employees : any[]=[
    {
      empId:101,
      name: 'Dineshydauvnshee',
      address:'allhabad'
    },{
      empId:102,
      name:'Pawan',
      address:'varansi'
    },{
      empId:103,
      name:'Devesh',
      address:'aayodhya'
    },{
      empId:104,
      name:'sanntosh',
      address:'madhubani'
    },{
      empId:105,
      name:'Ravi',
      address:'jaunpur'
    }
  ]
  dob = new Date(5-2-2024);
  salary:number = 5000000;
  name :string= "dineshyaduvanshee";
  position : string= "sofewere devoloper";
  work : string= "softwere devolopment";
  
}

