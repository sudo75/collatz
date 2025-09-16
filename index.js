let showAll = false;
let fast = false;

const input = [process.argv[2], Number(process.argv[3]), Number(process.argv[4])];
if (!input[1]) {
    console.error("Invalid Input")
    return;
} else if (input[1] && input[2]) {
    calculate(input[1], input[2]);
} else {
    calculate(input[1], input[1]);
}

function calculate(low, high) {
    console.time('executionTime'); //PERFORMANCE TRACKING
    if (high > Number.MAX_SAFE_INTEGER) {
        console.error(`Invalid input - enter an integer between 1 and ${Number.MAX_SAFE_INTEGER}`);
        return;
    }
    if (low < 1 || high < low || !Number.isInteger(low) || !Number.isInteger(high)) {
        console.error('Invalid Input');
        return;
    }

    switch (input[0]) {
        case 'showall':
            showAll = true;
            break;
        case 'fast':
            fast = true;
            break;
    }
    
    let longestSequence = {count: 0, og_val: low};
    for (let i = low; i <= high; i++) {
        const result = runCollatz(i);

        if (result.iterations > longestSequence.count) {
            longestSequence.count = result.iterations;
            longestSequence.og_val = result.og_val;
        }

        if (!fast) console.log(`** Input Value: ${result.og_val}, Iterations: ${result.iterations} **`);
    }

    if (low !== high) {
        console.log(`**** Longest Sequence: ${longestSequence.count} iterations, Input Value: ${longestSequence.og_val}, Range: ${low} - ${high} ****`);
    }

    console.timeEnd('executionTime'); //PERFORMANCE TRACKING
}

function runCollatz(value) {
    const og_val = value;

    runFormula(value);
    let iterations = 0;
    while (value > 1) {
        value = runFormula(value);
        iterations++;
        if (showAll) {
            console.log(`Current Value: ${value}, Iteration ${iterations}, Original Value: ${og_val}`);
        }
    }
    return {og_val, iterations};
}

function runFormula(value) {
    if (value % 2 === 0) { //Is even
        return value / 2;
    } else {
        return value * 3 + 1;
    }
}