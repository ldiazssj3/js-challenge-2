// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
function encoded(value) {
  let splitArray = value.split("");
  let aux = [];
  for (i = 0; i < splitArray.length; i++) {
      if (splitArray[i] === splitArray[i + 1]){
          
          if (aux[splitArray[i]] == undefined) {
              aux[splitArray[i]] = 1
          }
      
          aux[splitArray[i]] += 1
      } 
  }
  
  

  console.log(aux)
}

encoded('AAAAAAAAAAAABBCCCCDD')


function sorted(value) {
  const resultRaiz = value.map(v => v * v)
  
  resultRaiz.sort(function(a, b) {
      if(a > b) {
          return 1
      } else if (a < b) {
          return -1
      } else {
          return 0
      }
  })
  
  console.log(resultRaiz)
}

sorted([-10, -5, 0, 5, 10])