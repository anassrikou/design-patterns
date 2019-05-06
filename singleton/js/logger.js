const { appendFile } = require('fs');
const path = require('path');

class Logger {

    constructor() {
        this.logs = [];
        this.log_file = path.join(__dirname, 'test.log');
    }

    write(log) {
        const timestamp = new Date().toISOString();
        const log_string = `${timestamp} - ${log}\n`;

        this.logs.push(log_string);
        appendFile(this.log_file, log_string, f => f);
    }

    printLogs() {
        console.log(this.logs);
    }

}

module.exports = new Logger();