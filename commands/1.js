module.exports = {
    name: '1',
    description:'this is a 1 command',
    execute(message, args){
        message.channel.send('@everyone please read this.')
    }
}