/**
 * @license
 * Copyright Virgee LLC. All Rights Reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

/**
 * SVNullableInput is a type that can be either a string, null, or undefined.
 * This type is useful when you want to allow a variable to have a string value,
 * but also want to allow for the possibility that the variable might not have a value at all.
 */
export type SVNullableInput = string | null | undefined;

/**
 * SVBooleanInput is a type that can be either a boolean, string, null, or undefined.
 * This type is useful when you want to allow a variable to have a boolean value,
 * but also want to allow for the possibility that the variable might be a string,
 * or might not have a value at all.
 */
export type SVBooleanInput = boolean | SVNullableInput;
