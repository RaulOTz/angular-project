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


  logo= "./assets/logo.png"
  
  url = "./assets/Home/Homegif.gif"

  url2="./assets/Home/anim.png"

  url3= "./assets/Home/M3.jpg"

}
