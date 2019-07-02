(function solve() {
    let myArr = [1, 2, 4, 6, 7];

    myArr.last = () => {
        return this[this.length - 1];
    };
    
    myArr.skip = n => {
        let result = [];
    
        for(let i= n; i < this.length; i++) {
            result.push(this[i]);
        }; 
        return result;
    };
    
    myArr.take = n => {
        let result = [];
    
        for(let i = 0; i < n; i++) {
            result.push(this[i]);
        };
        return result;
    };
    
    myArr.sum = () => {
        let sum = 0;
    
        for(let i = 0; i < this.length; i++) {
            sum += this[i];
        };
        return sum;
    };
    
    myArr.average = () => {
        return this.sum() / this.length;
    }    
})();

