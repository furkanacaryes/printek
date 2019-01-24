import {
    transition, group, query, style, animate, state, stagger
} from '@angular/animations';

export const aSecondPlease = [
  state('0', style({
      display: 'none',
      transform: 'translateY(-400px) translateZ(0)'
  })),
  state('1', style({ display: 'flex' })),

  // MenuView ON
  transition('0 => 1', group([

    animate('800ms 400ms ease-out', style({
      transform: 'translateY(0px) translateZ(0)'
    })),

    query('printek-menu a', [
      style({
        opacity: 0,
        transform: 'scale(0.5) translateZ(0)'
      }),
      stagger(-100 , animate('300ms 400ms ease', style({
        opacity: 1,
        transform: 'scale(1) translateZ(0)'
      })))
    ], { optional: true })
  ])),

  // MenuView OFF
  transition('1 => 0', group([

    animate('800ms ease-out', style({
      transform: 'translateY(-264px) translateZ(0)'
    })),

    query('printek-menu a', [
      stagger(100, animate('300ms ease', style({
        opacity: 0,
        transform: 'scale(0.5) translateZ(0)'
      })))
    ], { optional: true })
  ]))
]
