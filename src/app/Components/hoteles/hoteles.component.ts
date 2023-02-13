import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss']
})
export class HotelesComponent implements OnInit {
  element = false;
  
  constructor() { }

  ngOnInit(): void {
  
  }

  url = "./assets/Paseos/La_Noria/4.jpeg"



  showData() {
    return (this.element = true);

  }
  
  hideData() {
    return (this.element = false);
  }

 

}
