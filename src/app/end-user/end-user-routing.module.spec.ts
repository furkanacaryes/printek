import { EndUserRoutingModule } from './end-user-routing.module';

describe('EndUserRoutingModule', () => {
  let endUserRoutingModule: EndUserRoutingModule;

  beforeEach(() => {
    endUserRoutingModule = new EndUserRoutingModule();
  });

  it('should create an instance', () => {
    expect(endUserRoutingModule).toBeTruthy();
  });
});
