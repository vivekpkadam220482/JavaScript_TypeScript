/* Number, String, Boolean, Null, Undefined, Union Types, Function Return Types, Any Type */

let age:number = 25
let price:number = 99.99
let bigNumber:number = 9007199254741991
console.log(`Age: ${age}, Price: ${price}, Big Number: ${bigNumber}`)

let firstName:string = "John"
let lastName:string = 'Doe'
let fullName:string = `Full Name: ${firstName} ${lastName}`
console.log(fullName)

let isActive:boolean = false
let hasLicense:boolean = true
console.log(`Is Active: ${isActive}, Has License: ${hasLicense}`)

let isNull:null = null
let isUndefined:undefined = undefined
console.log(`Null Value: ${isNull}, Undefined Value: ${isUndefined}`)

let abcUnion:string | number | boolean
abcUnion = "Hello"
console.log(`abcUnion as string: ${abcUnion}`)
abcUnion = 42
console.log(`abcUnion as number: ${abcUnion}`)
abcUnion = true
console.log(`abcUnion as boolean: ${abcUnion}`) 

function sum(a:number, b:number):number {
    return a + b
}
let result:number = sum(10, 20)
console.log(`Sum Result: ${result}`)

let newAny:any = "This can be any type"
console.log(`newAny initially: ${newAny}`)
newAny = 100
console.log(`newAny after change: ${newAny}`)


/*
let numbersArray:number[] = [1, 2, 3, 4, 5]
let namesArray:Array<string> = ["Alice", "Bob", "Charlie"]
let tupleExample:[number, string] = [1, "One"]
enum Color { Red, Green, Blue }
let favoriteColor:Color = Color.Green
*/
