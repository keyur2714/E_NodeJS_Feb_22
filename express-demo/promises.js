function test1(){
    return "This is Test 1";
}

function test2(){
    return new Promise((resolve,reject)=>{
        let error = false;
        if(! error){
            setTimeout(()=>{
                resolve("This is Test 2");
            },1000)    
        }else{
            reject("Something went wrong");
        }        
    });    
}

function test3(msg){
    return "This is Test 3" + " " + msg;
}


var t1 = test1();
test2()
.then(data=>{console.log(data)})
.catch(error=>{console.log(error)});
var t3 = test3();

console.log(t1 + " "+  t3);

// async function calling() {
//     let var1 = test1();
//     let var2 = await test2();
//     let var3 = test3(var2);
//     console.log(var1+" "+var2+" "+var3);
// }

//calling();


