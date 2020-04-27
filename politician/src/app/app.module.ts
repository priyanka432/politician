import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { AddSpeachComponent } from './add-speach/add-speach.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { SpeachService } from './speach.service';
import { SearchPipe } from './search.pipe';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddSpeachComponent,
    SearchPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SpeachService],
  bootstrap: [AppComponent]
})
export class AppModule { }
