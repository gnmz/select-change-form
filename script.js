const formInner = document.querySelector('.form-inner')
const formSelect = document.getElementById('form-select')

// Изначальное значение формы при выбранном SIP

formInner.innerHTML = `<label>SIP</label><input type='text' class="w3-input" />`


// обработчик событий на селекте

formSelect.addEventListener('change', (e) => {
    const value = e.target.value;

    // switch по значению Select

    switch (value) {
        case 'SIP':  // если значнение "SIP" отрисуй items для SIP
            renderSIPItems()
            break
        case 'IAX': // если значнение "IAX" отрисуй items для IAX
            renderIAXItems()
            break
        default:
            break;
    }
})



// ренедерим айтемы при выбранном SIP

const renderSIPItems = () => {
    formInner.innerHTML = '' //очищаем предыдущее значнение 

    formInner.innerHTML = `<label>SIP</label><input type='text' class="w3-input" />` // записываем новое

}

// ренедерим айтемы при выбранном IAX

const renderIAXItems = () => {
    formInner.innerHTML = '' //очищаем предыдущее значнение 

    formInner.innerHTML = `<label>IAX</label><input type='text' class="w3-input" />` // записываем новое
}
