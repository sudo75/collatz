const input = process.argv[2];

switch (input) {
    case 'maxint':
        maxSafeInt();
        break;
    case 'maxint_uf':
        maxSafeInt_uf();
        break;
}

function maxSafeInt_uf() {
    console.log(`Maximum safe integer: ${Number.MAX_SAFE_INTEGER}`);
}

function maxSafeInt() {
    console.log(`Maximum safe integer: ${Number.MAX_SAFE_INTEGER.toLocaleString()}`);
}