
export function extractTime (intTime) {
    var seconds = Math.floor(intTime) % 60;
    var minutes = Math.floor(intTime / 60);
    var hours = Math.floor(intTime / 3600);


    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}
