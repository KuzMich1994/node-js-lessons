const fs = require('fs');
const path = require('path');
const http = require('http');

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err) {
//         throw err;
//     }
//
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'), {encoding: 'utf-8'});

// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
// stream.on('end', () => console.log('Закончили читать файл'))
// stream.on('open', () => console.log('Начали читать файл'))
// stream.on('error', (err) => console.log(err))

// const stream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'));
// for (let i = 0; i < 20; i++) {
//     stream.write(i + '\n');
// }
//
// stream.end(() => {
//     console.log('Запись файла завершена');
// });

// http.createServer((req, res) => {
//     const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));
//     stream.on('data', (chunk) => res.write(chunk));
//     stream.on('end', (chunk) => res.end());
//     stream.pipe(res);
// })