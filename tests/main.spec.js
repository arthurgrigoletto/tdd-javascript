describe('Main', function() {
  var arr;
  // Roda uma vez antes do bloco
  before(function() {});

  // Roda uma vez depois do bloco
  after(function() {});

  // Roda todas as vezes, antes de cada bloco
  beforeEach(function() {
    arr = [1, 2, 3];
  });

  // Roda todas as vezes, depois de cada bloco
  afterEach(function() {});

  it('should have a size of 4 when push another value to the array', function() {
    arr.push(4);
  });

  it('should have a size of 2 when pop a value from the array', function() {
    arr.pop();
  });

  it('should remove 3 when use pop in the array', function() {
    console.log(arr.pop() === 3);
  });
});
