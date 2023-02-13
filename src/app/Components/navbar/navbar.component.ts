import { Component, OnInit } from '@angular/core';
import { NgbNavLink } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  LogoUrl = "./assets/Navbar/logo - copia.png"


  
}
