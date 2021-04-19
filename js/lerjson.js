window.onload = function () {
    $('#ModalJSON').modal();
}
var jsondados = "";
function gerarJSON() {
    try {
        jsondados = JSON.parse(document.getElementById("TextareaJSON").value);
        document.getElementById("TextareaJSON").value = "";
        console.log(jsondados);

        //Cards BOARDs
        for (var i = 0; i < jsondados['cards'].length; i++) {
            var html = "";
            html += "<tr>";
            html += "<td>" + jsondados['cards'][i]['name'] + "</td>";
//            html += "<td>" + jsondados['cards'][i]['desc'] + "</td>";
            for (var l = 0; l < jsondados['lists'].length; l++) {
                if(jsondados['lists'][l]['id'] == jsondados['cards'][i]['idList']){
                    html += "<td>" + jsondados['lists'][l]['name'] + "</td>";
                }
            }
            html += "<td>" + jsondados['cards'][i]['labels'][0]['name'] + "</td>";
            if (jsondados['cards'][i]['dueComplete']) {
                var data = jsondados['cards'][i]['due'].split("T");
                html += "<td>" + data[0] + "</td>";
            } else {
                html += "<td></td>";
            }
            html += "<td>";
            for (var n = 0; n < jsondados['cards'][i]['idMembers'].length; n++) {
                for (var m = 0; m < jsondados['members'].length; m++) {
                    if (jsondados['cards'][i]['idMembers'][n] == jsondados['members'][m]['id']) {
                        if (n > 0) {
                            html += " / ";
                        }
                        html += jsondados['members'][m]['fullName'];
                    }
                }
            }
            html += "</td>";
            html += "</tr>";
            document.getElementById("tablecards").innerHTML += html;
            console.log(jsondados['cards'][i]);
        }

        $('#ModalJSON').modal('hide');
    } catch (e) {
        alert("Dado inserido nao pode ser processado");
    }
}