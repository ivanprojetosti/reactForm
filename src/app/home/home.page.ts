
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/shared/cliente';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cliente: Cliente;
  constructor() { }

  ngOnInit() {
    this.cliente = new Cliente();
  }

  onSubmit(){
    console.log(this.cliente);
  }
  salvar(){
    console.log(this.cliente);

  }
}
