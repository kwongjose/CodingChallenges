/**
 * Detects if a passed array has overlapping intervals
 * Start and end  values of intervals are stored in an aux array
 * The aux array is summed to check for overlapping. 
 * @param {Array} arr - Array of intervals eg: [[1, 3], [4, 6]]
 * @returns {Boolean} True if the intervals overlap
 */
function overlap(arr){
  let max_el  = 0;

  // Find the max start value in the array
  for(let i = 0; i < arr.length; i++){
      const [ start, end ] = arr[i];

      if(max_el < end){
          max_el = end;
      }
  }

  // make a Array the size of the max value
  let aux = new Array(max_el + 2);
  // Fill with 0s
  aux.fill(0, 0, aux.length);

  // loop over the array. 
  for(let i = 0; i < arr.length; i++){
    // Get the start and end of a interval
    const [start, end ] = arr[i];
    // Increment start indexes in the aux Array
    // Decrement end indexes in the aux Array
    aux[start]++;
    aux[end + 1]--;
  }
  // arr: [ [1, 3], [5, 9], [ 7, 12 ] ]
  // aux: [0, 1, 0, -1, 0, 1, 0, 1, 0, -1, 0, 0, -1]
  // Loop over the aux array
  for(let i = 1; i <= max_el; i++){
    // add the index of the aux index with the previous index value
    aux[i] += aux[i - 1];
    // Of the value is over 1 there is an overlap
    if(aux[i] > 1){
      return true;
    }
  }

  return false;

}