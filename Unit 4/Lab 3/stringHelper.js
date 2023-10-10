function notString(str) {
    return 'not ' + str;
}

function makeAbba(a, b) {
    return a + b + b + a;
}

function missingChar(str, i) {
    return str.substring(0, i) + str.substring(i + 1);
}

function frontBack(str) {
      return str.substring(str.length-1) + str.substring(1, str.length - 1) + str.substring(0,1);
}