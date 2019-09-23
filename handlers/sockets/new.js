function exec(info, io, chalk, fs) {
    console.log(chalk.green('Computer has connected with certain information:'));
    console.log(chalk.blue(`Platform: ${info.platform}`));
    console.log(chalk.blue(`Arch: ${info.arch}`));
    console.log(chalk.blue(`IP: ${info.ip}`));
    console.log(chalk.blue(`Hostname: ${info.hostname}`));
    fs.appendFileSync('../.logs/logs.txt', `\nNew user: ${info.platform}, ${info.arch}, ${info.ip}, ${info.hostname}.`);
    io.emit('new', info);
}

module.exports = exec;
