function verif() {
    if (document.connexion.username.value == "") {
        alert("vous devez saisir votre nom d'utilisateur");
    }
    if (document.connexion.password.value == "") {
        alert("vous devez saisir votre mot de passe");
    }
}