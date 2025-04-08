import { Component } from '@angular/core';

@Component({
  selector: 'app-cartao-de-visitas',
  templateUrl: './cartao-de-visitas.component.html',
  styleUrls: ['./cartao-de-visitas.component.css']
})
export class CartaoDeVisitasComponent {
  // Variáveis para armazenar os dados do formulário
  nome: string = '';
  idade: number = 0;
  telefone: string = '';
  email: string = '';
  endereco: string = '';
  numero: string = '';
  bairro: string = '';
  cidade: string = '';

  // Variável para controlar a visibilidade do cartão de visitas
  exibirCartao: boolean = false;

  // Função para gerar o cartão de visitas
  gerarCartao() {
    this.exibirCartao = true;
  }
}