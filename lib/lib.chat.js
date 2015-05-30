Mensajes = new Mongo.Collection('mensajes');

Meteor.methods({
  comun: function () {
    console.log('Método común')
  }
});

Meteor.methods({
    noTanComun: function () {
        if (this.isSimulation)
            console.log('Método común en el cliente')
        else
            console.log('Método común en el servidor')
    }
})