function exec(info, chalk, fs) {
    console.log(chalk.green('Pong! from:'));
    console.log(chalk.blue(info.hostname));
    fs.appendFileSync('../.logs/logs.txt', `Pinged from ${info.hostname}`);
}

module.exports = exec;