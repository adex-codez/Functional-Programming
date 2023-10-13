// This is a function which does not implement partial application to make us understand partial application

const add = (a: number, b: number) => {
	return a + b;
}

/* const result = add(5,5) //all the arguments are provided at the same time
console.log(result) */


/// This is a function which implements partial application to make us understand partial application

function addEvenPartial(a: number){
	if(a % 2 == 0){
		return(b: number) => {
			return a + b;
		}
	}
	else{
		throw new Error("Your first number must be an even number")
	}
	
}
const add5 = addEvenPartial(2) //first argument is provided first
const result2 = add5(5) //the second argument is provided later
console.log(result2)

//This a function that allows it partial and complete application
function addPartialAndComplete(a: number, b?: number){
	if(b !== undefined){
		return a +  b;
	}
	else{
		return (b2: number) => {
			return a + b2
		}
	}
}
const result3 = addPartialAndComplete(5, 5) //all arguments are passed
console.log(result3)
const addAnother5 = addPartialAndComplete(5) as (b: number) => number //first argument is passed
const result4 = addAnother5(5) //second argument is passed
console.log(result4)




const trim = (s: string) => s.trim();
const capitalize = (s: string) => s.toLocaleUpperCase();

const compose = <T>(f: (x: T) => T, g: (x: T) => T) => (x: T) => f(g(x));

const trimAndCapitalize = compose(capitalize, trim);

const replace = (s: string, f: string) => (r: string) => s.split(f).join(r);

const trimCapitalizeAndReplace = compose(trimAndCapitalize, replace("/", "-"))

console.log(trimCapitalizeAndReplace("13/feb/1989"))

