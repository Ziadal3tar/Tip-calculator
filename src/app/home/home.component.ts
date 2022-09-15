import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

Validators
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  messageOfPrice=""
  messageOfPeople=""
  bill:any
  people:any
  tep:any
  Tip_Amount:any="0.00"
  Total:any="0.00"
  allprice:any
  rounded1:any="0.00"
  rounded2:any="0.00"



  constructor() { }

  ngOnInit(): void {


  }


validation(){
  if (this.bill<=10) {
    this.messageOfPrice = "less than the minimum"
  } else if(this.bill>=99999){
    this.messageOfPrice = "greater than the maxmum"
  }else{
    this.messageOfPrice = ""
  }


  if (this.people<1) {
    this.messageOfPeople = "less than the minimum"
  } else if(this.people>10){
    this.messageOfPeople = "greater than the maxmum"
  }else{
    this.messageOfPeople = ""
  }
}


  calc(per:any): void{
    if (per != null) {
this.tep = per
    }

  const totalPrice = this.bill + (this.bill / 100 * this.tep)
  this.Tip_Amount =  (this.bill / 100 * this.tep) / this.people
  this.Total = totalPrice / this.people
  this.rounded1 = Math.round( this.Tip_Amount * 100 ) / 100;
  this.rounded2 = Math.round( this.Total * 100 ) / 100;
  }

  reset(){
 this.people = ""
 this.tep = ""
this.bill = ""
this.rounded1 = 0.00
this.rounded2 = 0.00

  }
  resetclac(){
    this.rounded1 = 0.00
this.rounded2 = 0.00
  }

}
