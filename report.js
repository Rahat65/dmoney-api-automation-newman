const newman = require('newman');
 
newman.run({
    //collection: require('./Collection/collection.json'),
     collection:'https://api.postman.com/collections/25356639-8ee47a8a-f914-4ad5-ba70-36cb7ad07666?access_key=PMAT-01H8Y1Z19VYT7E2G5R96GCJP4V',
    // environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});