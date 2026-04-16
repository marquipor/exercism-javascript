// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { ElectronicDevice } from './lib.js';

/**
 * Checks if input is a boolean.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a boolean
 */
export function isBoolean(value) {

  return typeof value === "boolean";
}
/**
 * Checks if input is a finite number or bigint.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a finite number or bigint
 */
export function isNumber(value) {
  /*  El typeof de Inifinite es number, compruebo que es finito:
       Number.isFinite(x)*/ 
  return typeof value === "number" && Number.isFinite(value) ||
         typeof value ==="bigint";
}

/**
 * Checks if a value is an object.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an object.
 */
export function isObject(value) {
  // El typeof null = object. Comprobamos que value no sea null. 
  return typeof value === "object" && value!==null;
}

/**
 * Checks if a value is a numeric string.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a numeric string.
 */
export function isNumericString(value) {
  // Falso si no es String
  if(typeof value !== 'string') return false;
  // Si está vacio devuelvo falso. Number("") da 0, que sería falso positivo
  if(value.trim() === "") return false;
  /* Lo transformo en Number. Si no es NumericString devuelve NaN
  * El typeof de NaN es number. Compruebo entonces si es NaN con el método
  * Number.isNaN y devuelvo el resultado contrario */ 
  const number = Number(value);
  return !Number.isNaN(number);
}

/**
 * Checks if an object is an instance of the `ElectronicDevice` class or one of its children.
 *
 * @param {object} object
 * @returns {boolean} whether the object is an instance of the `ElectronicDevice` class or one of its children.
 */
export function isElectronic(object) {
  return object instanceof ElectronicDevice;
}

/**
 * Checks if a value is a non empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a non empty array.
 */
export function isNonEmptyArray(value) {
  if(!Array.isArray(value)) return false;
  return value.length>0;
  
}

/**
 * Checks if a value is an empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an empty array.
 */
export function isEmptyArray(value) {
  if(!Array.isArray(value)) return false;
  return value.length === 0;
  
}

/**
 * Checks if a value has a "type" property or method.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a "type" property or method.
 */
export function hasType(object) {
  return "type" in object;
}

/**
 * Throws an error if an object is missing an "id" property or method.
 *
 * @param {object} object
 * @returns {never|void} undefined if the input has an "id" property or method, otherwise throws an error.
 */
export function assertHasId(object) {

  if (("id" in object)===false){
    throw new Error('Error');}
}

/**
 * Checks if a value has an "id" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has an "id" property.
 */
export function hasIdProperty(object) {

  if(object ===  'null' || typeof object !== 'object') return false;

  return Object.hasOwn(object, "id");
    
}
/**
 * Checks if a value has a defined "type" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a defined "type" property.
 */
export function hasDefinedType(object) {
  if(typeof object !== 'object' || object  === null) return false;

  return Object.hasOwn(object,"type") && object.type!==undefined;

}
