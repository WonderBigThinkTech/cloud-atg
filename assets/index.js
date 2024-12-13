
const accord_head = document.querySelectorAll('.accord-head');
const accord_btn = document.querySelectorAll('.accord-btn');

const accord_handle = (index) => {

    if(accord_head[index].classList.contains('accord-head-active')){
        accord_head[index].classList.remove('accord-head-active');
        return;
    }

    for(let i = 0; i < accord_head.length; i++){
        accord_head[i].classList.remove('accord-head-active');
    }
    accord_head[index].classList.add('accord-head-active');
}