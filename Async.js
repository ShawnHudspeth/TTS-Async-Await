//this is for an assignment for TTS, still attempting to grasp the concept. 
let promise = fetchCity()
async function coordinates(city) {let result = await fetch (`https://geocode.xyz/34.2239945837917,-77.9021607715174`)}
if (response.ok) {
    let json = await response.json();
} else {
    alert("HTTP-Error: " + response.status);
}
async function fetchCity() {
    const response = await fetch (`https://geocode.xyz/34.2239945837917,-77.9021607715174`);

    const data = await response.json();
    console.log(data.latt, data.longt);
}
// I was not able to get this to work still need to do more research
fetchCity();
function getProcessedData(url) {
    return downloadData(url) // returns a promise
      .catch(e => {
        return downloadFallbackData(url)  // returns a promise
      })
      .then(v => {
        return processDataInWorker(v)  // returns a promise
      })
  }
  //copy and paste from MDN trying to trouble shoot, no luck.
  //Not sure what errors are there, will come back in a week to make another attempt with more information. 