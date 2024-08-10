function SendMail(){
    var parms={
        from_name: document.getElementById("fullname").value ,
        email_id: document.getElementById("email_id").value ,
        message: document.getElementById("message").value
    }
    emailjs.send("service_cqqbzfg","template_8qc0yra",parms).then(function(res){
        alert("success!"+ res.status);
})
}


// function evenOrOdd(input) {
//     for(let i=0;i<=input;i++){
//         let message=(i%2 ===0) ? 'Even' : 'Odd';
//         console.log(i,message);
//     }
// }

// evenOrOdd(11);
