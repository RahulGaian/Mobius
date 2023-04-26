
const gen = require("./product_html")

const fs = require("fs");
const { parse } = require("csv-parse");


let data = []
let html_Data = ""



// function save(dat)  {
//     for(let i of dat){
//         let data_arr = []
//         for (let j in i ){
//             data_arr.push(i[j].toString())
//         }
//         let name = data_arr.shift()
//         console.log(data_arr,name)
//         console.log("/////////////////////////////")
//         let string = gen.gen(data_arr);
//         // console.log(string)
//         fs.writeFile("../generated_products/"+ name, string, (err) => {
//             if (err) throw err;
//             console.log('The file  '+ name+' has been saved  to output!');
//       })

//     }
    

// }

// let Csv_reader = () => {

//     fs.createReadStream("./test-products - Sheet 1.csv")
//     .pipe(
//         parse({
//             delimiter: ",",
//             columns: true,
//             ltrim: true,
//         })
//         )
//         .on("data", function (row) {
//             // This will push the object row into the array

//             data.push(row);
//         })
//         .on("error", function (error) {
//             console.log(error.message);
//         })
//         .on("end", function () {
//         // Here log the result array
//         console.log("parsed csv data");
//         console.log("///////////////////////////qqqqq///////////////////////")
//         save(data);
//     });
    
// }


  
  Csv_reader();