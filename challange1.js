
var studentsMarks = prompt("Please enter your name" );

if (studentsMarks >= 79){
    console.log("A");

}else if (studentsMarks >= 60 && studentsMarks < 79){
    console.log("B");
}
else if (studentsMarks > 49 && studentsMarks >=59) {
    console.log ("C");
}
else if (studentsMarks >= 40 && studentsMarks <=49){
    console.log ("D");
}
else if (studentsMarks < 40){
    console.log ("E");

}
else {
    console.log("Unspecified")
}