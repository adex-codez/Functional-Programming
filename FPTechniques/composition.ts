const trim = (s: string) => s.trim();
const capitalize = (s: string) => s.toLocaleUpperCase();

/* const trimAndCapitalize = (s: string) => capitalize(trim(s)); */

/* const result = trimAndCapitalize("   Hello world    "); */

/* console.log(result) */
const compose = <T>(f: (x: T) => T, g: (x: T) => T) => (x: T) => f(g(x));

const trimAndCapitalize = compose(capitalize, trim);
console.log(trimAndCapitalize("  Hello world ")) 
