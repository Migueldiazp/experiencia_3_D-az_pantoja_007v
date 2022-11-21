import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  qrCodeString="Debe Generar el QR antes de ver los resultados";
  scannedResult:any;

  constructor() { }

usuario={
  nom:"",
}



  ngOnInit() {
  }
 GENERARsCAN(){
  this.qrCodeString=this.usuario.nom;}

  verScan(){
    this.scannedResult= this.qrCodeString;
  }

}
