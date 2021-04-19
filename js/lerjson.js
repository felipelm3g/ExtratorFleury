window.onload = function () {
    $('#ModalJSON').modal();
}
var jsondados = "";
function gerarJSON() {
    try {
        jsondados = JSON.parse(document.getElementById("TextareaJSON").value);
        document.getElementById("TextareaJSON").value = "";
        console.log(jsondados);

        //Custon Fields
        document.getElementById("tabletitulos").innerHTML = "Titulo;Descrição;Coluna;Label;Data de Entrega;Membros;";
        for (var cf = 0; cf < jsondados['customFields'].length; cf++) {
            document.getElementById("tabletitulos").innerHTML += jsondados['customFields'][cf]['name'] + ";";
        }

        //Cards BOARDs
        for (var i = 0; i < jsondados['cards'].length; i++) {
            var html = "";
            html += jsondados['cards'][i]['name'] + ";";
            html += jsondados['cards'][i]['desc'] + ";";
            for (var l = 0; l < jsondados['lists'].length; l++) {
                if (jsondados['lists'][l]['id'] == jsondados['cards'][i]['idList']) {
                    html += jsondados['lists'][l]['name'] + ";";
                }
            }
            html += jsondados['cards'][i]['labels'][0]['name'] + ";";
            if (jsondados['cards'][i]['dueComplete']) {
                var data = jsondados['cards'][i]['due'].split("T");
                html += data[0] + ";";
            } else {
                html += ";";
            }
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
            html += ";";
            
            //outros campos aqui

            //Custon Fields
            for (var cf = 0; cf < jsondados['customFields'].length; cf++) {
                var nowrite = true;
                if (jsondados['cards'][i]['customFieldItems'].length > 0) {
                    for (var cf2 = 0; cf2 < jsondados['cards'][i]['customFieldItems'].length; cf2++) {
                        if (jsondados['customFields'][cf]['id'] == jsondados['cards'][i]['customFieldItems'][cf2]['idCustomField']) {
                            var type = jsondados['customFields'][cf]['type'];
                            html += jsondados['cards'][i]['customFieldItems'][cf2]['value'][type] + ";";
                            nowrite = false;
                        }
                    }
                    if (nowrite) {
                        html += ";";
                    }
                } else {
                    html += ";";
                }
            }
            html += "</br>";
            document.getElementById("tablecards").innerHTML += html;
            console.log(jsondados['cards'][i]);
        }

        $('#ModalJSON').modal('hide');
    } catch (e) {
        alert("Dado inserido nao pode ser processado");
    }
}