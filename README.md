**<!- app.component.ts --!>**

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cartão de Visitas';  // Título que aparece na página
  nome: string = '';  // Variáveis para armazenar as informações do formulário
  idade: number | undefined;
  telefone: string = '';
  email: string = '';
  endereco: string = '';
  numero: number | undefined;
  bairro: string = '';
  cidade: string = '';
  mostrarCartao: boolean = false;  // Controla se o cartão de visitas vai aparecer ou não

  // Função chamada quando o formulário é enviado
  gerarCartaoDeVisitas(): void {
    this.mostrarCartao = true;  // Se for "true", o cartão de visitas vai aparecer
  }
}

**<!- app.module.ts -->**

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartaoDeVisitasComponent } from './cartao-de-visitas/cartao-de-visitas.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaoDeVisitasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

**<!- app.component.html -->**

 <div style="text-align:center">
    <h1>{{ title }}</h1>
  
    <!-- Formulário para coletar as informações -->
    <form (ngSubmit)="gerarCartaoDeVisitas()">
      <label>Nome:</label>
      <input [(ngModel)]="nome" name="nome" required><br>
  
      <label>Idade:</label>
      <input type="number" [(ngModel)]="idade" name="idade" required><br>
  
      <label>Telefone:</label>
      <input type="tel" [(ngModel)]="telefone" name="telefone" required><br>
  
      <label>E-mail:</label>
      <input type="email" [(ngModel)]="email" name="email" required><br>
  
      <label>Endereço:</label>
      <input [(ngModel)]="endereco" name="endereco" required><br>
  
      <label>Número:</label>
      <input type="number" [(ngModel)]="numero" name="numero" required><br>
  
      <label>Bairro:</label>
      <input [(ngModel)]="bairro" name="bairro" required><br>
  
      <label>Cidade:</label>
      <input [(ngModel)]="cidade" name="cidade" required><br>
  
      <button type="submit">Gerar Cartão</button>
    </form>
  
    <!-- Exibe o cartão de visitas se "mostrarCartao" for true -->
    <div *ngIf="mostrarCartao">
      <h2>Cartão de Visitas</h2>
      <p><strong>Nome:</strong> {{ nome }}</p>
      <p><strong>Idade:</strong> {{ idade }}</p>
      <p><strong>Telefone:</strong> {{ telefone }}</p>
      <p><strong>E-mail:</strong> {{ email }}</p>
      <p><strong>Endereço:</strong> {{ endereco }}</p>
      <p><strong>Número:</strong> {{ numero }}</p>
      <p><strong>Bairro:</strong> {{ bairro }}</p>
      <p><strong>Cidade:</strong> {{ cidade }}</p>
    </div>
  </div>

**<- cartao-de-visitas.component.ts -->**

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

**<- cartao-de-visitas.component.html -->**

  <!-- TEMPLATE DO COMPONENTE -->

<div class="container">
    <h2>Formulário de Cadastro</h2>
    
    <!-- FORMULÁRIO PARA ENTRADA DOS DADOS -->
    <form (ngSubmit)="gerarCartao()">
      <div class="form-section">
        <h3>Seção 1: Informações Pessoais</h3>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" [(ngModel)]="nome" name="nome" required />
        
        <label for="idade">Idade:</label>
        <input type="number" id="idade" [(ngModel)]="idade" name="idade" required />
        
        <label for="telefone">Telefone:</label>
        <input type="text" id="telefone" [(ngModel)]="telefone" name="telefone" required />
        
        <label for="email">E-mail:</label>
        <input type="email" id="email" [(ngModel)]="email" name="email" required />
      </div>
  
      <div class="form-section">
        <h3>Seção 2: Endereço</h3>
        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" [(ngModel)]="endereco" name="endereco" required />
        
        <label for="numero">Número:</label>
        <input type="text" id="numero" [(ngModel)]="numero" name="numero" required />
        
        <label for="bairro">Bairro:</label>
        <input type="text" id="bairro" [(ngModel)]="bairro" name="bairro" required />
        
        <label for="cidade">Cidade:</label>
        <input type="text" id="cidade" [(ngModel)]="cidade" name="cidade" required />
      </div>
  
      <button type="submit">Gerar Cartão</button>
    </form>
  
    <!-- CARTÃO DE VISITAS GERADO -->
    <div *ngIf="exibirCartao" class="cartao">
      <h2>Cartão de Visitas</h2>
      <p><strong>Nome:</strong> {{ nome }}</p>
      <p><strong>Idade:</strong> {{ idade }}</p>
      <p><strong>Telefone:</strong> {{ telefone }}</p>
      <p><strong>E-mail:</strong> {{ email }}</p>
      <p><strong>Endereço:</strong> {{ endereco }}</p>
      <p><strong>Número:</strong> {{ numero }}</p>
      <p><strong>Bairro:</strong> {{ bairro }}</p>
      <p><strong>Cidade:</strong> {{ cidade }}</p>
    </div>
  </div>  

**<- cartao-de-visitas.component.css -->**

.container {
    width: 50%;
    margin: 0 auto;
    padding: 20px;
  }
  
  .form-section {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin: 10px 0 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .cartao {
    margin-top: 20px;
    padding: 20px;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
  }
  
  .cartao p {
    margin: 5px 0;
  }
  
  .cartao h2 {
    text-align: center;
  }  