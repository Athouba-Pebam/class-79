name_of_the_student=[];
function submit(){

    var n_1=document.getElementById("name_1").value;
    var n_2=document.getElementById("name_2").value;
    var n_3=document.getElementById("name_3").value;
    var n_4=document.getElementById("name_4").value;

    name_of_the_student.push(n_1);
    name_of_the_student.push(n_2);
    name_of_the_student.push(n_3);
    name_of_the_student.push(n_4);

    console.log(name_of_the_student);

    document.getElementById("display").innerHTML=name_of_the_student;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    name_of_the_student.sort();
    console.log(name_of_the_student);
    document.getElementById("display").innerHTML=name_of_the_student;
}