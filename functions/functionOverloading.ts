// function test(name: string): string;
// function test(age: number): string;
// function test(single: boolean): string;
//
// function test(value: (string | number | boolean)): string {
//   switch (typeof value) {
//     case "string":
//       return `My name is ${value}.`;
//
//     case "number":
//       return `I'm ${value} years old`
//
//     case "boolean":
//       return value ? "I'm single" : "I'm not single"
//     default:
//       throw new Error("Invalid Operation")
//   }
// }
//
// let result = test("adeadura")
// console.log(result)

function printCoordinates(a: string): string;
function printCoordinates(b: object): string;

function printCoordinates(value: (string | object)): string {
  switch (typeof value) {
    case "string":
      const splittedValue = value.split(',')
      splittedValue
      return ` ${splittedValue}`;
    default:
      return "Invalid Coordinate"
  }
}
"x: 12, y: 2"
console.log(printCoordinates("x: 12, y: 2"))
