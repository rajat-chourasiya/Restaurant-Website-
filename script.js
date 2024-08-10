// function SendMail(){
//     var parms = {
//         name: document.getElementById("name").value ,
//         email: document.getElementById("email").value ,
//         //datetime: document.getElementById("datetime").value ,
//         //select1: document.getElementById("select1").value ,
//         message: document.getElementById("message").value ,
//     };    
// }
//const serviceID = "service_cqqbzfg";
//const templeteID = "template_8qc0yra"

// emailjs.send("service_cqqbzfg","template_8qc0yra",parms).then(function(res){
//     alert("success!"+ res.status);
// })
    //.send(serviceID, templeteID, parms)
    //.then((res) => {
      //  document.getElementById("name").value="";
      //  document.getElementById("email").value="";
      //  document.getElementById("datetime").value="";
      //  document.getElementById("select1").value="";
      //  document.getElementById("message").value="";
      //  console.log(res);
      //  alert("Your Message Sent Sucessfully");
   // })
    //.catch((err) => console.log(err));
console.log("working")
function sendOTP(){
    const email=document.getElementById('email');
    const otpverify=document.getElementsByClassName('otpverify')[0];

    let otp_val =Math.floor(Math.random()*10000);
    let emailbody='<h2>Your Otp is</h2>${otp_val}';

    email.send({
        SecureToken: "aeef7ee8-4d7a-4d5e-9e8c-b42923bfd3e5",
        TO: email.value,
        From: "rchourasiya538@gmail.com",
        subject: "This is from High Street Cafe",
        Body: emailbody
    }).then(
        message =>{
            console.log("he");
            if(message==="OK"){
                alert("OTP sent to your email"+email.value);
                otpverify.style.display="block";
                const otp_inp = document.getElementById('otp_inp');
                const otp_btn = document.getElementById('otp-btn');

                otp_btn.addEventListener('click',()=>{
                    if(otp_inp.value == otp_val){
                        alert("Email address verified...");
                    }
                    else{
                        alert("Invalid Otp");
                    }
                })

            }
        }
    )
}
