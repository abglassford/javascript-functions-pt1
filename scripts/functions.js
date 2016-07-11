// 1. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function sum(a, b){
  return a + b
}
console.log(sum(3, 5))

// 2. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function isEqual(a, b){
  if(a === b){
    return true
  } else {
    return false
  }
}
console.log(isEqual(3, 3))
console.log(isEqual(3, 5))

// 3. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function discountPercentage(price, discount){
  var percent = discount / 100
  if((discount > 100) || (discount < 0)){
    return('Coupon Invalid');
    } else {
    return('$' + (percent * price).toFixed(2));
  }
}
console.log(discountPercentage(304, 99))

// 4. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


function stringCapitalize(string){
  var capString = ''
  var stringArray = string.split(' ')
  for(var i = 0; i < stringArray.length; i++){
    var splitString = stringArray[i].split('')
    splitString[0] = splitString[0].toUpperCase()
    stringArray[i] = splitString.join('')
  }
  capString = stringArray.join(' ')
  return capString
}
console.log(stringCapitalize('gas powered stick never runs outta gas!'))

// 5. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function evenNumbers(number){
  var even = []
  if(number < 100 && number > 0){
    for(var i = 0; i <= number; i++){
      if(i % 2 === 0){
        even.push(i);
      }
    }
  }
  return even.join(' ')
}
console.log(evenNumbers(54))

// 6. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function isDivisible(num1, num2){
  if(num1 % num2 === 0){
    return true
  }else {
    return false
  }
}
console.log(isDivisible(4, 2));
console.log(isDivisible(4, 3));

// 7. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function oddNumbers(num){
  var oddOverForty = []
  var oddUnderForty = []
  if(num < 100 && num > 0){
    if(num > 40){
      for(var i = 40; i < num; i++){
        if(i % 2 !== 0){
        oddOverForty.push(i)
        }
      }
      return oddOverForty.join(' ')
    } if(num < 40){
      for(var j = 0; j < 40; j++){
        if(j % 2 !== 0){
        oddUnderForty.push(j)
        }
      }
      return oddUnderForty.join(' ')
    }
  }
}
console.log(oddNumbers(39));
