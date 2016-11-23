// Extended type definitions for Sugar v2.0.3
// Project: https://sugarjs.com/
// Definitions by: Andrew Plummer <plummer.andrew@gmail.com>

// <reference path="sugar.d.ts" />

interface ArrayConstructor {
  construct<T>(n: number, map: (i: number) => any): T[];
  create<T>(obj?: number|ArrayLike<T>, clone?: boolean): T[];
}

interface Array<T> {
  add(item: T|T[], index?: number): T[];
  append(item: T|T[], index?: number): T[];
  at(index: number|number[], loop?: boolean): T;
  clone(): T[];
  compact(all?: boolean): T[];
  exclude(search: T|sugarjs.Array.searchFn): T[];
  first(num?: number): T;
  flatten(limit?: number): T[];
  from(index: number): T[];
  groupBy(map: string|sugarjs.Array.mapFn, fn?: (arr: T[], key: string, obj: Object) => void): Object;
  inGroups(num: number, padding?: any): T[];
  inGroupsOf(num: number, padding?: any): T[];
  insert(item: T|T[], index?: number): T[];
  intersect(arr: T[]): T[];
  isEmpty(): boolean;
  isEqual(arr: T[]): boolean;
  last(num?: number): T;
  remove(search: T|sugarjs.Array.searchFn): T[];
  removeAt(start: number, end?: number): T[];
  sample(num?: number, remove?: boolean): T;
  shuffle(): T[];
  sortBy<U>(map?: string|sugarjs.Array.sortMapFn, desc?: boolean): T[];
  subtract(item: T|T[]): T[];
  to(index: number): T[];
  union(arr: T[]): T[];
  unique<U>(map?: string|sugarjs.Array.mapFn): T[];
  zip(...args: any[]): T[];
}