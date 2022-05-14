const fs = require('fs-extra');

fs.copy('./build/', '../', err => {
    if(err) return console.error(err);
    console.log('Moved build files');
});
