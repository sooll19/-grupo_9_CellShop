const $ = id => document.getElementById(id);

window.onload = async function(e){

    $('model').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-model').innerHTML = "El modelo es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-model').innerHTML = "Mínimo dos letras";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-model').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });


    $('description').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-description').innerHTML = "La descripcion es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-description').innerHTML = "Mínimo dos letras";
                this.classList.add('is-invalid')
                break
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-description').innerHTML = "Solo se permiten letras";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-description').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    })


    $('color').addEventListener('blur', function(e){
       
        switch (true) {
            case !this.value.trim():
                $('msgError-color').innerHTML = "El color es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-color').innerHTML = "Mínimo dos letras";
                this.classList.add('is-invalid')
                break
        
            default:
                $('msgError-color').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
        
    })
}