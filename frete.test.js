// frete.test.js = CÓDIGO DE TESTE do frete (por enquanto, só UM teste)

// executor de testes que já vem dentro do Node
const test = require('node:test');
// comparadores: conferem obtido x esperado
const assert = require('node:assert');
// traz a função que será testada
const { calcularFrete } = require('./frete');

// entrega curta (3 km): deve custar a taxa fixa de R$ 7
test('entrega de 3 km custa R$ 7', () => {
  // confere: o frete de 3 km tem de ser exatamente 7
  assert.strictEqual(calcularFrete(3), 7);
});
// Teste de borda: distância de 0 km custa R$ 7 (taxa fixa inicial)
test('entrega de 0 km custa R$ 7', () => {
  assert.strictEqual(calcularFrete(0), 7);
});

test('entrega com a distância do meu RA', () => {
  const distancia = 25;       // 11 + 14 (resto de 44/15)
  const valorEsperado = 27;   // 7 + (25 - 5)

  assert.strictEqual(calcularFrete(distancia), valorEsperado);
});
