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
                name: 'Davina',
                mail: 'davinamr91@gmail.com',
            }
        ]
    },

    
    });
