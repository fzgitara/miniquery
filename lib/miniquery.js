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
        EventDispatcher.on(value, option, function() {console.log('awesome')})
    }
}

const AjaxWrapper = {
    request: function(obj){
    let req = new XMLHttpRequest();

    req.open(obj.type, obj.url, true);
    req.onload = obj.success
    req.onerror = obj.fail
    req.send()
    }
}

// SweetSelector.select('#eyed')
// SweetSelector.select('.klass')
// SweetSelector.select('a')

// DOM.hide('.klass')
// DOM.show('.klass')
// DOM.addClass('.klass', 'shadi')
// DOM.removeClass('.klass', 'shadi')

// EventDispatcher.trigger('.klass', 'click')

// AjaxWrapper.request({
//     url: 'https://dog.ceo/api/breeds/list/all',
//     type: 'GET',
//     success: function(data){
//         console.log(data);
//     },
//     fail: function(error){
//         console.log(error);
//     }
// })

const miniquery = {
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
    },
    on: function(value, option, callback){
        let element = document.querySelector(value)
        element.addEventListener(option, callback())
    },
    trigger: function(value, option){
        EventDispatcher.on(value, option, function() {console.log('awesome')})
    },
    ajax: function(obj){
        let req = new XMLHttpRequest();
    
        req.open(obj.type, obj.url, true);
        req.onload = obj.success
        req.onerror = obj.fail
        req.send()
    }
}

const $ = miniquery

$.hide('.klass')
$.show('.klass')
$.addClass('.klass', 'shadi')
$.removeClass('.klass', 'shadi')

$.trigger('.klass', 'click')

$.ajax({
    url: 'https://dog.ceo/api/breeds/list/all',
    type: 'GET',
    success: function(data){
        console.log(data);
    },
    fail: function(error){
        console.log(error);
    }
})