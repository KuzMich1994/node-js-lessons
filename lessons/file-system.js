const fs = require('fs');
const path = require('path');

// console.log('START');
//
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('Папка создана');
// });
//
// console.log('END');

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err;
//     }
// });

// fs.writeFile(path.resolve(__dirname, 'test.txt'), '5 qwerty 7 9 01 214124asdf asfas fqwr', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Файл записан');
//     fs.appendFile(path.resolve(__dirname, 'test.txt'), 'ДОБАВИЛИ В КОНЕЦ ФАЙЛА', (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log('Файл дописан');
//         fs.appendFile(path.resolve(__dirname, 'test.txt'), 'ДОБАВИЛИ В КОНЕЦ ФАЙЛА', (err) => {
//             if (err) {
//                 throw err;
//             }
//             console.log('Файл дописан');
//         })
//     })
// });

const writeFileAsync = async (currentPath, data) => {
    return new Promise((resolve, reject) => fs.writeFile(currentPath, data, (err) => {
        if (err) {
            reject(err.message);
        }
        resolve();
    }));
}

const appendFileAsync = async (currentPath, data) => {
    return new Promise((resolve, reject) => fs.appendFile(currentPath, data, (err) => {
        if (err) {
            reject(err.message);
        }
        resolve();
    }));
}

const readFileAsync = async (currentPath) => {
    return new Promise((resolve, reject) => fs.readFile(currentPath, {encoding: 'utf8'}, (err, data) => {
        if (err) {
            reject(err.message);
        }
        resolve(data);
    }));
}

const removeFileAsync = async (currentPath) => {
    return new Promise((resolve, reject) => fs.rm(currentPath, (err) => {
        if (err) {
            reject(err.message);
        }
        resolve();
    }));
}

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '456'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '789'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '000'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));


// removeFileAsync(path.resolve(__dirname, 'test.txt'))
//     .then(() => console.log('file was removed'));

// Через переменную окружения передать строку, записать ее в файл
// прочитать файл, посчитать кол-во слов в файле и записать их в новый файл count.txt, затем удалить первый файл

const text = process.env.TEXT || '';
writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
    .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Кол-во слов - ${count}`))
    .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')));