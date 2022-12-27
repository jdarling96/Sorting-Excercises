function merge(arr1, arr2) {
    let j = 0
    let i = 0
    let results = []
    while(j < arr1.length && i < arr2.length){
        if(arr1[j] <= arr2[i]){
            results.push(arr1[j])
            j++

        }else{
            results.push(arr2[i])
            i++
        }

    }

    while(j < arr1.length){
        results.push(arr1[j])
        j++
    }
    while(i < arr2.length){
        results.push(arr2[i])
        i++
    }

    return results

}

function mergeSort(arr) {
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    
    return merge(left, right)
}

module.exports = { merge, mergeSort};