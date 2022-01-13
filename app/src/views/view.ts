export abstract class View<T> {
    private elemento: HTMLElement;

    constructor (id: string) {
      this.elemento = document.getElementById(id) as HTMLElement;
    }

    protected abstract template (args: T) : string;

    render (args: T) : void {
      this.elemento.innerHTML = this.template(args);
    }
}
