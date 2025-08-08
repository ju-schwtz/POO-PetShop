export class Cachorro {
  #raca: string;
  #porte:number;
 
  
  constructor(raca: string, porte:number) {
    this.#raca = raca;
    this.#porte=porte;
   
  }

  getRaca(): string {
    return this.#raca;
  }
  getPorte(): number {
    return this.#porte
  }
 setRecomendarBanho(porte:number){
    this.#porte=porte;

 }

}