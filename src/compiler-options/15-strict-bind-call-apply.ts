function fn(x: string) {
    return parseInt(x);
}
export const n1 = fn.call(undefined, '10');
export const n2 = fn.call(undefined, 10);

// when enabled: this checks that call, bind and apply are invoked with correct argument types
// if disabled: call, bind and apply can be invoked with any argument types and return `any`
