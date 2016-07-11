// 1. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function sum(a, b){
  return a + b
}

sum(3, 5)

// 2. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function isEqual(a, b){
  if(a === b){
    return true
  } else {
    return false
  }
}

isEqual(3, 3)
isEqual(3, 5)
// 3. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function discountPercentage(a, b){
  var discount = b / 100
  if((discount * a >= a) || (discount * a <= 0)){
    return('Coupon Invalid');
    } else {
    return('$' + (discount * a).toFixed(2));
  }
}

discountPercentage(304, 99)

// 4. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
