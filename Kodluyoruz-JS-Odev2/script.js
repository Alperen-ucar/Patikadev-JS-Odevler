
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
}, false);

function newElement(){
    const input = document.getElementById("task").value;
    const list = document.getElementById("list");
    
    if(input.length > 0){
       
        let li = document.createElement('li');
        let close= document.createElement('button');
        let span = document.createElement('span');
        span.ariaHidden = "true";
        li.innerHTML = input;
        span.innerHTML = "&times;";
        li.classList.add("list-group-item", "list-group-item-light");
        close.classList.add("close", "closeItem");
        close.onclick = function() {delElement(this)};
        close.type = "close";
        list.appendChild(li);
        li.appendChild(close);
        close.appendChild(span);
        $('#liveToast').toast('show');
    }else{
        $('#liveToast2').toast('show')
    }
}

function delElement(e){
    e.parentNode.parentNode.removeChild(e.parentNode);
}


function clearThis(e){
    e.value="";
}
