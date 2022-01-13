import { Negociacao } from '../models/negociacao.js';

export type NegociacaoApi = {
    vezes: number,
    montante: number
}

export class NegociacaoService {
  public async listar (): Promise<Negociacao[]> {
    const res = await fetch('http://localhost:8080/dados');
    const data = await res.json() as NegociacaoApi[];
    return data.map(n => new Negociacao(new Date(), n.vezes, n.montante));
  }
}
