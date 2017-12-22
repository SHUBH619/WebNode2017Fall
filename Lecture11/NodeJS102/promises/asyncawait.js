function downloadFile(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("DATA DOWNLOADED" + url)
        }, 2000)
    })
}

function encrypt(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`{{{${data}}}}`)
        }, 1000)
    })

}

function saveFile(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`saved: ${data}`)
        }, 2000)
    })
}

async function getFile () {  //async tells that things inside the function are async
    try {   //try catch to handle reject cases
        let dlData = await downloadFile("1"); //await can be used only when the function is async else it blocks the thread
        console.info(dlData);         //in case of reject exception is thrown and in resolve first argument of resolve is returned

        let encData = await encrypt(dlData)
        console.info(encData)

        let savedFile = await saveFile(encData)
        console.info(savedFile)
    } catch (e) {
        // reject() calls will land here
    }


}

getFile();
console.info('are we done yet ?');
