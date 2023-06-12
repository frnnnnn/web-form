const aficiones = [];

function validate() {
    var ret_nombre = validate_nombre();

    var ret_email = validate_mail();

    var ret_comuna = validate_comuna();

    var ret_address = validate_address();

    var ret_url = validate_url();

    var ret_tel = validate_telefono();
  
    var ret_pass = validate_password();

    var ret_aficiones = add();

    if (ret_pass === undefined) {
        ret_pass = false;
    } 
    return ret_nombre && ret_email && ret_pass && ret_comuna && ret_address && ret_tel && ret_url && ret_aficiones;
}

function validate_nombre() {
    var input = document.getElementById("nombre").value;
    var div = document.getElementById("error_nombre");

    if (input.length < 3) {
        div.innerHTML = "El nombre debe tener 3 o más caracteres.";
        div.className = "text-danger";
        shakeElement('nombre');
        return false;
    } else {
        div.innerHTML = "";
        return true;
    }
}

function validate_mail() {
    var mail = document.getElementById("correo").value;
    var div = document.getElementById("error_correo");
    var arroba = mail.indexOf("@");
    var punto = mail.lastIndexOf(".");
    if (arroba < 1) {
        div.innerHTML = "El correo no contiene un arroba o nombre de usuario.";
        div.className = "text-danger";
        shakeElement('correo')
        return false;
    } else {
        if (arroba < 2) {
            div.innerHTML = "Parte local del correo invalida.";
            div.className = "text-danger";
            shakeElement('correo')
            return false;
        } else {
            if (arroba + 3 > punto || punto + 1 >= mail.length - 1) {
                div.innerHTML = "Nombre de dominio invalido.";
                div.className = "text-danger";
                shakeElement('correo')
                return false;
            } else {
                div.innerHTML = "";
                return true;
            }

        }

    }
}

function validate_comuna() {
    var comuna = document.getElementById("comuna1").value;
    var div = document.getElementById("error_comuna")
    div.innerHTML = "";
    if (comuna === "") {
        div.innerHTML = "Ingrese una comuna, por favor.";
        div.className = "text-danger";
        shakeElement('comuna1')
        return false;
    } else {
        div.innerHTML = "";
        return true;
    }
}


function validate_url() {
    var dominios = [".com", ".net", ".org", ".edu", ".gov", ".io", ".xyz", ".cl"];
    var url = document.getElementById("url").value;
    var div = document.getElementById("error_url");
    var https = url.indexOf("https://");
    var http = url.indexOf("http://");
    var first_punto = url.indexOf(".");
    var segundoPunto = url.indexOf(".", first_punto + 1);


    if (https === -1 && http === -1) {
        div.innerText = "Ingrese un enlace válido (http o https).";
        div.className = "text-danger";
        shakeElement('url');
        return false;
    } else {
        if ((first_punto + 3) >= (segundoPunto)) {
            alert(first_punto)
            alert(segundoPunto)
            div.innerHTML = "El cuerpo del dominio no es valido";
            div.className = "text-danger";
            return false;

        } else {
            var dominioValido = false;
            for (var i = 0; i < dominios.length; i++) {
                if (url.indexOf(dominios[i]) !== -1) {
                    dominioValido = true;
                    break;
                }
            }

            if (!dominioValido) {
                div.innerHTML = "Ingrese un dominio válido.";
                div.className = "text-danger";
                return false;
            } else {
                div.innerHTML = "";
                return true;
            }
        }
    }
}


function validate_address() {
    var esNumero = false;
    var direccion = document.getElementById("direccion").value;
    var div = document.getElementById("error_direccion");
    div.innerHTML = "";

    for (let i = 0; i < direccion.length; i++) {
        if (!isNaN(direccion[i])) {
            if (direccion < 3) {
                alert()
                div.innerHTML = "Ingrese una calle valida o mayor a 3 caracteres.";
                div.className = "text-danger";
                shakeElement('direccion');

            }
            esNumero = true;
        }
    }

    if (esNumero === false) {
        div.innerHTML = "Ingrese una dirección con un número";
        div.className = "text-danger";
        shakeElement('direccion');
        return false;
    } else {
        return true;
    }
}

