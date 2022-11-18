import { TransactionCountByTypeByClientPipe } from './transaction-count-by-type-by-client.pipe';

describe('TransactionCountByTypeByClientPipe', () => {
  it('create an instance', () => {
    const pipe = new TransactionCountByTypeByClientPipe();
    expect(pipe).toBeTruthy();
  });
});
