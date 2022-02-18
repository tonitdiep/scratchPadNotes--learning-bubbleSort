// function bubbleSort(arr){
  //basic form/brute force
//     for(var i =0; i<arr.length; i++){
//       console.log(arr)
//         for(var j = 0; j < arr.length; j++) {
//                  console.log('inner loop', arr[j], arr[j+1])
//             if(arr[j] > arr[j+1]){
//               [arr[j] = arr[j+1]] = [arr[j+1] = arr[j]]
//                 // var temp = arr[j];
//                 // arr[j] = arr[j + 1];
//                 // arr[j+1] = temp;
//             }    
  
//         }
//     }
       
//     return arr;

// }

// bubbleSort([37, 45, 29, 8]);

// function bubbleSort(arr){
//     // for(var i =0; i < arr.length; i--){
//     for(var i = arr.length-1; i > 0; i--){
//       //  console.log('first for loop', arr, arr[j], arr[j+1])
//         for(var j = 0; j < i - 1; j++) {

//           console.log('2nd for inner loop', arr, arr[j], arr[j+1])

//             if(arr[j] > arr[j+1]){
//               //  console.log('2nd loop if statement', arr, arr[j], arr[j+1])
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j+1] = temp;
//             }    
//             //  console.log('outside if loop', arr, arr[j], arr[j+1])
//         }
//         //  console.log('out for2nd loop', arr, arr[j], arr[j+1])
//     }
//     console.log('ONE PASS COMPLETE')
// //  console.log('outside entire loop', arr, arr[j], arr[j+1])
//     return arr;

// }

// bubbleSort([37, 45, 29, 8, 12, 88, -3]);




// function bubbleSort(arr){
//   const swap = (arr, idx1, idx2) => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j < i - 1; j++) {

         

//             if(arr[j] > arr[j+1]){
//                 // var temp = arr[j];
//                 // arr[j] = arr[j + 1];
//                 // arr[j+1] = temp;
//                 swap(arr, j, j + 1);
//             }    
            
//         }
//         // console.log(arr, arr[j], arr[i], arr[j+1], arr[i-1])
//     }
//     return arr;

// }

// bubbleSort([37, 45, 29, 8, 12]);


// function bubbleSort(arr) {
// 	var noSwaps;
// 	for(var i = arr.length; i > 0; i--){
// 		noSwaps = true;
   
// 		for(var j = 0; j < i -1; j++){
     
// 			if(arr[j] > arr[j + 1]){
// 				var temp = arr[j];
// 				arr[j] = arr[j + 1];
// 				arr[j =+ 1] = temp;
// 				noSwaps = false;
// 			}
// 		}
//      console.log('checking', arr, arr[i], arr[j], arr[j+1])
// 		if(noSwaps) break;
// 	}
// 	return arr;
// }
// bubbleSort([37, 45, 29, 8]);

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2] ] = [arr[idx2], arr[idx1] ]);

  for (let i = 0; i < arr.legnth; i++){
    let lowest = i;
    for ( let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
      if ( i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

selectionSort([0,2,34,22,10,19,17])