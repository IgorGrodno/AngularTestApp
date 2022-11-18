import { TransactionCountByTypePipe } from './transaction-count-by-type.pipe';

describe('TransactionCountByTypePipe', () => {
  it('create an instance', () => {
    const pipe = new TransactionCountByTypePipe();
    expect(pipe).toBeTruthy();
  });
});
