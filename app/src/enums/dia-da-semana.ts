enum DiaDaSemana {
    DOMINGO = 0,
    SEGUNDA = 1,
    TERCA = 2,
    QUARTA = 3,
    QUINTA = 4,
    SEXTA = 5,
    SABADO = 6
}

const diasUteis = [
  DiaDaSemana.SEGUNDA,
  DiaDaSemana.TERCA,
  DiaDaSemana.QUARTA,
  DiaDaSemana.QUINTA,
  DiaDaSemana.SEXTA
];

export const isDiaUtil = (dia: number): boolean => {
  return diasUteis.indexOf(dia) !== -1;
};
