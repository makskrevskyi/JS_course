const name1 = prompt('Як тебе звати?');
if (name1 == 'Ігор') {
    alert('Привіт ' + name1 + ', адмін')
}
if (name1 == 'Сергій') {
    alert('Привіт ' + name1 + ', адмін')
}
if (name1 == 'Паша') {
    alert('Привіт ' + name1 + ', пацієнт')
}
if (name1 == 'Оля') {
    alert('Привіт ' + name1 + ', медсестра')
}
if (name1 == 'Оксана') {
    alert('Вітання вам ' + name1 + ', медсестра')
} else if (name1 !== 'Ігор' && name1 !== 'Сергій' && name1 !== 'Паша' && name1 !== 'Оля'
    && name1 !== "Оксана") {
    alert('Постороннім вхід заборонено!')
}