    function resume(){
    let first=document.getElementById('first').value;
        
    let last=document.getElementById('last').value;
    let address=document.getElementById('address').value;
    let mobile=document.getElementById('mobile').value;
    let email=document.getElementById('email').value;
    let father=document.getElementById('father').value;
    let mother=document.getElementById('mother').value;
    let dob=document.getElementById('dob').value;
    let skills=document.getElementById('skills').value;   
    let education=document.getElementById('education').value;
    let experincer=document.getElementById('experincer').value;

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
    let divContents = document.getElementById("printArea").innerHTML; 
    let a = window.open('', '', 'height=1000, width=500'); 
    a.document.write(divContents);
    a.document.write('<link rel="stylesheet" href="/bootstrap.css" >') 
    a.print();
}
