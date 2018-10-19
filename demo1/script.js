var data = {
    a: '2'
}
var app = new Vue({
    el: '#app',
    data: {
        msg: 'test',
        a: data.a
    }
})