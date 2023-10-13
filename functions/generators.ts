function *foo(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 5;
}
let bar = foo();
console.log(bar.next());
console.log(bar.next());
console.log(bar.next());
console.log(bar.next());
console.log(bar.next());
console.log(bar.next());
