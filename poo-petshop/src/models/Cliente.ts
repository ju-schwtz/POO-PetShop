
export class Cliente {
  #nome: string;
  #idade:number;
  #endereco: string;
  #cpf: number; 
  
  
  constructor(nome: string, idade:number, endereco:string, cpf: number) {
    this.#nome = nome;
    this.#idade=idade;
    this.#endereco= endereco;
    this.#cpf=cpf;
  }

  getNome(): string {
    return this.#nome;
  }
  getIdade(): number {
    return this.#idade
  }
  getEndereco(): string{
    return this.#endereco
  }
  getCpf(): number {
    return this.#cpf
  }
  setEndereco(endereco: string){ 
    this.#endereco=endereco;

  }
}