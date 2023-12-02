const $ = id => document.getElementById(id);

window.onload = function () {
    const keywordsInput = $('keywords');
    const errorMsg = $('msgError-keywords');
    const form = document.querySelector('.contenedor-buscador');

    keywordsInput.addEventListener('focus', function () {
        errorMsg.innerHTML = null;
        this.classList.remove('is-invalid');
        this.classList.remove('is-valid');
    });

    keywordsInput.addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                errorMsg.innerHTML = "La búsqueda no puede estar vacía";
                this.classList.add('is-invalid');
                break;

            default:
                errorMsg.innerHTML = null;
                this.classList.add('is-valid');
                this.classList.remove('is-invalid');
                break;
        }
    });

    form.addEventListener('submit', function (event) {
        if (!keywordsInput.value.trim()) {
            event.preventDefault();
            errorMsg.innerHTML = "La búsqueda no puede estar vacía";
            keywordsInput.classList.add('is-invalid');
        }
    });
};
