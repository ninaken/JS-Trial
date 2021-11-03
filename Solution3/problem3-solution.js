function getUserName(callback) {
    var name;
    $.get('https://randomuser.me/api/', function (data) {
        name = data.results[0].name.first
            + " " + data.results[0].name.last;
        callback(name);
    });
}

var username;

function callback(res) {
    username = res;
    document.write("Name: " + username);
}

getUserName(callback);