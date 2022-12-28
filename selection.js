/* function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let smallest = curr;
    let idx = 0;
    for (let j = i; j <= arr.length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        idx = j;
        
      }
    }
    if(smallest !== curr){
    arr[i] = smallest;
    arr[idx] = curr;

    }
    
  }
  return arr;
  
} */

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
  
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[lowest] > arr[j]) {
          lowest = j;
        }
      }
  
      if (i !== lowest) swap(arr, i, lowest);
    }
  
    return arr;
  }

module.exports = selectionSort;
