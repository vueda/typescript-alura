export const Inspetor = () => {
  return (_:unknown, propertyKey:string, descriptor : PropertyDescriptor) => {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Método: ${propertyKey}`);
      console.log(`Parâmetros: ${JSON.stringify(args)}`);
      const resposta = metodoOriginal.apply(this, args);
      console.log(`Resposta: ${JSON.stringify(resposta)}`);
      return resposta;
    };
    return descriptor;
  };
};
