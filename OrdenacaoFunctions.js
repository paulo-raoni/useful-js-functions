let arr = [5, 3, 9, 2, 1, 4, 6, 8, 7, 10],
    len = arr.length;



function quickSort(comeco, fim) {
    let i = comeco, 
        j = fim - 1, 
        meio = parseInt((comeco, fim)/2), 
        pivo = arr[meio], 
        aux = [];

    while (i <= j) {
        while(arr[i] < pivo && i < fim) {
            i++;
        }
        while(arr[j] > pivo && j > comeco) {
            j--;
        }

        if(i <= j) {
            aux = arr[i];
            arr[i] = arr[j];
            arr[j] = aux;
            i++;
            j--;
        }


    }

    if(j > comeco) {
        quickSort(comeco, j+1);
    }
    if(i < fim) {
        quickSort(i, fim);
    }


}

quickSort(0, len);
console.log(arr);






function merge(comeco, meio, fim) {
    let tempArr = [],
        i = comeco, 
        j = meio + 1, 
        k = comeco;

    while(i <= meio && j <= fim) {
        if(arr[i] < arr[j]) {
            tempArr[k++] = arr[i++];
        } else {
            tempArr[k++] = arr[j++];
        }
    }

    while(i <= meio) {
        tempArr[k++] = arr[i++];
    }

    while(j <= fim) {
        tempArr[k++] = arr[j++];
    }

    for (i = comeco; i <= fim; i++) {
        arr[i] = tempArr[i];
    }

}

function mergeSort(comeco, fim) {
    let meio = parseInt((comeco + fim) / 2);
    if(comeco >= fim) {
        return;
    } 
   
    console.log(meio);

    mergeSort(comeco, meio);
    mergeSort(meio + 1, fim);
    merge(comeco, meio, fim);

}


mergeSort(0, len - 1);
console.log(arr);



function insertionSort() {
    let i,
        j,
        atual;
    
    for(i = 1; i < len; i++) {
        atual = arr[i];
        
        for(j = i - 1; (j >= 0) && (atual < arr[j]); j--) {
            arr[j + 1] = arr[j];
            arr[j] = atual;
        }
        // arr[j + 1] = atual;

    }  
    
    console.log(arr);
}


function selectionSort() {
    let i, 
        j, 
        aux, 
        menor
    for(i = 0; i < len; i++) {
        menor = i;
        for(j = i + 1; j < len; j++) {
            if(arr[j] < arr[menor]) {
                menor = j;
            }
        }
        if(arr[i] != arr[menor]) {
            aux = arr[i];
            arr[i] = arr[menor];
            arr[menor] = aux;
        }
    
    }
    
    console.log(arr);

}    