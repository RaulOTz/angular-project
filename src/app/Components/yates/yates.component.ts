import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yates',
  templateUrl: './yates.component.html',
  styleUrls: ['./yates.component.scss']
})
export class YatesComponent implements OnInit {
  element =false;
  constructor() { }

  ngOnInit(): void {
  }

 
  showData() {
    return (this.element = true);
  }
  
  hideData() {
    return (this.element = false);
  }

  url = "./assets/Home/gif.gif"

  url2="./assets/Home/M2.jpg"

  url3= "./assets/Home/M3.jpg"

}
