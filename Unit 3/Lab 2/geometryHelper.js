function areaOfRectangle(length, width) {
    return length * width;
}

function perimeterOfRectangle(length, width) {
    return (length * 2) + (width * 2);
}

function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}

function circumferenceOfCircle(radius) {
    return 2 * Math.PI * radius;
}

function volumeOfSphere(radius) {
    (4/3) * Math.PI * Math.pow(radius, 3);
}

function perimeterOfTriangle(a, b, c) {
    return (a + b + c);
}

function areaOfTriangle(a, b, c)
{
    let s = perimeterOfTriangle(a, b, c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log(areaOfTriangle(10,10,10));

exports.areaOfRectangle = areaOfRectangle;
exports.areaOfCircle = areaOfCircle;
exports.perimeterOfRectangle = perimeterOfRectangle;
exports.circumferenceOfCircle = circumferenceOfCircle;
exports.volumeOfSphere = volumeOfSphere;
exports.perimeterOfTriangle = perimeterOfTriangle;
exports.areaOfTriangle = areaOfTriangle;