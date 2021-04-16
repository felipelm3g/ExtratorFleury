var authenticationSuccess = function () {
    console.log('Successful authentication');
};

var authenticationFailure = function () {
    console.log('Failed authentication');
};

window.onload = function () {
    window.Trello.authorize({
        type: 'popup',
        name: 'Extrator de Dados',
        scope: {
            read: 'true',
            write: 'true'
        },
        expiration: 'never',
        success: authenticationSuccess,
        error: authenticationFailure
    });
}