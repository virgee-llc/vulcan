/**
 * @license
 * Copyright Virgee LLC. All Rights Reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { SVButton } from './button';

/**
 * Represents a button element.
 */
@Component({
  selector:
    // eslint-disable-next-line @angular-eslint/component-selector
    'button[svButton],a[svButton],input[type="button"][svButton],input[type="submit"][svButton]',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SVButtonComponent extends SVButton {
  /**
   * Handles the click event for the button.
   * If the button is disabled, prevents the default behavior and stops event propagation.
   * @param event - The click event.
   */
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}
