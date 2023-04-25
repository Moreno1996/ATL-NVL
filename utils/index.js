export function validateRequirement(number, requirementString) {
    const [operator,value] = requirementString.split(" ");
  
    return operator === '<=' ? number <= value :
           operator === '>=' ? number >= value :
           operator === '<' ? number < value :
           operator === '>' ? number > value :
           operator === '==' ? number == value :
           operator === '===' ? number === value :
           (() => { throw new Error('Invalid operator in requirement string: ' + requirementString); })();
  }
  