let customConsoleObject = {
    log: function(message) {
        console.log('Custom log:', message)
    }
}
let customConsoleObject1 = {
    error: function(message) {
        console.error('Custom log:', message)
    }
}
let customConsoleObject2 = {
    warn: function(message) {
        console.warn('Custom log:', message)
    }
}
let customConsoleObject3 = {
    table: function(message) {
        console.table('Custom log:', message)
    }
}
let customConsoleObject4 = {
    dir: function(message) {
        console.dir('Custom log:', message)
    }
}
let customConsoleObject5 = {
    dirxml: function(message) {
        console.dirxml('Custom log:', message)
    }
}
let customConsoleObject6 = {
    group: function(message) {
        console.group('Custom log:', message)
    }
}
// let customConsoleObject7 = {
//     clear: function(message) {
//         console.clear('Custom log:', message)
//     }
// }
customConsoleObject.log('Hello world');
customConsoleObject1.error('Hello world');
customConsoleObject2.warn('Hello world');
customConsoleObject3.table('Hello world');
customConsoleObject4.dir('Hello world');
customConsoleObject5.dirxml('Hello world');
customConsoleObject6.group('Hello world');
// customConsoleObject7.clear('Hello world');
