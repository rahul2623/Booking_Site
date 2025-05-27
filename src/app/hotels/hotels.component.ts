import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  imports: [ReactiveFormsModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit {
  myform!: FormGroup;
  ngOnInit(): void {
    this.myform=new FormGroup({
      locationofme: new FormControl('',[Validators.min(3),Validators.required]),
    checkin: new FormControl(''),
    checkout: new FormControl('')

    })
      
  }
  onsubmit(myform:FormGroup){
  if(myform.valid){
    console.log(myform.value.locationofme);
  }
  else{
    alert("Something went wrong")
  }
  }
}
