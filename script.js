document.getElementById("button").onclick = function() {generatePassword()};
document.getElementById("copy").onclick = function() {copy()};


function generatePassword() {
    length = document.getElementById("length").value;
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#_*^&$@!%"
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("generated").innerHTML = retVal;
    document.getElementById("copy").style.visibility = "visible";
}
function copy() {
    var copyText = document.getElementById("generated").innerHTML;
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
}