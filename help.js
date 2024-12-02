function help() {
    console.log(
        '-'.repeat(process.stdout.columns) +
        '\n' +
        '\n' +


        '\x1b[1m\x1b[32m\'collatz\' COMMAND HELP\x1b[0m' + 
        '\n' +
        '\n' +

        '\x1b[35m\'**Replace braces with integer value(s)**\x1b[0m' +
        '\n' +
        '\n' +


        '\x1b[36m\'collatz\' command:\x1b[0m' +
        '\n' +

        '\x1b[33mCalculate iteration count of one integer:  \x1b[0m' + 'npm run collatz [int1]' +
        '\n' +
        '\x1b[33mCalculate iteration counts of multiple integers:  \x1b[0m' + 'npm run collatz [int1 int2]' +
        '\n' +
        '\n' +


        '\x1b[36m\'collatz-showall\' command:\x1b[0m' +
        '\n' +

        '\x1b[33mCalculate iteration count of one whole integer - show all iterations:  \x1b[0m' + 'npm run collatz-showall [int1]' +
        '\n' +
        '\x1b[33mCalculate iteration counts of multiple integers - show all iterations:  \x1b[0m' + 'npm run collatz-showall [int1 int2]' +
        '\n' +
        '\n' +


        '\x1b[36m\'debug\' command:\x1b[0m' +
        '\n' +

        '\x1b[33mGet maximum safe integer - unformatted:  \x1b[0m' + 'npm run debug maxint_uf' +
        '\n' +
        '\x1b[33mGet maximum safe integer - formatted with commas:  \x1b[0m' + 'npm run collatz maxint' +
        '\n' +
        '\n' +


        '\x1b[36m\'help\' command:\x1b[0m' +
        '\n' +

        '\x1b[33mGet list of available commands:  \x1b[0m' + 'npm run help' +
        '\n' +
        '\n' +


        '-'.repeat(process.stdout.columns)
    )
}

help();