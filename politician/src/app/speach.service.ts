import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpeachService {
speechData = [];
copySpeechData = [];
speechIndex:number;
email  = [];
  constructor(private router: Router) { }
  sendSpeachContent(speechData)
  {     
     
    if(this.speechIndex === undefined) { 
    const email = this.speechData.findIndex(res=>(res.email === speechData.email));
    if(email===-1){
      this.speechData.push(speechData);
      this.copySpeechData.push(speechData);
      this.router.navigateByUrl('view');
    }
    else{
      alert("this Email Id already Exist");
    }
     
  }
  else {
     
    this.speechData[this.speechIndex]=speechData;
    this.copySpeechData.find(res=> {
      this.speechData[this.speechIndex].speachName=res.speachName
      this.speechData[this.speechIndex].speechContent=res.speechContent
    })
     }
}
  getSpeachContent()
  {
    return this.speechData;
  }
  getSpeechData(index) {
    this.speechIndex = index;
    return this.speechData[index];
  }
   deleteSpeechContent() {
    this.speechData.splice(this.speechIndex, 1);
  } 
  /*pushEmail(email) {
 // this.email.push(email);
 const a = this.speechData.findIndex(res=>(res.email === email.Email));
 if(a !== -1) {
  this.speechData.splice(this.speechIndex, 1);
 }
 else{
   alert("filled email id is incorrect")
 } 
   

}*/
 
}
