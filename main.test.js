const getMinPackages = require("./main");

test('check pack of 250 should be return 1 pack of 250', () => {
  const result = getMinPackages(250);
  const expectResult = [ { pack: 250, quantity: 1 } ];
  expect(result).toMatchObject(expectResult);
});


test('check pack of 251 should be return 1 pack of 500', () => {
  const result = getMinPackages(251);
  const expectResult = [ { pack: 500, quantity: 1 } ];
  expect(result).toMatchObject(expectResult);
});

test('check pack of 500 should be return 1 pack of 500', () => {
  const result = getMinPackages(500);
  const expectResult = [ { pack: 500, quantity: 1 } ];
  expect(result).toMatchObject(expectResult);
});

test('check pack of 750 should be return 1 pack of 500 and 1 of 250', () => {
  const result = getMinPackages(750);
  const expectResult = [ { pack: 250, quantity: 1 }, { pack: 500, quantity: 1 } ];
  expect(result).toMatchObject(expectResult);
});

test('check pack of 751 should be return 1 pack of 1000', () => {
  const result = getMinPackages(751);
  const expectResult = [ { pack: 1000, quantity: 1 } ];
  expect(result).toMatchObject(expectResult);
});

test('check pack of 1001 should be return 1 pack of 1000 and 1 of 250', () => {
  const result = getMinPackages(1001);
  const expectResult = [ { pack: 250, quantity: 1 }, { pack: 1000, quantity: 1 } ];
  expect(result).toMatchObject(expectResult);
});

test('check pack of 1250 should be return 1 pack of 1000 and 1 of 250', () => {
  const result = getMinPackages(1250);
  const expectResult = [ { pack: 250, quantity: 1 }, { pack: 1000, quantity: 1 } ];
  expect(result).toMatchObject(expectResult);
});

test('check pack of 9000 should be return 1 pack of 5000 and 2 of 2000', () => {
  const result = getMinPackages(9000);
  const expectResult =  [ { pack: 2000, quantity: 2 }, { pack: 5000, quantity: 1 } ];
  expect(result).toMatchObject(expectResult);
});

test('check pack of 12000 should be return 2 pack of 5000 and 1 of 2000', () => {
  const result = getMinPackages(12000);
  const expectResult =  [ { pack: 2000, quantity: 1 }, { pack: 5000, quantity: 2 } ];
  expect(result).toMatchObject(expectResult);
});

test('check pack of 12001 should be return 2 pack of 5000, 1 of 2000 and 1 of 250', () => {
  const result = getMinPackages(12001);
  const expectResult =  [ { pack: 250, quantity: 1 }, { pack: 2000, quantity: 1 }, { pack: 5000, quantity: 2 } ];
  expect(result).toMatchObject(expectResult);
});
