function findMaxNumber (numberArray) {
    if (numberArray.length === 0) {
        return null;
    } else {
        let maxNumber = numberArray[0];
        for (let i=1; i<numberArray.length; i++){
            if (numberArray[i] > maxNumber) {
                maxNumber = numberArray[i];
            }
        }
        return maxNumber;
    }
}