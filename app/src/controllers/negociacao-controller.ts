import { DomInjector } from '../decorators/dom-inject.js';
import { Inspetor } from '../decorators/inspetor.js';
import { LogTempoExecucao } from '../decorators/tempo-execucao.js';
import { isDiaUtil } from '../enums/dia-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacaoService } from '../services/negociacao-service.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
  @DomInjector('#data')
  private inputData: HTMLInputElement;

  @DomInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;

  @DomInjector('#valor')
  private inputValor: HTMLInputElement;

  @DomInjector('.form')
  private form: HTMLFormElement;

  @DomInjector('#botao-importar')
  private btnImportar: HTMLButtonElement;

  private negociacoes = new Negociacoes();
  private negociacaoService = new NegociacaoService();
  private negociacoesView = new NegociacoesView('negociacoes');
  private mensagemView = new MensagemView('mensagem');

  constructor () {
    this.negociacoesView.render(this.negociacoes);
    this.btnImportar.addEventListener('click', () => this.importa());
  }

  private limpar (): void {
    this.form.reset();
    this.inputData.focus();
  }

  @LogTempoExecucao()
  @Inspetor()
  adiciona (): void {
    const data = this.inputData.valueAsDate as Date;
    data.setMinutes(data.getMinutes() + data.getTimezoneOffset());
    const negociacao = new Negociacao(
      data,
      parseInt(this.inputQuantidade.value),
      parseFloat(this.inputValor.value)
    );

    if (!isDiaUtil(negociacao.data.getDay())) {
      this.mensagemView.render('Negociações só podem ser criadas em dias úteis.');
      return;
    }

    this.negociacoes.adiciona(negociacao);
    this.negociacoesView.render(this.negociacoes);
    this.mensagemView.render('Negociação adicionada!');
    this.limpar();
  }

  async importa () : Promise<void> {
    const negociacoes = await this.negociacaoService.listar();
    negociacoes.forEach(n => this.negociacoes.adiciona(n));
    this.negociacoesView.render(this.negociacoes);
  }
}
