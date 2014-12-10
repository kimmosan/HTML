window.onload = function () {
    console.log(event);

    var myId = document.getElementById('lattyartikkeli');
    myId.onclick = handleClick;
    /*myId.onclick = function(event){
        myId.style.visibility='hidden';
        //myId.style.position='absolute';
    }*/

    function handleClick(event) {
        console.log(event);
        event.target.style.visibility='hidden';
    }
}