"use strict";
// Типы данных
// let a = 2
// a = 'TypeScript'
// a = 1 + 5
// a = 1 + 'Roman'
// let a: number = 1
// let b = 'Hello'
// b = 1
// b = b + 'TypeScript'
// let b: string = 'Hello'
// let c = true
// c = 1
// c = false
// let c: boolean = true
// let d = null
// let d: null = null
// d = 'Hello'
// d = null
// let e = undefined
// let e: undefined = undefined
// e = 1
// e = undefined
// let f: object = {}
// f = 'Hello'
// f = { text: 'Hello' }
// f.text
// let f: { text: string } = { text: 'Hello' }
// f.text
// const f: { text: string } = { text: "Hello" }
// f = { text: 'Hello TypeScript' }
// f.text = 'Hello'
// let g: any
// g = 1
// g = 'Hello'
// g = true
// g = null
// g = undefined
// g = {}
// g = function () {}
// function a(x, y) {
//   return x + y
// }
// function a(x: number, y: number): number {
//   return x + y;
// }
// let b = (x: number, y: number): number => x + y
// // Сигнатура функции:
// let c: (x: number, y: number) => number
// // c = function (x: number, y: string): string {
// //   return x + y
// // }
// c = function (x: number, y; number): number {
//   return x + y
// }
// function d(x: number, y: number): void {
//   console.log(x + y)
// }
// function e(x: string): never {
//   throw new Error(x)
// }
// // Перезгрузка функции:
// function f(x: any, y: any): any {
//   if (typeof x === 'number') {
//     return x + y
//   } else {
//     return `${x} ${y}`
//   }
// }
// console.log(f(1, 2))
// console.log(f(`Ответ`, 2))
// function g(x: number, y: number): number
// function g(x: string, y: number): string
// function f(x: any, y: any): any {
//   if (typeof x === 'number') {
//     return x + y
//   } else {
//     return `${x} ${y}`
//   }
// }
// console.log(g(1, 2))
// console.log(g('Ответ', 3))
// let a: any = 1
// let b: number = a
// let c: unknown = 1
// // let d: number = c
// let d: number = <number>c
// let e: number = c as number
// let f: any = 'Hello'
// let g: number = (<string>f).length
// let h: number | string = 1
// h = 'Hi'
// // h = true
// type I = number | string
// let i: I = 1
// i = 'Hello'
// // i = true
// type J = 1 | 2 | 3
// let j: J = 1
// j = 2
// j = 3
// // j = 4
// type K = 'a' | 'b' | 'c'
// let k: K = 'a'
// k = 'b'
// k = 'c'
// // k = 'd'
// type L = true
// let l: L = true
// // l = false
// type JKL = 'a' | 1 | boolean
// let jkl: JKL = 'a'
// // jkl = 2
// jkl = true
// jkl = false
// type M = { a: string } | { b: string }
// let m: M = { a: ''}
// m = { b: ''}
// m = { a: '', b: ''}
// // m = { a: '', b: '', c: '' }
// // m = {}
// type N = { a: string } & { b: string }
// let n: N = { a: '', b: '' }
// // n = { a: '' }
// // n = { b: '' }
// // n = {}
// type O = { a: string, b?: string }
// let o: O = { a: '' }
// // o = { a: '', b: '' }
// // o = { a: '', b: '', c: '' }
// // o = {}
// if ('b' in o) {
//   console.log('TypeScript')
// }
// Array
// let a = []
// a = [1, '']
// let a = [1, 2, 3]
var a = [1, 2, 3];
// a = [1, '']
var b = [1, 2, 3];
var c = [1, 2, ''];
var d = [1, 2, ''];
// Tuple (кортежи)
var e = [1, ''];
// e = [1]
// e = [1, 2]
var f = [1, ''];
// f = [1]
// f = [1, 2]
// enum (перечисление)
// enum G {
//   A = 5,
//   B
// }
// console.log(G.A, G.B, G[G.A], G[G.B])
var G;
(function (G) {
    G["A"] = "Hello";
    G["B"] = "TS";
})(G || (G = {}));
console.log(G.A, G.B);
console.log(0 /* A */, 1 /* B */);
//# sourceMappingURL=script.js.map