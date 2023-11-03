
function resume(){
    var first=document.getElementById('first').value;
    var last=document.getElementById('last').value;
    var address=document.getElementById('address').value;
    var mobile=document.getElementById('mobile').value;
    var email=document.getElementById('email').value;
    var father=document.getElementById('father').value;
    var mother=document.getElementById('mother').value;
    var dob=document.getElementById('dob').value;
    var skills=document.getElementById('skills').value;   
    var education=document.getElementById('education').value;
    var experincer=document.getElementById('experincer').value;

    document.getElementById('o_name').innerText=" "+first + " "+last;
    document.getElementById('o_address').innerText=" "+address;
    document.getElementById('o_mobile').innerText=" "+mobile;
    document.getElementById('o_email').innerText=" "+email;
    document.getElementById('o_father').innerText=" "+father;
    document.getElementById('o_mother').innerText=" "+mother;
    document.getElementById('o_dob').innerText=" "+dob;
    document.getElementById('o_skills').innerText=" "+skills;
    document.getElementById('o_education').innerText=" "+education;
    document.getElementById('o_experincer').innerText=" "+experincer;
}
function print() {
    var divContents = document.getElementById("printArea").innerHTML; 
    var a = window.open('', '', 'height=1000, width=500'); 
    a.document.write(divContents);
    a.document.write('<link rel="stylesheet" href="/boostrap/bootstrap.css" >') 
    a.print();
}
