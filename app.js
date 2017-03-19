window.addEventListener('load', function () {

    function spanClickListener(event) {
        var target = event.target;
        var onClick = document.querySelector('.active');
        /*onClick.classList.remove('active');*/
        if (target.matches(' p span')) { /*or (span.tagName === 'SPAN'*/
            target.classList.toggle('active');
            onClick.classList.remove('active');
            /*target.addEventListener('transitionend', transitionEndListener);*/
            console.log(onClick);
            /*if (onClick !== target) {
                onClick.classList.add('active');
                console.log(onClick);
            }*/
        }
    }
/*    function transitionEndListener() {
        this.removeEventListener('transitionend', transitionEndListener);
        this.classList.remove('active');

    }*/

    document.body.addEventListener('click',spanClickListener);
});



/*
function transitionEndListener(event) {
    var span = event.currentTarget; or this место спана и евент
    span.removeEventListener('transitionend', transitionEndListener);
    span.classList.remove('active');

}*/
/*Только отличие было в том что я явно удалял класс у найденного элемента, а переключал у того, на который кликнул
 У тебя наоборот
 Но оно и так работает*/