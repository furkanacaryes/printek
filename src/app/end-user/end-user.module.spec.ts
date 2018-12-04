import { EndUserModule } from './end-user.module';

describe('EndUserModule', () => {
  let endUserModule: EndUserModule;

  beforeEach(() => {
    endUserModule = new EndUserModule();
  });

  it('should create an instance', () => {
    expect(endUserModule).toBeTruthy();
  });
});
