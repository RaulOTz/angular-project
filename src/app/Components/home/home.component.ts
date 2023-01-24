import { Component, OnInit } from '@angular/core';

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
  
  url = "./assets/logo.png"

  url2="./assets/logo - copia.png"

}
