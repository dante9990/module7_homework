function findProperty(str, obj) {
    let flag;
    for(let key in obj) {
        if(key === str) {
            flag = true
            break;
        } else {
            flag = false;
        }
    }
    return console.log(flag);
}

let obj = {
    b: "hi",
    c: 1
}

findProperty("b", obj)