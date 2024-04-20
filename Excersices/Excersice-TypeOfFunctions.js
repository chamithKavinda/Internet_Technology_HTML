function setResults(grade){
    if(grade>=90){
        return "A+";
    }else if(grade>=80){
        return "A-";
    }else if(grade>=75){
        return "A";
    }else if(grade>=65){
        return "B";
    }else if(grade>=55){
        return "C";
    }else if(grade>=35){
        return "S";
    }else if(grade>=0){
        return "F";
    }else{
        return"Invalid Number";
    }
}

function getResults(marks){
    let results = setResults(marks)
    console.log( results)
}

getResults(92);
getResults(73);
getResults(78);
getResults(100);
getResults(12);
getResults(38);
getResults(59);
getResults(62);
getResults(-10);


