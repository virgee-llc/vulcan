/**
 * @license
 * Copyright Virgee LLC. All Rights Reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { SVBooleanInput } from './types';

/**
 * Converts a value to a boolean property.
 *
 * @param val - The value to be converted.
 * @returns The converted boolean value.
 */
export const convertToBoolProperty = (val: SVBooleanInput): boolean => {
  // If the value is a string, convert it to a boolean.
  if (typeof val !== 'string') {
    return !!val;
  }

  // Return true or false depending on whether the value is the string 'true' or an empty string.
  return /^(true)?$/i.test(val.trim());
};
