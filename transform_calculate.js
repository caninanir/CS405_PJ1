//can.inanir
//code to calculate transform matrix

function createTranslationMatrix(tx, ty, tz) {
    return [
        1, 0, 0, tx,
        0, 1, 0, ty,
        0, 0, 1, tz,
        0, 0, 0, 1
    ];
}

function createScalingMatrix(sx, sy, sz) {
    return [
        sx, 0,  0,  0,
        0,  sy, 0,  0,
        0,  0,  sz, 0,
        0,  0,  0,  1
    ];
}

function createRotationMatrixX(angle) {
    let c = Math.cos(angle);
    let s = Math.sin(angle);
    return [
        1, 0,  0, 0,
        0, c, -s, 0,
        0, s,  c, 0,
        0, 0,  0, 1
    ];
}

function createRotationMatrixY(angle) {
    let c = Math.cos(angle);
    let s = Math.sin(angle);
    return [
        c, 0, s, 0,
        0, 1, 0, 0,
       -s, 0, c, 0,
        0, 0, 0, 1
    ];
}

function createRotationMatrixZ(angle) {
    let c = Math.cos(angle);
    let s = Math.sin(angle);
    return [
        c, -s, 0, 0,
        s,  c, 0, 0,
        0,  0, 1, 0,
        0,  0, 0, 1
    ];
}

function multiplyMatrices(a, b) {
    let result = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            result[i * 4 + j] = 0;
            for (let k = 0; k < 4; k++) {
                result[i * 4 + j] += a[i * 4 + k] * b[k * 4 + j];
            }
        }
    }
    return result;
}

// Convert degrees to radians
function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

// Applying transformations
let scaleMatrix = createScalingMatrix(0.5, 0.5, 1);
let rotateXMatrix = createRotationMatrixX(degToRad(30));
let rotateYMatrix = createRotationMatrixY(degToRad(45));
let rotateZMatrix = createRotationMatrixZ(degToRad(60));
let translateMatrix = createTranslationMatrix(0.3, -0.25, 0);

let combinedMatrix = multiplyMatrices(translateMatrix, multiplyMatrices(rotateZMatrix, multiplyMatrices(rotateYMatrix, multiplyMatrices(rotateXMatrix, scaleMatrix))));

const transformationMatrix = new Float32Array(combinedMatrix);

console.log(transformationMatrix);