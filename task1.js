function printKeyValue(obj) {
    for (let key in obj) {

        if (obj.hasOwnProperty(key)) {

            console.log(key, obj[key])
        }
    }
}

let obj = {
    a: 1,
    b: 2
}

let obj1 = Object.create(obj)

obj1.c = 3;
obj1.d = 4;

printKeyValue(obj1)