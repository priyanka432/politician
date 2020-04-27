import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SpeachService } from '../speach.service';

@Component({
  selector: 'app-add-speach',
  templateUrl: './add-speach.component.html',
  styleUrls: ['./add-speach.component.css']
})
export class AddSpeachComponent implements OnInit {
getList:any = []
  constructor(private formBuilder: FormBuilder, private speachService: SpeachService) { }
  addSpeech = this.formBuilder.group({
    authorName: ['', Validators.required],
    email: ['', Validators.required],
    speachName: ['', Validators.required],
    subject: ['', Validators.required],
    date: ['', Validators.required],
    speechContent: ['', Validators.required]
  })

  ngOnInit()  {
    this.getSpeechData();
  }
  reset(){
    this.addSpeech.reset()

  }
  onSubmit(){
    this.speachService.sendSpeachContent(this.addSpeech.value);
  }
  getSpeechData(){
   this.getList = this.speachService.getSpeachContent();
  }


}