function validate_telefono() {
    var telefono = document.getElementById("telefono").value;
    var div = document.getElementById("error_telefono");
    telefono = telefono.replace("+", "");
    telefono = telefono.replace(" ", "");
    var nueve = telefono.indexOf(9);
    if (isNaN(telefono)) {
        div.innerHTML = "Ingrese valores numericos o revise los espacios.";
        div.className = "text-danger";
        shakeElement('telefono');

        return false;
    } else {
        if (nueve > 2) {
            div.innerHTML = "Ingrese un telefono con identificador 9";
            div.className = "text-danger";
            shakeElement('telefono');
            return false;
        } else {
            if (telefono.length > 11 || telefono.length < 11) {
                div.innerHTML = "Ingrese un telefono de 8-9 digitos.";
                div.className = "text-danger";
                shakeElement('telefono');
                return false;

            } else {
                div.innerHTML = "";
                return true;
            }
        }


    }

}

function validate_password() {
    var digitos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var password = document.getElementById("contrasena").value;
    var div = document.getElementById("error_contrasena");

    if (password.length < 3 || password.length > 6) {
        div.innerHTML = "La contraseña debe tener entre 3 y 6 caracteres.";
        div.className = "text-danger";
        shakeElement('contrasena');
        return false;
    } else {
        var digitoValido = false;
        for (var i = 0; i < digitos.length; i++) {
            if (password.indexOf(digitos[i]) !== -1) {
                digitoValido = true;
                break;
            }
        }

        if (!digitoValido) {
            div.innerHTML = "La contraseña debe tener al menos un dígito.";
            div.className = "text-danger";
            shakeElement('contrasena');
            return false;
        } else {
            var caracterValido = false;
            for (i = 0; i < password.length; i++) {
                if (isNaN(password[i])) {
                    caracterValido = true;
                    break;
                }
            }

            if (!caracterValido) {
                div.innerHTML = "La contraseña debe tener al menos un carácter.";
                div.className = "text-danger";
                shakeElement('contrasena');
                return false;
            } else {
                div.innerHTML = "";
                var password2 = document.getElementById("contrasena2").value;
                var div2 = document.getElementById("error_contrasena2");
                if (password != password2) {
                    div2.innerHTML = "La contraseña no coincide."
                    div2.className = "text-danger";
                    shakeElement('contrasena');
                    shakeElement('contrasena2');

                } else {
                    div2.innerHTML = "";
                    return true;
                }

            }
        }
    }


}






function add() {
    let input = document.getElementById("aficiones").value;
    let div = document.getElementById("lista");
    div.innerHTML = "";
    let error = document.getElementById("error_aficiones");
    error.innerHTML = "";
    let ul = document.createElement("ul");
    let h3 = document.createElement("h3");
    ul.className = "list-group list-group-flush shadow rounded-5 mt-5";
    div.appendChild(ul);

    if (aficiones.length < 2 && input === "") {
        for (let i = 0; i < aficiones.length; i++) {
            let li = document.createElement("li");
            li.className = "list-group-item";
            li.innerHTML = aficiones[i];
            ul.appendChild(li);

        }
        error.innerHTML = "debe ingresar al menos 2 aficiones.";
        error.className = "text-danger";
        shakeElement('aficiones');
        setTimeout(function () {
            error.classList.remove("shake");
        }, 4000);
        error.innerHTML = "";
        return false;
    } else {
        if (input === "" && aficiones.length < 2) {
            error.innerHTML = "no puede agregar un aficion nula.";
            error.className = "text-danger";
            shakeElement('aficiones');
            setTimeout(function () {
                error.classList.remove("shake");
                error.innerHTML = "";
            }, 4000);
            return false;
        } else {
            if (input != "") {
                aficiones.push(input);
                for (let i = 0; i < aficiones.length; i++) {
                    h3.innerHTML = "hola";
                    let li = document.createElement("li");
                    li.className = "list-group-item";
                    li.innerHTML = aficiones[i];
                    ul.appendChild(li);
                }
            } else {
                for (let i = 0; i < aficiones.length; i++) {
                    let li = document.createElement("li");
                    li.className = "list-group-item";
                    li.innerHTML = aficiones[i];
                    ul.appendChild(li);

                }
            } if (aficiones.length >= 2) {
                document.getElementById("aficiones").value = "";
                return true;
            } else {
                document.getElementById("aficiones").value = "";
                return false;
            }

        }
    }

}

function shakeElement(ide) {
    var elemento = document.getElementById(ide);
    elemento.classList.add("shake");
    elemento.classList.add("red");

    setTimeout(function () {
        elemento.classList.remove("shake");
        elemento.classList.remove("red");
    }, 4000);
}

function formatoTelefono() {
    var telefonoInput = document.getElementById("telefono");
    if (telefonoInput.value.startsWith("+56 ")) {
        telefonoInput.value = "+56" + telefonoInput.value.substring(3);
    } else {
        telefonoInput.value = "+56 " + telefonoInput.value;
    }
}
