"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Post by Gerard Sans: https://medium.com/google-developer-experts/angular-2-animate-router-transitions-6de179e00204#.7h2femijg
// Add <script src="https://rawgit.com/web-animations/web-animations-js/master/web-animations.min.js"></script> into index.html for polyfill
// Add the following to any component to animate the view
// import { routerTransition } from './router.animations';
// @Component({
//   selector: 'home',
//   template: `<h1>Home</h1>`,
//   animations: [routerTransition()],
//   host: {'[@routerTransition]': ''}
// })
function routerTransition() {
    return slideToLeft();
}
exports.routerTransition = routerTransition;
function slideToRight() {
    return core_1.trigger('routerTransition', [
        core_1.state('void', core_1.style({ position: 'fixed', width: '40%' })),
        core_1.state('*', core_1.style({ position: 'fixed', width: '0%' })),
        core_1.transition(':enter', [
            core_1.style({ transform: 'translateX(-40%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(0%)' }))
        ]),
        core_1.transition(':leave', [
            core_1.style({ transform: 'translateX(0%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(40%)' }))
        ])
    ]);
}
function slideToLeft() {
    return core_1.trigger('routerTransition', [
        core_1.state('void', core_1.style({ position: 'fixed', width: '40%' })),
        core_1.state('*', core_1.style({ position: 'fixed', width: '0%' })),
        core_1.transition(':enter', [
            core_1.style({ transform: 'translateX(40%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(0%)' }))
        ]),
        core_1.transition(':leave', [
            core_1.style({ transform: 'translateX(0%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(-40%)' }))
        ])
    ]);
}
function slideToBottom() {
    return core_1.trigger('routerTransition', [
        core_1.state('void', core_1.style({ position: 'fixed', width: '100%', height: '100%' })),
        core_1.state('*', core_1.style({ position: 'fixed', width: '100%', height: '100%' })),
        core_1.transition(':enter', [
            core_1.style({ transform: 'translateY(-100%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateY(0%)' }))
        ]),
        core_1.transition(':leave', [
            core_1.style({ transform: 'translateY(0%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return core_1.trigger('routerTransition', [
        core_1.state('void', core_1.style({ position: 'fixed', width: '100%', height: '100%' })),
        core_1.state('*', core_1.style({ position: 'fixed', width: '100%', height: '100%' })),
        core_1.transition(':enter', [
            core_1.style({ transform: 'translateY(100%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateY(0%)' }))
        ]),
        core_1.transition(':leave', [
            core_1.style({ transform: 'translateY(0%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=router.animations.js.map