function exec(info, io, chalk, fs) {
    console.log(chalk.green('New image received with Base64 data:'));
    console.log(chalk.blue(info));
    fs.appendFileSync('../.logs/logs.txt', 'Image received from client.');
    io.emit('scr', info);
}

module.exports = exec;