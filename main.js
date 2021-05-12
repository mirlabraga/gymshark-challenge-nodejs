const packages = [250, 500, 1000, 2000, 5000];

const decomposition = (pack) => {

  let result = [];
  if (isMinThenFirstElement(pack)) {
    result.push({
      pack: packages[0],
      quantity: 1
    });
    return result;
  }

  const maxValueBefore = getMaxValueBefore(pack);
  let waste = pack%maxValueBefore;
  let quantity = parseInt(pack/maxValueBefore);

  result.push({
    pack: maxValueBefore,
    quantity: quantity
  });

  while(waste > 0) {

    if(isMinThenFirstElement(pack)) {
      result.push({
        pack: packages[0],
        quantity: 1
      });
      break;
    }

    const maxValueBefore2 = getMaxValueBefore(waste);
    if ( waste%maxValueBefore2 === 0) {
      quantity = Math.ceil(waste/maxValueBefore2)
    } else {
      quantity = 1;
    }

    result.push({
      pack: maxValueBefore2,
      quantity: quantity
    });

    if (waste < maxValueBefore2) {
      break;
    }
    waste = waste%maxValueBefore2;
  }

  return JSON.stringify(result);
}


const isMinThenFirstElement = (pack) => {
  return pack <= packages[0];
}

const getMaxValueBefore = (pack) => {
  let i = 0;
  let beforeValue = packages[0];
  while ((pack >= packages[i])) {
    beforeValue = packages[i];
    i++;
  }
  return beforeValue;
}

console.log(decomposition(250));
console.log(decomposition(251));
console.log(decomposition(500));
console.log(decomposition(750));
console.log(decomposition(751));
console.log(decomposition(1001));
console.log(decomposition(1251));
console.log(decomposition(9000));
console.log(decomposition(12000));
console.log(decomposition(12001));
