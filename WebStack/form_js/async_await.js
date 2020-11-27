function makeRequest(loaction) {
    return new Promise((resolve,reject) => {
        console.log(`Making Request to ${loaction}`)
        if (loaction === 'Google') {
            resolve('Google says hii')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

async function doWork() {
    try {
        const response = await makeRequest('Google')
        console.log('Response Received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (err) {
        console.log(err)
    }
}

doWork()