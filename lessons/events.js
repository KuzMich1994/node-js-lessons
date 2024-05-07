const Emitter = require('events');

const emmiter = new Emitter();

emmiter.on('message', (data, second, third) => {
    console.log('Вы прислали сообщение ' + data);
    console.log('Второй аргумент ' + second);
});

const MESSAGE = process.env.MESSAGE || '';

if (MESSAGE) {
    emmiter.emit('message', MESSAGE, 123);
} else {
    emmiter.emit('message', 'Вы не указали сообщение');
}