// const myNumbers=[1,2,-3,-7,8,12,15]



// const posNumbers=removeNeg(myNumbers,(x)=>x >= 0)

// document.getElementById('demo').innerHTML=posNumbers


// function removeNeg(numbers,callback){

//     const myArray=[]
//     for(const x of numbers){
//         if(callback(x)){
//             myArray.push(x);
//         }
//     }
//     return myArray;
// }


var mongoose=reruire('mongoose');
var url="mongodb://127.0.0.1:27017/doct"
mongoose.connect(url)
var db=mongoose.connection
console.log("successfully connected to mongdb database")
module.exports=db
