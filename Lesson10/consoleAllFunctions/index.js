let customConsoleObject = {
    log: function(message) {
        console.log('Custom log:', message)
    }
}
customConsoleObject.log('Hello');

let customConsoleObject1 = {
    table: function(message) {
        console.table('Custom log:', message)
    }
}
customConsoleObject1.table('Hello');
let customConsoleObject2 = {
    time: function(message) {
        console.time('Custom log:', message)
    }
}
customConsoleObject2.time('Hello');
customConsoleObject1.table('Hello');

let customConsoleObject3 = {
    timeEnd: function(message) {
        console.timeEnd('Custom log:', message)
    }
}
customConsoleObject3.timeEnd('Hello');

let customConsoleObject4 = {
    timeLog: function(message) {
        console.timeLog('Custom log:', message)
    }
}
customConsoleObject4.timeLog('Hello');

let customConsoleObject5 = {
    timeStamp: function(message) {
        console.timeStamp('Custom log:', message)
    }
}
customConsoleObject5.timeStamp('Hello');

let customConsoleObject6 = {
    trace: function(message) {
        console.trace('Custom log:', message)
    }
}
customConsoleObject6.trace('Hello');

let customConsoleObject7 = {
    warn: function(message) {
        console.warn('Custom log:', message)
    }
}
customConsoleObject7.warn('Hello');

let customConsoleObject8 = {
    assert: function(message) {
        console.assert('Custom log:', message)
    }
}
customConsoleObject8.assert('Hello');

// let customConsoleObject9 = {
//     clear: function(message) {
//         console.clear('Custom log:', message)
//     }
// }
// customConsoleObject9.clear('Hello');

let customConsoleObject10 = {
    count: function(message) {
        console.count('Custom log:', message)
    }
}
customConsoleObject10.count('Hello');

// let customConsoleObject11 = {
//     countReset: function(message) {
//         console.countReset('Custom log:', message)
//     }
// }
// customConsoleObject11.countReset('Hello');

let customConsoleObject12 = {
    debug: function(message) {
        console.debug('Custom log:', message)
    }
}
customConsoleObject12.debug('Hello');

let customConsoleObject13 = {
    dirxml: function(message) {
        console.dirxml('Custom log:', message)
    }
}
customConsoleObject13.dirxml('Hello');

let customConsoleObject14 = {
    dir: function(message) {
        console.dir('Custom log:', message)
    }
}
customConsoleObject14.dir('Hello');

let customConsoleObject15 = {
    error: function(message) {
        console.error('Custom log:', message)
    }
}
customConsoleObject15.error('Hello');

let customConsoleObject16 = {
    group: function(message) {
        console.group('Custom log:', message)
    }
}
customConsoleObject16.group('Hello');

let customConsoleObject17 = {
    groupCollapsed: function(message) {
        console.groupCollapsed('Custom log:', message)
    }
}
customConsoleObject17.groupCollapsed('Hello');

let customConsoleObject18 = {
    groupEnd: function(message) {
        console.groupEnd('Custom log:', message)
    }
}
customConsoleObject18.groupEnd('Hello');