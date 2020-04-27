import { Component, OnInit } from '@angular/core';
import { SpeachService } from '../speach.service';
 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  speechData: any  = [];
  searchText:string = "";   
  constructor(private speechService: SpeachService ) { }
  ngOnInit() {
    this.getSpeechData()
  }
  getSpeechData() {
    this.speechData = this.speechService.getSpeachContent();
     }
}
