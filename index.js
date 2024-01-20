function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let currentElement = array[i];

        let j;

        for (j = i - 1; j >=0 && array[j] > currentElement; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = currentElement;
    }
    return array;
}

const arr1 = [2, 1, 3, 7, 5, 6];
const arr2 =[4, 89, 7, 6, -1, 0, 12];
const arr3 = ["apple", "cherries", "blackberries", "grapes", "banana"]
console.log(insertionSort(arr1));
console.log(insertionSort(arr2));
console.log(insertionSort(arr3));