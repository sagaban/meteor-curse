
//Meteor.subscribe('mensajes');
Template.chat.helpers({
    mensajes: function () {
        return Mensajes.find();
    },
    prettifyDate: function(date) {
        if (date){
            var d = new Date(date);
            var formated = addZero(d.getDate()) + "-" + addZero(d.getMonth() + 1) + "-" + d.getFullYear() + " ";
            formated += d.getHours() + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds());
            return formated;
        }
        function addZero (number){
            if (number < 10)
                number = "0"+number;
            return number;
        }
    }
});

Template.chat.events({
    'submit': function (event) {
        event.preventDefault();

        var $mensaje = $('#mensaje');

        var texto    = $mensaje.val().trim();
        if (texto) {
            Mensajes.insert({texto: texto, creado : Date.now()})
        }

        $mensaje.val('').focus();
    }
});

Meteor.methods({
    servidor: function () {
        console.log('Versión del cliente del método servidor')
    }
})

   /* Template.registerHelper("prettifyDate", function(date) {
            if (date){
                var d = new Date(date);
                var formated = addZero(d.getDate()) + "-" + addZero(d.getMonth() + 1) + "-" + d.getFullYear() + " ";
                formated += d.getHours() + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds());
                return formated;
            }
            function addZero (number){
                if (number < 10)
                    number = "0"+number;
                return number;
            }
        }
    );*/





