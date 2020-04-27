import { Component, OnInit } from '@angular/core';
import { SpeachService } from '../speach.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  speechName = []
  speechContent = []
  updateData = []
  speechIndex: number
  constructor(private speechService: SpeachService, private formBuilder: FormBuilder) { }
  /* email= this.formBuilder.group({
     Email: ['', Validators.required]
   })*/
  saveData = this.formBuilder.group({
    authorName: ['', Validators.required],
    subject: ['', Validators.required],
    date: ['', Validators.required],
  })

  ngOnInit() {
    this.getSpeechName();
  }
  getSpeechName() {
    this.speechName = this.speechService.getSpeachContent();
  }
  getSpeechContent(index) {
    this.speechContent = Array(this.speechService.getSpeechData(index));
    this.speechIndex = index;
    const p = this.speechService.getSpeechData(index);
    this.saveData.patchValue(p ? p : {});
  }
  delete() {
    this.speechService.deleteSpeechContent();
  }
  /*submitEmail() {
    this.speechService.pushEmail(this.email.value);
  }*/
  share() {

  }
  save() {
if(this.speechIndex!==undefined) { 
     this.speechService.sendSpeachContent(this.saveData.value);}
  }


}
