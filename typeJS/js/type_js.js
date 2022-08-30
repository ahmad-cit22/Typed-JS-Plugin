const typeBox = document.querySelectorAll('.typedJS');
const typeBoxArr = Array.from(typeBox);

typeBoxArr.map((textItem) => {
    let text = textItem.textContent;
    textItem.innerHTML = '';
    let count = 0;

    const typedJS = () => {
        textItem.innerHTML += text.charAt(count++);

        if (count > text.length) {
            if (textItem.dataset.repeat == 'no-repeat') {
                clearInterval(typedJSInt);
            } else {
                textItem.innerHTML = '';
                count = 0;        
            }
        }
    }

    let typedJSInt = setInterval(() => {
        typedJS();
    }, textItem.dataset.speed)

})