// Lexical scope means where a function is written in the code determines
// which variables it can access. It does not depend on where the function is called.

// Think of scope like nested boxes:

const globalVari = "This is  a global functions";

function outer() {
  const outerFunction = "this is outer function";

  function inner() {
    const innerFunction = "this is inner function";
    console.log(inner);
    console.log(outer);
    console.log(globalVari);
  }
  inner();
}

outer();

const varGlobal = "This is glo";

const outSider = () => {
  const outSide = "this is outer functions";

  const insider = () => {
    const inSide = "this is inner functions";

    console.log(insider);
    console.log(outSider);
    console.log(varGlobal);
  };
  insider();
};
outSider();
