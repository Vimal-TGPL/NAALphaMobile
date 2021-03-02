

/* We define the animation effects and style here */

import { Animation, AnimationController } from '@ionic/angular'

/* enterAnimation function is used for the page transition */

export function enterAnimation(baseEl: HTMLElement, opts?: any): Animation {
    const Duration = 400; // Animation Duration
    const animationCtrl = new AnimationController();

    if (opts.direction === 'forward') {     // On Router Direction Forward
        return animationCtrl.create()
            .addElement(opts.enteringEl)
            .duration(Duration)
            .easing('ease-in')
            .fromTo('opacity', 0, 1);
    } else {                                // On Router Directon Backward
        const rootAnimation = animationCtrl.create()
            .addElement(opts.enteringEl)
            .duration(Duration)
            .easing('ease-in')
            .fromTo('opacity', 0, 1);

        const leavingAnimation = animationCtrl.create()
            .addElement(opts.leavingEl)
            .duration(Duration)
            .easing('ease-out')
            .fromTo('opacity', 1, 0);

        return animationCtrl.create().addAnimation([rootAnimation, leavingAnimation]);
    }
}