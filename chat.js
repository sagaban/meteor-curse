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

    Template.registerHelper("prettifyDate", function(date) {
            if (date){
                var d = new Date(date);
                var formated = addZero(d.getDay()) + "-" + addZero(d.getMonth()) + "-" + d.getFullYear() + " ";
                formated += d.getHours() + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds());
                return formated;
            }
            function addZero (number){
                if (number < 10)
                    return "0"+number;
                else
                    return number;
            }
        }
    );
}

