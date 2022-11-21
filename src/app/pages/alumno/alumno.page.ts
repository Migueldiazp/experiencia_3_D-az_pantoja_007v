import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServicesdatosService}  from '../../services//servicesdatos.service';
import { RegistroserviceService, Usuario } from 'src/app/services/registroservice.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  datos : Usuario []=[];
  usuarioActivo : Usuario;

  constructor(private navController:NavController,private servicesdatosService:ServicesdatosService,
    private registroService: RegistroserviceService) { }

  ngOnInit() {
    this.loadDatos();
  }

  cerrarSesion(){
    localStorage.removeItem('ingresado');
    localStorage.removeItem('tip');
    localStorage.removeItem('email');
    
    this.navController.navigateRoot('login');
    
  }
  //invocamos al método getDatos() del servicio
  loadDatos(){
    this.registroService.getUsuarios().then(datos=>{ 
      this.datos = datos;

      for (let obj of this.datos){
        
        if (localStorage.getItem("email") == obj.correo){
          this.usuarioActivo=obj;
        }

        }
        
    })
  }

}
