export default function analyser(arr){
    let min= null, max = null, len = null, avg = null, sum = null;
    
    min = arr[0];
    len = arr.length;

    sum = arr.reduce((toal, current) => toal + current)
    avg = +(sum/len).toFixed(2)

    for (let i = 0; i < len; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return {min, max, len, avg, sum};
};