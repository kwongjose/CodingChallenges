function overlap(arr){
  let max_el  = 0;

  for(let i = 0; i < arr.length; i++){
      const [ start ] = arr[i];

      if(max_el < start){
          max_el = start;
      }
  }

  let aux = new Array(max_el + 1);
  aux.fill(0, 0, aux.length);

  for(let i = 0; i < arr.length; i++){
    const [start, end ] = arr[i];
    aux[start]++;
    aux[end]--;
  }

  for(let i = 1; i <= max_el; i++){
    aux[i] += aux[i - 1];

    if(aux[i] > 1){
      return true;
    }
  }

}