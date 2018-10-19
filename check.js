var btnsubmit = document.forms["favourite-form"]["btn-submit"];
btnsubmit.onclick = function () {
    var cMFG = document.getElementsByName('favourite[]');
    var result = " ";
    for (var i = 0;cMFG.length > i; i++){
        if (cMFG[i].checked === true){
            result += cMFG[i].value + ',' ;
        }
    }
    alert("Games are chosen :" + result)

}