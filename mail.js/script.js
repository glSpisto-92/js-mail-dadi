/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

// 1. Chiedo all'utente la sua mail
var mail = prompt('Inserisci la tua mail');

//lista delle mail autorizzate
var listaMail = ['dargen@92.com','boolean@careers.it','web@developer.it','spruoccolo@live.com'];

//controllo di accesso alla lista
if ( mail ? listaMail ){
    alert('Ok, sei nel club privè Dev Boolean');
} else{
    alert('Sei un impostore! Vattene o ti denunzio!');
}