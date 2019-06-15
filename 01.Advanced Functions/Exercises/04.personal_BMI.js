function personalBmi(name, age, weight, height) {
    let obj = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI: Math.round(weight / Math.pow(height / 100, 2)),
        status: ''
    }

    if(obj.BMI < 18.5) {
        obj['status'] = 'underweight';
    }
    else if(obj.status < 25) {
        obj['status'] = 'normal';
    }
    else if(obj.status < 30) {
        obj['status'] = 'overweight';
    }
    else {
        obj['status'] = 'obese';
        obj['recommendation'] = 'admmision required';
    }
    return obj;
}

console.log(personalBmi('Peter', 29, 75, 182));