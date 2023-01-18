let countSheep = function (num){
    let a = '';
    if (num > 0) {
        for (let i = 1; i < num+1;i++){
            a = a + i+' sheep...';

        }
        return a
    } else{
        return 'undefined'
    }
}