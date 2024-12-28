function getData(dataId){
// 2 second
    setTimeout(() => {
        console.log("this isdata for ", dataId);
    }, 2000);
}

// if we want data of 2 after receving 1
// getData(1);
// getData(2);
// getData(3); 
// this won't work as we will get all 3 data at same time

function getDataa(dataId, getNextData) {
    setTimeout(() => {
        console.log("this is data for", dataId);
        // If a next data function is provided, call it
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// Chaining data requests to ensure sequential fetching
getDataa(1, () => {
    getDataa(2 );
});
getDataa(4, () => {
    getDataa(5,()=>{
        getDataa(6); 
    } );
});

// this is callback hell

// To solve callback hell we've promises