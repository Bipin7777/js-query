document.querySelector('#abc').textContent='hello guest';
document.querySelector('.xyz').innerHTML='<a href ="https://codeshare.io/web7">DOM LINK</a>';
newbutton = document.createElement('button');
newbutton.innerText = 'click';
document.querySelector('body').appendChild(newbutton);
link = document.createElement('a');
link.innerText = 'link';
link.href ="https://codeshare.io/web7";

document.querySelector('body').appendChild(link);