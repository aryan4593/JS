function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Success");
    }, 3000);
  });
}

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((ress) =>{
//         console.log(ress);
//     })

// }).

// better way
// this is called promise chaingin
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then(() => {
      return getData(3);
    })
    .then((ress)=>{
        console.log(ress);
  });
