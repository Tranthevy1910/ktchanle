function chanle() {
    var number = parseInt(document.forms["chanleform"]["number"].value);
    var check = number  % 2 ;
   if (check == 0) {
       document.getElementById("check").innerHTML="So " + number + " la so chan";
   }
   else {
       document.getElementById("check").innerHTML="So " + number + " la so le";
   }
}