import { TestBed } from '@angular/core/testing';

import { ScrollSyncDirective } from './scroll-sync.directive';
import { UniversalService } from '../../universal.service';

describe('ScrollSyncDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UniversalService],
      providers: [UniversalService]
    })
  })

  it('should create an instance', () => {
    const directive = new ScrollSyncDirective(TestBed.get(UniversalService));
    expect(directive).toBeTruthy();
  });
});
