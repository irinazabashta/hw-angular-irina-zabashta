import { Component } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';
import {count} from "rxjs/internal/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HomeWork 5';

  public showMessage(): void{
    alert(`Some message!`);
  }
}