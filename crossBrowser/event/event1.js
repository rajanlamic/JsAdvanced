var registered = {
    'first': {'elm': 'txt1', 'func': function() {
            alert(this.id);
        }},
    'secon': {'elm': 'txt2', 'func': function() {
            alert(this.value);
        }},
    'third': {'elm': 'txt3', 'func': function() {
            alert(this.className);
        }}
};


for (var i in registered) {
    document.getElementById(registered[i].elm).addEventListener('click', registered[i].func);
}