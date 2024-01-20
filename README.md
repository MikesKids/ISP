#MIKES INDEPENDENT LEARNING PROJECT - INSERTION SORT

##Introduction

Insertion Sort is one of many sorting algorithms. With insertion sort, it is often compared to working similarly to the way you sort playing cards. With Insertion Sort, it takes the array and examines 2 elements at a time. As it compares the elements to its left, until it reaches an element that is smaller. There are many benefits to sorting, but the main benefit is the organization of elements. You will know there is nothing smaller than this element (or no letter comes before this element). 

#Algorithm Description
1. I've created a function named insertionSort to call and reuse the code. The function will take an array as parameter
```
function insertionSort(array)
```

2. I created a `for loop` to iterate over the unsorted array. I started the outside loop at index 1 (the second element), since there is no element in front of the first element to be compared.

```
for (let i = 1; i < array.length; i++) 
```

3. As it starts each iteration, I store the current element into a variable I named `currentElement`

```
let currentElement = array[i];
```

4. I had to declare `j` outside of my nested `for loop` to iterate over my  array. This will now be my sorted array. Where we will compare the `currentElement` and put them in there correct sorted position, based on comparison of the number there. In the first iteration, I am stating my element at index `i - 1` (which is 1-1 = 0). If element at index 0 is greater than or equal to 0 `and` my element in my sorted array[0] is greater than the currentElement (my unsorted array[1]). This part is like having an `if statement` inside of my for loop. Now my code calls for my element to be array[0 + 1] = array[0], if it is greater than the `currentElement`. If it is less than the `currentElement`, than it will simply keep the elements in its place.

```
let j;

for (j = i - 1; j >=0 && array[j] > currentElement; j--) {
    array[j + 1] = array[j]
    }
array[j + 1] = currentElement
```

5. Each iteration of my nested loop will compare the current element from my unsorted array to my elements in my sorted array. If the element is smaller than the element in my sorted array, it will decrement it's position and place it in it's correct index. In other words, it will re-index the smaller value, into the correct index. The correct index is determined if the element to the left is smaller than the current element.

7. In the end, I return my sorted array. This code works on numbers and strings. It looks like this: [Insertion Sort] (https://www.doabledanny.com/static/92b034385c440e08bc8551c97df0a2e3/2.gif).

##Time Complexity

The best case is if the array is already kind of sorted, therefore it will be linear [2, 1, 3, 4] will only sort the number 1. Everything else would be sorted. 

Worst case, I believe it will be O(n2). 

##Space Complexity

I'm not 100% sure. I need to go over this subject some more. 

##Use Case

You can use Insertion Sort on arrays with numbers and strings. 

##Edge Cases and Concerns

It also works on mixed data types, but probably not a good idea for a large mixed data type array. 

##Citations

[YouTube - Programming with Mosh] (https://www.youtube.com/watch?v=nKzEJWbkPbQ&t=156s)

[YouTube - Michael Sambol] (https://www.youtube.com/watch?v=JU767SDMDvA)

[Doable Danny] (https://www.doabledanny.com/insertion-sort-in-javascript)
