export const DomInjector = (selector: string) => {
  return (target:unknown, propertyKey:string) => {
    let elemento : HTMLElement | null = null;
    const getter = function () {
      if (!elemento) { elemento = document.querySelector(selector); }

      return elemento;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter
    });
  };
};
