export const LogTempoExecucao = () => {
  return (_:unknown, propertyKey:string, descriptor : PropertyDescriptor) => {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.time(propertyKey);
      const resposta = metodoOriginal.apply(this, args);
      console.timeEnd(propertyKey);
      return resposta;
    };

    return descriptor;
  };
};
