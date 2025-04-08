import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cartão de Visitas';  
  nome: string = '';  
  idade: number | undefined;
  telefone: string = '';
  email: string = '';
  endereco: string = '';
  numero: number | undefined;
  bairro: string = '';
  cidade: string = '';
  mostrarCartao: boolean = false; 

  
  gerarCartaoDeVisitas(): void {
    this.mostrarCartao = true; 
  }
}