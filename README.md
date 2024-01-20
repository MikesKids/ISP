# MIKES INDEPENDENT LEARNING PROJECT - INSERTION SORT

## Introduction

Insertion Sort is one of many sorting algorithms. With insertion sort, it is often compared to working similarly to the way you sort playing cards. With Insertion Sort, it takes the array and examines 2 elements at a time. As it compares the elements to its left, until it reaches an element that is smaller. There are many benefits to sorting, but the main benefit is the organization of elements. You will know there is nothing smaller than this element (or no letter comes before this element). 

## Algorithm Description
1. I've created a function named insertionSort to call and reuse the code. The function will take an array as a parameter
```
function insertionSort(array)
```

2. Next, I created a `for loop` to iterate over the unsorted array. I started the outside loop at index 1 (the second element), since there is no element in front of the first element to be compared.

```
for (let i = 1; i < array.length; i++) 
```

3. As it starts each iteration, I store the current element into a variable named `currentElement`. This will store the second element at initiation, as described above. 

```
let currentElement = array[i];
```

4. I've created a nested `for loop` to iterate through and hold my `sorted array`. The first iteration, I am comparing element at `index[0]` to the element at `index[1]`. If `index[0]` is greater, it will be shifted to the right. If `index[1]` is greater, than it is sorted, and will remain in place. Through each iteration, it will compare the `currentElement` with the elements in the sorted array. 



```
let j;

for (j = i - 1; j >=0 && array[j] > currentElement; j--) {
    array[j + 1] = array[j]
    }
array[j + 1] = currentElement
```

5.  In the end, I return my sorted array. This code works on numbers and strings. It looks like this: ![Insertion Sort](https://www.doabledanny.com/static/92b034385c440e08bc8551c97df0a2e3/2.gif).

## Time Complexity

The best case is if the array is already kind of sorted, therefore it will be linear [2, 1, 3, 4] will only sort the number 1. Everything else would already be sorted, therefore no changes. 

Worst case, I believe it will be O(n2), because each iteration, it will need to re-iterate through each element in the sorted array. 

## Space Complexity

I'm not 100% sure. I need to go over this subject some more. 

## Use Case

You can use Insertion Sort on arrays with numbers and strings. 

## Edge Cases and Concerns

It also works on mixed data types, but probably not a good idea for a large mixed data type array. 

## Citations

[YouTube - Programming with Mosh](https://www.youtube.com/watch?v=nKzEJWbkPbQ&t=156s).

[YouTube - Michael Sambol](https://www.youtube.com/watch?v=JU767SDMDvA).

[Doable Danny](https://www.doabledanny.com/insertion-sort-in-javascript).
