function printhello() {
    console.log('hello');
}
printhello();

function log() {
    console.log('message');
}
log();

let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'Hello';
    }
    console.log(childMessage);
}
printMessage();