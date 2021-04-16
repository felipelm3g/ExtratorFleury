var authenticationSuccess = function (data) {
    console.log('Successful authentication');
    console.log(data);
};

var authenticationFailure = function () {
    console.log('Failed authentication');
};

window.onload = function () {
    Trello.authorize({
        type: 'redirect',
        name: 'Extrator de Dados',
        persist: false,
        scope: {
            read: 'true',
            write: 'true',
            account: false
        },
        key: '57caa754-cafd-4557-87f1-d662323e7bdf',
        expiration: 'never',
        success: authenticationSuccess,
        error: authenticationFailure
    });
}