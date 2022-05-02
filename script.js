const star = window.document.querySelectorAll ('.fa-star');
const emoji = window.document.querySelectorAll ('.fa-regular');
const colors = ['rgb(250, 91, 91)' , 'rgb(250, 141, 91)' , 'rgb(91, 205, 250)' , 'rgb(89, 255, 205)' , 'rgb(103, 252, 57)']


star.forEach ((star, index) => {
    star.addEventListener ('click' , ( ) =>{
        updateRating(index)
    });
});


function updateRating (index) {
    star.forEach ((star, idx) =>{
        if(idx < index + 1){
            star.classList.add('active')
        }else {
            star.classList.remove('active')
        }
    })
    emoji.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index  *  50}px)`
        emoji.style.color = colors [index]
    });

}

