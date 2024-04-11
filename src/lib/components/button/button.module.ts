/**
 * @license
 * Copyright Virgee LLC. All Rights Reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { SVButtonComponent } from './button.component';
import { SVSharedModule } from '../../shared/shared.module';

const SV_BUTTON_COMPONENTS = [
  SVButtonComponent,
];

@NgModule({
  imports: [SVSharedModule],
  exports: [...SV_BUTTON_COMPONENTS],
  declarations: [...SV_BUTTON_COMPONENTS],
})
export class SVButtonModule {}
