function printObjectProperties(obj) {
    if (Object.keys(obj).length === 0) {
        console.log("Object is empty");
    } else {
        for (const items in obj) {
            if(obj.hasOwnProperty(items)) {
                console.log(items + ": " + obj[items]);
            }
        }
    }
}