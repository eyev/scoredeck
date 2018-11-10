import { animate, state, style, transition, trigger } from '@angular/animations';

/**
 * slideIn Animations
 * direction in name indicates the motion, not the origin of the element
 */
export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('300ms ease-in', style({ transform: 'translateX(0%)' })),
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateX(-100%)' })),
  ]),
]);

export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({ transform: 'translateX(200%)' }),
    animate('300ms ease-in', style({ transform: 'translateX(0%)' })),
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateX(200%)' })),
  ]),
]);

export const slideInDown = trigger('slideInDown', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('300ms ease-in', style({ transform: 'translateY(0%)' })),
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateY(-100%)' })),
  ]),
]);

export const slideInUp = trigger('slideInUp', [
  transition(':enter', [
    style({ transform: 'translateY(200%)' }),
    animate('500ms ease-in', style({ transform: 'translateY(0%)' })),
  ]),
  transition(':leave', [
    animate('500ms ease-in', style({ transform: 'translateY(200%)' })),
  ]),
]);

export const fadeIn = trigger('fadeIn', [
  state('in', style({ opacity: 1 })),
  transition(':enter', [style({ opacity: 0 }), animate(200)]),
  transition(':leave', animate(200, style({ opacity: 0 }))),
]);

export const nudgeIn = trigger('nudgeIn', [
  transition(':enter', [
    style({ transform: 'translateX(3%)' }),
    animate('100ms ease-in', style({ transform: 'translateX(0%)' })),
  ]),
]);
