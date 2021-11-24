const app = new Vue({                          //instancia un nuevo objeto de vue
    el: '#app',                               // el --> atributo (elemento) y hace referencia al iddel elemento raiz que queremos conectar en html
    data:{                                    //obteto
        saludar: ' ♥ ♡ .Hola Compis. ♡ ♥ ',   //contenido del objeto data   // progresivo -->  app.saludar='☘ adiós compis ☘'
        newContacts: [
            {
                name: 'Davina',
                mail: 'davinamr91@gmail.com',
                
            },
            {
                name: 'Juliana',
                mail: 'julianoide@gmail.com',
            }
        ]
    },
    methods: {
        crearUsuario: function () {
           
            // Vaciamos el formulario de añadir
           
        },
        verFormActualizar: function (paciente_id) {
            // Antes de mostrar el formulario de actualizar, rellenamos sus campos
            
            // Mostramos el formulario
           
        },
        borrar: function (paciente_id) {
            // Borramos de la lista
            
        },
        guardarActualizacion: function (paciente_id) {
            // Ocultamos nuestro formulario de actualizar
            
            // Actualizamos los datos
            
        }
    }
});

