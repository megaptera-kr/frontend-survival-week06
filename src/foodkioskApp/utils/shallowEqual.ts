/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function shallowEqual(objA: any, objB: any): boolean {
  for (const key in objA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
}
