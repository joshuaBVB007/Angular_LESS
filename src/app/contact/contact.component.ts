import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from "jquery";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  profileForm=new FormGroup({
    name:new FormControl('',Validators.required),
    mail:new FormControl('',Validators.required),
    knowus:new FormControl('',Validators.required),  
  })

  constructor() { }

  ngOnInit(): void {
  }

  SendTo(){
    $( ".popUp" ).css("display","block");
    $( ".popUp" ).fadeOut(4000,()=>{
      // After completed
    })
    
}

}
