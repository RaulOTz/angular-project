import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  element = false;

  constructor() { }

  ngOnInit(): void {
    
  }


  showData() {
    return (this.element = true);

  }
  
  hideData() {
    return (this.element = false);
  }


  
  url = "./assets/Home/IMG1.jpg"

  url2="./assets/Home/IMG2.jpg"

 

}
