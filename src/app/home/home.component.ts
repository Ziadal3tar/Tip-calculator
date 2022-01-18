import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

Validators
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
   details:FormGroup = new FormGroup({
    bill:new FormControl(null , [Validators.required , Validators.min(10) , Validators.max(10000)]),
    people:new FormControl(null ,  [Validators.required , Validators.min(1) , Validators.max(20)]),
    tep:new FormControl(null)
  })



  bill:any =( [Validators.required , Validators.min(10) , Validators.max(10000)]);
  people:any =( [Validators.required , Validators.min(1) , Validators.max(20)]);
  tep:any =( [Validators.required , Validators.min(1) ]);
  Tip_Amount:any="0.00"
  Total:any="0.00"
  allprice:any
  rounded1:any="0.00"
  rounded2:any="0.00"



  constructor() { }

  ngOnInit(): void {
  
   
  }
  calc(per:number ,form:any): void{
    this.bill =(<HTMLInputElement>document.getElementById("bill")).value;
    this.people =(<HTMLInputElement>document.getElementById("people")).value;
    this.tep =(<HTMLInputElement>document.getElementById("tep")).value;
  
  this.Tip_Amount = this.bill*per/(this.people);

  this.Total = this.bill/this.people+this.Tip_Amount

  this.rounded1 = Math.round( this.Tip_Amount * 100 ) / 100;
  this.rounded2 = Math.round( this.Total * 100 ) / 100;
  console.log(form);
    
  }

  // calc1(per:number): void{
  //   this.bill =(<HTMLInputElement>document.getElementById("bill")).value;
  //   this.people =(<HTMLInputElement>document.getElementById("people")).value;
  //   this.tep =(<HTMLInputElement>document.getElementById("tep")).value;
  
  // this.Tip_Amount =  this.bill*per/(this.people)
  
  // this.Total = this.bill/this.people+this.Tip_Amount
  
  // }
  reset(){
  this.Tip_Amount = "0.00"
  this.Total = "0.00";
  (<HTMLInputElement>document.getElementById("bill")).value = '';
  (<HTMLInputElement>document.getElementById("people")).value ='';
  (<HTMLInputElement>document.getElementById("tep")).value ='';

  }

}
