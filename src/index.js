module.exports = function toReadable (number) {
  let result = '';
  let numberStr = number.toString()
  if (number > 99) {
    let hundreds = numberStr.charAt(0);
    result = getDigitName(hundreds) + ' hundred';
    if (number % 100 != 0) {
      result += ' ' + getDecadeName(numberStr.substr(1));
    }
  } else if (number > 9) {
    result = getDecadeName(numberStr);
  } else {
    result = getDigitName(numberStr);
  }

  return result;
}

function getDigitName(digit) {
  switch (digit) {
    case '0':
      return 'zero';
    case '1':
      return 'one';
    case '2':
      return 'two';
    case '3':
      return 'three';
    case '4':
      return 'four';
    case '5':
      return 'five';
    case '6':
      return 'six';
    case '7':
      return 'seven';
    case '8':
      return 'eight';
    case '9':
      return 'nine';
  }
}

function getDecadeName(decade) {
  result = '';

  if (Number.parseInt(decade) < 10) {
    result = getDigitName(decade.charAt(1));
  } else if (Number.parseInt(decade) < 20) {
    switch (decade) {
      case '10':
        result = 'ten';
        break;
      case '11':
        result = 'eleven';
        break;
      case '12':
        result = 'twelve';
        break;
      case '13':
        result = 'thirteen';
        break;
      case '14':
        result = 'fourteen';
        break;
      case '15':
        result = 'fifteen';
        break;
      case '16':
        result = 'sixteen';
        break;
      case '17':
        result = 'seventeen';
        break;
      case '18':
        result = 'eighteen';
        break;
      case '19':
        result = 'nineteen';
        break;
    }
  } else {
    switch (decade.charAt(0)) {
      case '2':
        result = 'twenty';
        break;
      case '3':
        result = 'thirty';
        break;
      case '4':
        result = 'forty';
        break;
      case '5':
        result = 'fifty';
        break;
      case '6':
        result = 'sixty';
        break;
      case '7':
        result = 'seventy';
        break;
      case '8':
        result = 'eighty';
        break;
      case '9':
        result = 'ninety';
        break;
    }
    if (decade.charAt(1) != '0') {
      result += ' ' + getDigitName(decade.charAt(1));
    }
  }

  return result;
}