import { Negociacao } from './negociacao.js';

export class Negociacoes {
  constructor (private negociacoes: Negociacao[] = []) { }

  adiciona (negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  lista (): readonly Negociacao[] {
    return this.negociacoes;
  }
}
