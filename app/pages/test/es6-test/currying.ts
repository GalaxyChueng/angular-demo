import {Arguments} from '@angular/cli/models/interface';

export default function curryingTest() {
  const curry = (fn, arr?: Array = []) => (...args: any[]) => {
    console.log(args);
    return ((arg) => {
        console.log(arg);
        console.log(fn.length);
        return arg.length === fn.length
          ? fn(...arg)
          : curry(fn, arg);
      }
    )([...arr, ...args]);
  };

  const curryTest = curry((a, b, c, d) => a + b + c + d);
  const t = curryTest(1, 2)(3, 4);
  console.log(t);
}
