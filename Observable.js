class Observable {

    constructor() {
        this.observers = []
    }

    subscribe(fn) {
        this.observers.push(fn)
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(f => f != fn)
    }

    notify(data) {
        this.observers.forEach(obs => obs(data))
    }

}


function usuarioInscrito(data) {
    console.log('Inscrito ->', data)
}

function usuarioModificado(data) {
    console.log('Modificado ->', data)
}

function usuarioRemovido(data) {
    console.log('Removido ->', data)
}


const observable = new Observable()

observable.subscribe(usuarioInscrito)
observable.subscribe(usuarioModificado)
observable.subscribe(usuarioRemovido)


observable.notify('Usuario fez login')

observable.unsubscribe(usuarioInscrito)

console.log('-----')

observable.notify('Usuario fez logout')









