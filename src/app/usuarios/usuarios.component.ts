import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Array<any> = new Array();

  closeResult: string;
  

  constructor(private usuariosService:UsuariosService,private modalService: NgbModal) {

   }


 
   //Quando inicializar executa o method Listar();
  ngOnInit(): void {
    this.listarUsers();
  }

  //método para listar alunos(get) chamando um service para Listar.
  listarUsers(){
    this.usuariosService.listarUsers().subscribe(usuarios =>{
      this.usuarios = usuarios;
    },err =>{ //Exceção Disparada.
      window.alert('Erro ao listar Alunos'); 
    })
  }
  

}
