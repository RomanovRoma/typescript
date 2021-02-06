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

function a(x: number, y: number): number {
  return x + y;
}

let b = (x: number, y: number): number => x + y

// Сигнатура функции:
let c: (x: number, y: number) => number
// c = function (x: number, y: string): string {
//   return x + y
// }
c = function (x: number, y; number): number {
  return x + y
}

function d(x: number, y: number): void {
  console.log(x + y)
}

function e(x: string): never {
  throw new Error(x)
}

// Перезгрузка функции:
function f(x: any, y: any): any {
  if (typeof x === 'number') {
    return x + y
  } else {
    return `${x} ${y}`
  }
}
console.log(f(1, 2))
console.log(f(`Ответ`, 2))

function g(x: number, y: number): number
function g(x: string, y: number): string
function f(x: any, y: any): any {
  if (typeof x === 'number') {
    return x + y
  } else {
    return `${x} ${y}`
  }
}
console.log(g(1, 2))
console.log(g('Ответ', 3))