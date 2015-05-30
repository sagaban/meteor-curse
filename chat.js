Mensajes = new Mongo.Collection('mensajes')

if (Meteor.isClient) {
    Template.chat.helpers({
        mensajes: function () {
            return Mensajes.find();
        }
    })

    Template.chat.events({
        'submit': function (event) {
            event.preventDefault()

            var $mensaje = $('#mensaje');

            var texto    = $mensaje.val().trim();
            if (texto) {
                Mensajes.insert({texto: texto, creado : Date.now()})
            }

            $mensaje.val('').focus();
        }
    })

}

