console.log(document)
document.title="DOM";
document.body.style.backgroundColor="cyan";       
document.getElementById('college_id').style.color="red";
document.getElementsByClassName('hero')[0].style.color="red";
document.querySelector('#dogeshraj').style.color="blue";
document.querySelector('.dogesh').style.color="blue";
istoggled = false;
function sayhi(){
    if(istoggled){
        document.querySelector('#dogeshraj').textContent ="helllo kaluwa";
    }
    else{
        document.querySelector('#dogeshraj').textContent ="hello world";
    }
    istoggled =!istoggled;
}
