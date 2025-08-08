import {Cliente} from "./Cliente";
export class Animal {
  #nome: string;
  #idade:number;
  #peso:number;
  #tutor:Cliente;
  
  constructor(nome: string, idade:number, peso:number, tutor: Cliente) {
    this.#nome = nome;
    this.#idade=idade;
    this.#peso=peso;
    this.#tutor=tutor;
  }

  getNome(): string {
    return this.#nome;
  }
  getIdade(): number {
    return this.#idade
  }
  getPeso(): number{
    return this.#peso
  }
  getTutor(): Cliente {
    return this.#tutor
  }
  setPeso(): number { 
    return this.#peso
  }
  setIdade(): number {
    return this.#idade
  }
}