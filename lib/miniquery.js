const SweetSelector = {
    select: function(value){
        let result = document.querySelector(value)
        console.log(result)
    }
}

const DOM = {
    hide: function(value){
        let element = document.querySelector(value)
        element.style.visibility = 'hidden'
    },
    show: function(value){
        let element = document.querySelector(value)
        element.style.visibility = 'visible'
    },
    addClass: function(value, input){
        let element = document.querySelector(value)
        element.className += ` ${input}`
    },
    removeClass: function(value, input){
        let element = document.querySelector(value)
        element.classList.remove(input)
    }
}

const EventDispatcher = {
    on: function(value, option, callback){
        let element = document.querySelector(value)
        element.addEventListener(option, callback())
    },
    trigger: function(value, option){
        EventDispatcher.on('.klass', 'click', function() {console.log('awesome')})
    }
}

SweetSelector.select('#eyed')
SweetSelector.select('.klass')
SweetSelector.select('a')

DOM.hide('.klass')
DOM.show('.klass')
DOM.addClass('.klass', 'shadi')
DOM.removeClass('.klass', 'shadi')

EventDispatcher.trigger('.klass', 'click')