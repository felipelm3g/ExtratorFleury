var authenticationSuccess = function () {
    console.log('Successful authentication');
};

var authenticationFailure = function () {
    console.log('Failed authentication');
};

window.onload = function () {
    window.Trello.authorize({
        type: 'redirect',
        name: 'Extrator de Dados',
        persist: false,
        scope: {
            read: 'true',
            write: 'true'
        },
        key: 'e79af8dd8bf538b09bcba42ce87e18b6a6f81d5f3d108eea7396f88bd6a468aa',
        response_type: 'token',
        expiration: 'never',
        success: authenticationSuccess,
        error: authenticationFailure
    });
}