/**
 * @license
 * Copyright Virgee LLC. All Rights Reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
} from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { SVBooleanInput } from '../types';

@Directive()
export abstract class SVButton {
  constructor(
    protected renderer: Renderer2,
    protected hostElement: ElementRef<HTMLElement>
  ) {}

  /**
   * Gets the disabled state of the button.
   * @returns {boolean} The disabled state of the button.
   */
  @Input()
  @HostBinding('attr.aria-disabled')
  @HostBinding('class.btn-disabled')
  get disabled(): boolean {
    return this._disabled;
  }

  /**
   * Sets the disabled state of the button.
   * @param value - The new disabled state value.
   */
  set disabled(value: SVBooleanInput) {
    // Convert the value to a boolean.
    this._disabled = convertToBoolProperty(value);
    
    // Set the disabled attribute on the host element.
    this.renderer.setProperty(
      this.hostElement.nativeElement,
      'disabled',
      this._disabled
    );

  }

  private _disabled = false;
}
