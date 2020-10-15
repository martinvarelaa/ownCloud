'use strict'

class Statistics{
    
    constructor(array){
        this.array = array;
    }
    
    count() {
        return console.log("Count:", this.array.length);
    }

    sum(){
    var sum = 0;

        this.array.forEach(element => {
            sum += element;
        });
        console.log("Sum:", sum);
        return sum;
    }

    min(){
        var vMin = this.array[0]
        for (let i = 1; i < this.array.length; i++) {
            if(this.array[i] < vMin){
                vMin = this.array[i];
            }
        }
        console.log("Min:", vMin);
        return vMin;
    }

    max(){
        var vMax = this.array[0];

        for (let i = 1; i < this.array.length; i++) {
            if(this.array[i] > vMax){
                vMax = this.array[i];
            }
        }
        console.log("Max:", vMax);
        return vMax;
        
    }

    range(){

        let min = Math.min(...this.array);
        
        let max = Math.max(...this.array);

        let range = max-min;

        console.log("Range:", range );
        return range;

    }

    mean(num){
        var sum = 0;
        this.array.forEach(element => {
            sum += element;
        });
        let mean =  sum/this.array.length;

        switch(num){
            case 1:{
                console.log("Mean:", mean);
            }
            case 2:{
                return mean;
            }
        }        
    }

    median(){
        let median = this.array[Math.round(this.array.length/2)];
        console.log("Median :", median);
        return median
    }

    mode(){

        //Order array without "".sort()", using a copy of the array to sort it.
        var copyArr = [...this.array];
        
        var aux = 0;
        for (let i = 0; i < copyArr.length; i++) {
            
            for (let j = 0; j < copyArr.length; j++) {
                if(copyArr[i] < copyArr[j]){
                    aux = copyArr[i];
                    copyArr[i] = copyArr[j];
                    copyArr[j] = aux;
                }
            }
        }

        //Calculating mode and its frecuency.
        var maxRep = 0;
        var mode = 0;
        for (let i = 0; i < copyArr.length; i++) {
            var nRep = 0;
            for (let j = 0; j < copyArr.length; j++) {
                if(copyArr[i]==copyArr[j]){
                    nRep++;
                }
                if (nRep > maxRep) {
                    mode = copyArr[i];
                    maxRep = nRep;
                }
            }
        }
        console.log(`Mode: (${mode},${maxRep})`);
        return [mode, maxRep];
    }


    variance(num){
        var variance = 0;
        var sum = 0;
        this.array.forEach(element => {
            
            sum += Math.pow((element - this.mean(2)), 2);
            variance = sum / this.array.length;
            
        });

        switch(num){
            case 1:{
            return console.log("Variance:", variance.toFixed(1));
            }
            case 2:{
                return variance;
            }

        }
        
        
        
        
    }

    standard_deviation(){
        var standard_deviation = Math.sqrt(this.variance(2));
        console.log("Standard deviation:",standard_deviation.toFixed(1));
        return standard_deviation;

    }

    freqDist(){
        var copyArr = [...this.array];
        var nRep = 0;
        var map = new Map();

        for (let i = 0; i < copyArr.length; i++) {

            if(nRep != 0 && !map.has()){
                map.set(copyArr[i-1], nRep);
                
                
            }

            nRep = 0;
            for (let j = 0; j < copyArr.length; j++) {
                if(copyArr[i]==copyArr[j]){
                    nRep++;
                    
                }
                
                
            }
        }
        const arr = [];
        console.log("Distribution Freq. :")
        map.forEach((value, key)=>{
            arr.push([value,key]);
            console.log(value, "," , key)
            
        });

        

        return arr;
    }

}

