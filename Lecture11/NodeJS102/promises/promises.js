function downloadFile (url) {
    return new Promise(function (resolve, reject) {       //promise does the task of callback here
        setTimeout(() => {
            if (url.startsWith("http")) {
            resolve("downloaded-data");     //if alright, then resolve and send data
        } else {
            reject(new Error("link to thik thak do"));  //else send error
        }
    }, 3000)
    })
}

downloadFile("cb.lk/file.txt")
    .then(function (data) {  //then for resolve,
        console.info(data);
    });

//we havent handled reject by using catch. That's our own choice. It's one of the advantage of promises over callbacks.
