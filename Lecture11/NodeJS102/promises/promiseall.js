function downloadFile(url) {
    return new Promise((resolve, reject) => {  //promisified downloadFile function
        setTimeout(() => {
            reject("DATA DOWNLOADED" + url)
        }, 2000)
    })
}

function encrypt(data) {
    return new Promise((resolve, reject) => {   //promisified encrypted function
        setTimeout(() => {
            resolve(`{{{${data}}}}`)
        }, 1000)
    })

}

function saveFile(data) {
    return new Promise((resolve, reject) => {  //promisified saveFile function
        setTimeout(() => {
            resolve(`saved: ${data}`)
        }, 2000)
    })
}
Promise.all([1,2,3].map(i => downloadFile(i)))  //Promise.all handles multiple promise objects
    .then((results) => Promise.all(results.map(d => encrypt(d))))  //returns encrypted promise objects
    .then((encDataArr) => Promise.all(encDataArr.map(e => saveFile(e)))) //returns saveFile promise objects
    .then(savedResults => console.info(savedResults))  //prints saved results
    .catch(e => console.error(e)); //one catch statement alone can handle here any reject encountered in any promise
