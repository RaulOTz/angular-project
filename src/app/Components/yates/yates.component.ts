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
  
  //YateMorita
  Morita = "./assets/Yates/YateMorita/MORITA-CL-17.jpg"
  Morita2 = "./assets/Yates/YateMorita/MORITA-CL-1.jpg"
  Morita3 = "./assets/Yates/YateMorita/MORITA-CL-2.jpg"
  Morita4 = "./assets/Yates/YateMorita/MORITA-CL-3.jpg"
  Morita5 = "./assets/Yates/YateMorita/MORITA-CL-4.jpg"
  Morita6 = "./assets/Yates/YateMorita/MORITA-CL-5.jpg"
  Morita7 = "./assets/Yates/YateMorita/MORITA-CL-6.jpg"
  Morita8 = "./assets/Yates/YateMorita/MORITA-CL-7.jpg"
  Morita9 = "./assets/Yates/YateMorita/MORITA-CL-8.jpg"
  Morita10 = "./assets/Yates/YateMorita/MORITA-CL-9.jpg"
  Morita11 = "./assets/Yates/YateMorita/MORITA-CL-10.jpg"
  Morita12 = "./assets/Yates/YateMorita/MORITA-CL-11.jpg"
  Morita13 = "./assets/Yates/YateMorita/MORITA-CL-12.jpg"
  Morita14 = "./assets/Yates/YateMorita/MORITA-CL-13.jpg"
  Morita15 = "./assets/Yates/YateMorita/MORITA-CL-14.jpg"
  Morita16 = "./assets/Yates/YateMorita/MORITA-CL-15.jpg"
  Morita17 = "./assets/Yates/YateMorita/MORITA-CL-16.jpg"

  //YateVikinga
  Vikinga = "./assets/Yates/YateVikinga/VIKINGA-CL-1.jpg"
  Vikinga2 = "./assets/Yates/YateVikinga/VIKINGA-CL-2.jpg"
  Vikinga3 = "./assets/Yates/YateVikinga/VIKINGA-CL-3.jpg"
  Vikinga4 = "./assets/Yates/YateVikinga/VIKINGA-CL-4.jpg"
  Vikinga5 = "./assets/Yates/YateVikinga/VIKINGA-CL-5.jpg"
  Vikinga6 = "./assets/Yates/YateVikinga/VIKINGA-CL-6.jpg"
  Vikinga7 = "./assets/Yates/YateVikinga/VIKINGA-CL-7.jpg"
  Vikinga8 = "./assets/Yates/YateVikinga/VIKINGA-CL-8.jpg"
  

  //YateValhala
  Valhala = "./assets/Yates/YateValhala/VALHALA-CL-1.jpeg"
  Valhala2 = "./assets/Yates/YateValhala/VALHALA-CL-2.jpeg"
  Valhala3 = "./assets/Yates/YateValhala/VALHALA-CL-3.jpeg"
  Valhala4 = "./assets/Yates/YateValhala/VALHALA-CL-4.jpeg"
  Valhala5 = "./assets/Yates/YateValhala/VALHALA-CL-5.jpeg"
  Valhala6 = "./assets/Yates/YateValhala/VALHALA-CL-6.jpeg"

  //TrimaranRomance
  Romance = "./assets/Yates/TrimaranRomance/ROMANCE-CL-1.jpeg"
  Romance2 = "./assets/Yates/TrimaranRomance/ROMANCE-CL-2.jpeg"
  Romance3 = "./assets/Yates/TrimaranRomance/ROMANCE-CL-3.jpeg"
  Romance4 = "./assets/Yates/TrimaranRomance/ROMANCE-CL-4.jpeg"
  Romance5 = "./assets/Yates/TrimaranRomance/ROMANCE-CL-5.jpeg"
  Romance6 = "./assets/Yates/TrimaranRomance/ROMANCE-CL-6.jpeg"
  Romance7 = "./assets/Yates/TrimaranRomance/ROMANCE-CL-7.jpeg"
  Romance8 = "./assets/Yates/TrimaranRomance/ROMANCE-CL-8.jpeg"
}
