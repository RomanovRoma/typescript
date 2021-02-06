// Типы данных

// let a = 2
// a = 'TypeScript'
// a = 1 + 5
// a = 1 + 'Roman'
let a: number = 1

// let b = 'Hello'
// b = 1
// b = b + 'TypeScript'
let b: string = 'Hello'

// let c = true
// c = 1
// c = false
let c: boolean = true

// let d = null
let d: null = null
// d = 'Hello'
// d = null

// let e = undefined
let e: undefined = undefined
// e = 1
// e = undefined

let f: object = {}
// f = 'Hello'
f = { text: 'Hello' }
f.text
// let f: { text: string } = { text: 'Hello' }
// f.text
// const f: { text: string } = { text: "Hello" }
// f = { text: 'Hello TypeScript' }
// f.text = 'Hello'

let g: any
g = 1
g = 'Hello'
g = true
g = null
g = undefined
g = {}
g = function () {}
