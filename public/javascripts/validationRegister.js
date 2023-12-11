window.onload = function () {

    $('name').addEventListener('blur', function (e) {

        switch (true) {

            case !this.value.trim():
                $('msgError-name').innerHTML = "El nombre es obligatorio"
                this.classList.add('is-invalid')
                break;

            case this.value.trim().length < 2:
                $('msgError-name').innerHTML = "Mínimo dos letras";
                this.classList.add('is-invalid')
                break

            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-name').innerHTML = "Sólo se permiten letras";
                this.classList.add('is-invalid')
                break

            default:
                $('msgError-name').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    $('surname').addEventListener('blur', function (e) {

        switch (true) {

            case !this.value.trim():
                $('msgError-surname').innerHTML = "El apellido es obligatorio"
                this.classList.add('is-invalid')
                break;

            case this.value.trim().length < 2:
                $('msgError-surname').innerHTML = "Mínimo dos letras";
                this.classList.add('is-invalid')
                break

            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-surname').innerHTML = "Sólo se permiten letras";
                this.classList.add('is-invalid')
                break

            default:
                $('msgError-surname').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    $('email').addEventListener('focus', function (e) {

        $('msgError-email').innerHTML = null
        this.classList.remove('is-invalid');
        this.classList.remove('is-valid')
    });

    $('email').addEventListener('blur', function (e) {

        switch (true) {

            case !this.value.trim():
                $('msgError-email').innerHTML = "El email es obligatorio"
                this.classList.add('is-invalid')
                break;

            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value.trim()):
                $('msgError-email').innerHTML = "El formato es inválido";
                this.classList.add('is-invalid')
                break

            default:
                $('msgError-email').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    $('email').addEventListener('change', async function (e) {

        try {

            const response = await fetch(`/apis/check-email?email=${this.value.trim()}`)
            const result = await response.json()

            if (result.data) {
                $('msgError-email').innerHTML = "El email ya se encuentra registrado"
                this.classList.add('is-invalid')
            }

        } catch (error) {
            console.error(error);
        }
    })

    $('password').addEventListener('focus', function (e) {

        $('msgError-password').innerHTML = null
        this.classList.remove('is-invalid');
        this.classList.remove('is-valid')
    })

    $('password').addEventListener('blur', function (e) {

        switch (true) {

            case !this.value.trim():
                $('msgError-password').innerHTML = "La contraseña es obligatoria"
                this.classList.add('is-invalid')
                break;
            case !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,12}$/.test(this.value.trim()):
                $('msgError-password').innerHTML = "La contraseña debe tener entre 6 y 12 caracteres, minúscula, mayúscula, número y caracter especial";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-password').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    $('viewPassword').addEventListener('click', function (e) {

        $('msgError-password').innerHTML = null
        $('password').classList.remove('is-invalid');
        $('password').classList.remove('is-valid');

        $('password').type = $('password').type === "text" ? "password" : "text"

        this.classList.toggle("fa");
        this.classList.toggle("fa-eye");

        this.classList.toggle("fa-solid");
        this.classList.toggle("fa-eye-slash");

    });

    $('password').addEventListener('focus', function (e) {

        $('msgError-password').innerHTML = null
        this.classList.remove('is-invalid');
        this.classList.remove('is-valid')
    })

    $('password2').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-password2').innerHTML = "Debes confirmar tu contraseña"
                this.classList.add('is-invalid')
                break;
            case this.value.trim() !== $('password').value.trim():
                $('msgError-password2').innerHTML = "Las contraseñas no coinciden";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-password2').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    $('viewPassword2').addEventListener('click', function (e) {

        $('msgError-password2').innerHTML = null
        $('password2').classList.remove('is-invalid');
        $('password2').classList.remove('is-valid');

        $('password2').type = $('password2').type === "text" ? "password" : "text"

        this.classList.toggle("fa");
        this.classList.toggle("fa-eye");

        this.classList.toggle("fa-solid");
        this.classList.toggle("fa-eye-slash");

    });

    $('formRegister').addEventListener('submit', function (event) {

        event.preventDefault();

        const elementsForm = this.elements; // Accedes a todos los elementos del formulario
        let error = false;

        for (let i = 0; i < elementsForm.length - 2; i++) { // Recorre todos los elementos del formulario

            if (!elementsForm[i].value.trim() || elementsForm[i].classList.contains('is-invalid')) {
                error = true;
                elementsForm[i].classList.add('is-invalid');
                $('msgError-empty').innerHTML = "Algún campo tiene error, no se puede enviar el formulario"
            }
        }
        !error && this.submit() // Si no hay errores manda el formulario
    })
}