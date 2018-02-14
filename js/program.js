var os = require('os');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
        	case '/node-version':
        		process.stdout.write('Node version is: ' + process.versions.node);
        		break;
        	case '/system-language':
        		process.stdout.write('System language is ' + process.env.lang);
        		break;
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});
