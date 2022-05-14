const closeFace = document.querySelector('.close');
const openFace = document.querySelector('.open');



closeFace.addEventListener('click', function(){
    if (openFace.classList.contains('open')){
        openFace.classList.toggle('active');
        closeFace.classList.remove('active');
    }
});
openFace.addEventListener('click', function(){
    if (closeFace.classList.contains('close')){
        closeFace.classList.toggle('active');
        openFace.classList.remove('active');
    }
});