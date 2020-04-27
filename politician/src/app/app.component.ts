import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpeachService } from './speach.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'politician';
  speechData: any[] = [];
  constructor(private router: Router, private speechService: SpeachService){
    
  }
  ngOninit() {}
  addSpeach() {
    this.router.navigateByUrl("add-speach");

  }
  view() {
    this.router.navigateByUrl("view");
  }
  search() {
    this.router.navigateByUrl('search')
  }
  
}
