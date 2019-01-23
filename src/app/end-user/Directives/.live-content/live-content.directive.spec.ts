import { LiveContentDirective } from './live-content.directive';
import { ElementRef } from '@angular/core';

describe('LiveContentDirective', () => {
  it('should create an instance', () => {
    const rootElem = new ElementRef<any>(document.createElement('div'));
    const directive = new LiveContentDirective(rootElem);
    expect(directive).toBeTruthy();
  });
});
