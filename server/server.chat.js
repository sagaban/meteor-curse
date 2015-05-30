
Meteor.publish('mensajes', function () {
    //return Mensajes.find()

    var self = this;

    self.added('mensajes', '1', { texto: 'Agregado _a mano_' });
    self.added('mensajes', '2', { texto: 'Agregado _a mano_ 2' });
    self.ready();

    Meteor.setTimeout(function () {
        self.added('mensajes', '3', { texto: 'Agregado con retardo' })
    }, 5000)
});

Meteor.methods({
  servidor: function () {
    console.log('Método solo en el servidor')
  }
})

