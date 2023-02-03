import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-paseos',
  templateUrl: './paseos.component.html',
  styleUrls: ['./paseos.component.scss'],

})

export class PaseosComponent implements OnInit {

 
 



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

//Imagenes Faro

  imageFaro = "./assets/Paseos/Faro/1.jpeg"
  imageFaro2 = "./assets/Paseos/Faro/2.jpeg"
  imageFaro3 = "./assets/Paseos/Faro/3.jpeg"
  imageFaro4 = "./assets/Paseos/Faro/4.jpeg"



//Imagenes Acuario mazatlan

  imageAcuario = "./assets/Paseos/Acuario/1.jpeg"
  imageAcuario2 = "./assets/Paseos/Acuario/2.jpeg"
  imageAcuario3 = "./assets/Paseos/Acuario/3.jpeg"
  imageAcuario4 = "./assets/Paseos/Acuario/4.jpeg"
  imageAcuario5 = "./assets/Paseos/Acuario/5.jpeg"
  





//Imagenes 10 islas

  image10Islas = "./assets/Paseos/10_Islas/1.jpeg"
  image10Islas2 = "./assets/Paseos/10_Islas/2.jpeg"
  image10Islas3 = "./assets/Paseos/10_Islas/3.jpeg"
  image10Islas4 = "./assets/Paseos/10_Islas/4.jpeg"
  image10Islas5 = "./assets/Paseos/10_Islas/5.jpeg"





//Imagenes Avistamiento de ballenas

  imageBallenas = "./assets/Paseos/Avistamiento_Ballenas/1.jpeg"
  imageBallenas2 = "./assets/Paseos/Avistamiento_Ballenas/2.jpeg"
  imageBallenas3 = "./assets/Paseos/Avistamiento_Ballenas/3.jpeg"
  imageBallenas4 = "./assets/Paseos/Avistamiento_Ballenas/4.jpeg"
  imageBallenas5 = "./assets/Paseos/Avistamiento_Ballenas/5.jpeg"





//Imagenes Isla de pajaros

  imagePajaros = "./assets/Paseos/Isla_Pajaros/1.jpeg"
  imagePajaros2 = "./assets/Paseos/Isla_Pajaros/2.jpeg"
  imagePajaros3 = "./assets/Paseos/Isla_Pajaros/3.jpeg"
  imagePajaros4 = "./assets/Paseos/Isla_Pajaros/4.jpeg"





//Imagenes Isla de venados 

  imageVenados = "./assets/Paseos/Isla_Venados/1.jpeg"
  imageVenados2 = "./assets/Paseos/Isla_Venados/2.jpeg"
  imageVenados3 = "./assets/Paseos/Isla_Venados/3.jpeg"
  imageVenados4 = "./assets/Paseos/Isla_Venados/4.jpeg"


//Imagenes la noria

  imageNoria = "./assets/Paseos/La_Noria/1.jpeg"
  imageNoria2 = "./assets/Paseos/La_Noria/2.jpeg"
  imageNoria3 = "./assets/Paseos/La_Noria/3.jpeg"
  imageNoria4 = "./assets/Paseos/La_Noria/4.jpeg"




}
