const $ = id => document.getElementById(id)

window.onload = function () {
    $('brand').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-brand').innerHTML = "La marca es obligatoria"
                this.classList.add('is-invalid')
                break;
    
            default:
                $('msgError-brand').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });
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
    $('color').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-color').innerHTML = "El color es obligatorio"
                this.classList.add('is-invalid')
                break;
            
            default:
                $('msgError-color').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });
    $('description').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-description').innerHTML = "La descripcion es obligatoria"
                this.classList.add('is-invalid')
                break;
            
            default:
                $('msgError-description').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });
    $('price').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-price').innerHTML = "El precio es obligatorio"
                this.classList.add('is-invalid')
                break;
            
            default:
                $('msgError-price').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });
    $('technicalSpecifications').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-technicalSpecifications').innerHTML = "Las especificaciones son obligatorias"
                this.classList.add('is-invalid')
                break;
            
            default:
                $('msgError-technicalSpecifications').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });
}