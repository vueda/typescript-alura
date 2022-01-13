import { View } from './view.js';

export class MensagemView extends View<string> {
  protected template (conteudo: string): string {
    return `<p class="alert alert-info">${conteudo}</p>`;
  }
}
