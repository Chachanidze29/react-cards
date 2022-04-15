function firstCallback(params, callback) {
    //Do Something
    function secondCallback(params, callback2) {
        //Do Something
        function thirdCallback(params, callback2) {
            //Do Something
        }
    }
}

const myPromise = new Promise((resolve,reject)=>{
    const error = false;
    if (error) {
        resolve("Success");
    } else{
        reject("Success");
    }
});

myPromise.then(res => console.log(res));