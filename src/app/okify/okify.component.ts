import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-okify',
  templateUrl: './okify.component.html',
  styleUrls: ['./okify.component.less']
})
export class OkifyComponent implements OnInit {

  user_input="";
  arr:string[]=[];
  the_general_state="";
  missing_count=0;
  processed_count=0;
  canceled_count=0;
  activated_count=0;
  requested_count=0;

  constructor() { }

  ngOnInit(): void {
  }

  validateInput(input:string){
      //quitamos la commas si las hay creando un nuevo array solo con los valores que queremos
      let oj=input.split(",")
      //quitamos todos los espacios en blanco esto por causa de missing info
      oj.forEach(element => {
        let novo=element.replace(/\s+/g, '');
        console.log(novo)
        this.arr.push(novo);
      });
      //enviamos todos los valores 
      this.decision(this.arr);
      console.log("ejecutado")
  }

  decision(arg:string[]){
      for (let index = 0; index < arg.length; index++) {
          if(arg[index].toUpperCase()=="MISSINGINFO"){
              this.missing_count++;
          }else if(arg[index].toUpperCase()=="PROCESSED"){
              this.processed_count++;
          }else if(arg[index].toUpperCase()=="ACTIVATED" || arg[index].toUpperCase()=="CANCELED"){
              if(arg[index].toUpperCase()=="ACTIVATED"){
                this.activated_count++;
              }else if(arg[index].toUpperCase()=="CANCELED"){
                this.canceled_count++;
              }
          }else if(arg[index].toUpperCase()=="REQUESTED"){
              this.requested_count++;
          }
      }

      //If all subtasks have the same status, the general task also has this status.
      if(this.missing_count>=1 && this.processed_count===0 && this.canceled_count===0 && this.requested_count===0 && this.activated_count===0 ){
        this.the_general_state="MISSING INFO";

      }else if(this.processed_count>=1 && this.missing_count===0 && this.canceled_count===0 && this.activated_count===0 && this.requested_count===0){
        this.the_general_state="PROCESSED";

      }else if(this.canceled_count>=1 && this.missing_count===0 && this.processed_count===0 && this.activated_count===0 && this.requested_count===0){
        this.the_general_state="CANCELED";

      }else if(this.activated_count>=1 && this.missing_count===0 && this.processed_count===0 && this.requested_count===0 && this.canceled_count===0){
        this.the_general_state="ACTIVATED";
      }
      else if(this.requested_count>=1 && this.missing_count===0 && this.processed_count===0 && this.canceled_count && this.activated_count===0){
        this.the_general_state="REQUESTED";
      }

      //If a subtask has a status of Missing info, the general task also has this status.
      else if(this.missing_count>=1){
          this.the_general_state="MISSING INFO";
      
      // If a subtask has a status of Processed, the general task also has this status.
      }else if(this.processed_count>=1){
          this.the_general_state="PROCESSED";

      //The general task state is Activated only if all sub-states are Activated or Canceled.
      }else if(this.missing_count==0 && this.processed_count==0 && this.canceled_count>=1 && this.activated_count>=1){
          this.the_general_state="ACTIVATED";

      //In all other cases, the general task status is Requested.
      }else{
          this.the_general_state="REQUESTED";
      }

      //this method clean variables to do other try
      this.clear();
  }

  clear(){
    //I put this timeout method to give user the chance to see the the result and then clear values
    setTimeout(() => {
      this.user_input="";
      this.arr=[];
      this.the_general_state="";
      this.missing_count=0;
      this.processed_count=0;
      this.canceled_count=0;
      this.activated_count=0;
      this.requested_count=0;
    }, 2000);
  }




}

