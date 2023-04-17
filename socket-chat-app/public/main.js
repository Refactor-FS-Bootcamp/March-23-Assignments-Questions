const socket = io()
const msgForm = document.querySelector('#msg-form');
const msgFormInput = document.querySelector('#msg');
const msgFormBtn = msgForm.querySelector('button');
const msg = document.querySelector('#messages');
const msgTemplate = document.querySelector('#msg-template').innerHTML;

socket.on('message', message => {
    console.log(message)
    const html = Mustache.render(msgTemplate, { message })
    msg.insertAdjacentHTML('beforeend', html)
})

msgForm.addEventListener('submit', e => {
    e.preventDefault()
    msgFormBtn.setAttribute('disabled', 'disabled')
    const message = msgFormInput.value;
    socket.emit('sendMessage', message, error => {
        msgFormBtn.removeAttribute('disabled')
        msgFormInput.value = ''
        msgFormInput.focus()

        if(error) return console.log(error)
        console.log('Message delivered')
    })
})