document.addEventListener("DOMContentLoaded", function(event) {

    let body = document.body;
    let fragment = document.createDocumentFragment();
    let container = document.createElement("div");
    let dragDropBlock = document.createElement("div");
    let del = document.createElement("div");

    let search = document.createElement("button");
    let next = document.createElement("button");
    let previous = document.createElement("button");
    let parent = document.createElement("button");
    let child = document.createElement("button");
    let input = document.createElement("input");
    let elem;

    let styles = document.createElement("style");

function main () {

    renderBlock ();
    addStyles ();
    searchNodeEl();
    searchNextNodeEl();
    searchPrevNodeEl();
    searchParentNodeEl();
    searchChildNodeEl();
    dragAndDrop();
    deleteModal();
    
}

main();


function renderBlock() {
  
    container.classList.add("containerFragment");
    dragDropBlock.classList.add("dragDropBlock");

    let contentBlock = document.createElement("div");

    del.classList.add("del");
    del.innerHTML = "🞫";

    let h3 = document.createElement("h3");
    h3.classList.add("h3");
    h3.innerHTML = "Search node element";
 
    input.classList.add("input");

    search.classList.add("search");
    search.innerHTML = "search";

    next.classList.add("nextNodeEl");
    next.innerHTML = "next";
    next.disabled = true;
   
    previous.classList.add("previousNodeEl");
    previous.innerHTML = "previous";
    previous.disabled = true;    
 
    parent.classList.add("parent");
    parent.innerHTML = "parent";
    parent.disabled = true;   
   
    child.classList.add("child");
    child.innerHTML = "children";
    child.disabled = true;    
    
    container.appendChild(del);
    container.appendChild(dragDropBlock);
    container.appendChild(contentBlock);
    
    dragDropBlock.appendChild(h3);
    
    contentBlock.appendChild(input);
    contentBlock.appendChild(search);
    contentBlock.appendChild(next);
    contentBlock.appendChild(previous);
    contentBlock.appendChild(parent);
    contentBlock.appendChild(child);
    fragment.appendChild(container);
    body.appendChild(fragment);
   
}

function addStyles () {
  
    styles.innerHTML =`

    .containerFragment {
        position: fixed;
        top: 20px;
        right: 1%;
        border: 5px solid grey;
        width: 270px;
    }
    .dragDropBlock {
        width: 100%;
        height: 230px;
        padding-top: 10px;
        background: rgb(210,218,218, 0.9);
    }
    .del {
        width: 10px;
        height: 10px;
        font-size: 16px;
        position: absolute;
        top: 0;
        right: 10px;
        cursor: pointer;
    }
    .h3 {
        color: #24222e;   
        text-align: center;   
    }
    .input {
        padding: 5px 10px;
        border: 1px solid grey;
        width: 80%;   
        background: white; 
        position: absolute; 
        top: 60px; 
        left: 30px; 
    }
    .search {   
        padding: 4px;
        width: 80%;   
        cursor: pointer; 
        position: absolute; 
        top: 100px; 
        left: 30px; 
    }
    .nextNodeEl {
        padding: 4px;
        width: 38.3%;
        cursor: pointer; 
        position: absolute; 
        top: 135px; 
        left: 28px; 
    }
    .previousNodeEl {
        padding: 4px;
        width: 38.3%;
        cursor: pointer; 
        position: absolute; 
        top: 135px; 
        left: 138px ;
    }
    .parent {
        padding: 4px;
        width: 38.3%;
        cursor: pointer; 
        position: absolute; 
        top: 170px; 
        left: 138px; 
    }
    .child {
        padding: 4px;
        width: 38.3%;
        cursor: pointer; 
        position: absolute; 
        top: 170px; 
        left: 28px; 
    }
    `
    body.appendChild(styles);

}

function deleteModal (){
    del.addEventListener("click", function (event) {
        event.preventDefault(); 
        
        let elWithClass = document.querySelector(".redBorder");
        if(elWithClass) {
            elWithClass.removeAttribute("style");
            elWithClass.classList.remove('redBorder');
        }
        
        body.removeChild(styles);
        body.removeChild(container);
        
    })
}


function searchNodeEl () {
    
    search.addEventListener("click", function (event) {
        event.preventDefault();

        let text = input.value;
        input.value = "";
        
        if (document.querySelector(".redBorder")){
            let elWithClass = document.querySelector(".redBorder");
            elWithClass.removeAttribute("style");
            elWithClass.classList.remove('redBorder');
        }
        if (text) {
            elem = document.querySelector(text);
            checkDisable(elem);
            elem.classList.add("redBorder");
            document.querySelector(".redBorder").style.border = "4px solid red";
        }
    });
    
}


function searchNextNodeEl () {
    
    next.addEventListener("click", function () {
        event.preventDefault();

        if(document.querySelector(".redBorder") && elem.nextElementSibling) {

                let elWithClass = document.querySelector(".redBorder");
                elWithClass.removeAttribute("style");
                elWithClass.classList.remove('redBorder');
        }
        if (elem && elem.nextElementSibling){      

            elem = elem.nextElementSibling;
            elem.classList.add("redBorder");
            document.querySelector(".redBorder").style.border = "4px solid red";
        }
        checkDisable(elem);
    });
    
}

function searchPrevNodeEl () {
    
    previous.addEventListener("click", function () {
        event.preventDefault();

        if(document.querySelector(".redBorder") && elem.previousElementSibling) {

                let elWithClass = document.querySelector(".redBorder");
                elWithClass.removeAttribute("style");
                elWithClass.classList.remove('redBorder');  
        }
        if (elem && elem.previousElementSibling){

            elem = elem.previousElementSibling;
            elem.classList.add("redBorder");
            document.querySelector(".redBorder").style.border = "4px solid red";
        }
        checkDisable(elem);        
    });
    
}

function searchParentNodeEl () {
    
    parent.addEventListener("click", function () {
        event.preventDefault();

        if(document.querySelector(".redBorder") && elem.parentElement) {
                let elWithClass = document.querySelector(".redBorder");
                elWithClass.removeAttribute("style");
                elWithClass.classList.remove('redBorder');
        }
        if (elem && elem.parentElement ){
       
                 elem = elem.parentElement ;
                 elem.classList.add("redBorder");
                 document.querySelector(".redBorder").style.border = "4px solid red";
        }
        checkDisable(elem);
    });
}

function searchChildNodeEl () {
    
    child.addEventListener("click", function () {
        event.preventDefault();

        if(document.querySelector(".redBorder") && elem.children) {

                let elWithClass = document.querySelector(".redBorder");
                elWithClass.removeAttribute("style");
                elWithClass.classList.remove('redBorder');

        }
        if (elem && elem.children[0]){

                elem = elem.children[0];
                elem.classList.add("redBorder");
                document.querySelector(".redBorder").style.border = "4px solid red";
        }
        checkDisable(elem);
    });
    
}

function checkDisable (elem) {

    if (elem.nextElementSibling) {
        next.disabled = false;
    } else {
        next.disabled = true;
    }
    if (elem.previousElementSibling) {
        previous.disabled = false;
    } else {
        previous.disabled = true;
    }
    if (elem.parentElement){
        parent.disabled = false;
    }  else {
        parent.disabled = true;
    }
    if (elem.children[0]) {
        child.disabled = false;
    }  else {
        child.disabled = true;
    }
}



function dragAndDrop () {

    dragDropBlock.onmousedown = function(e) {

    let coords = getCoords(container);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;
    
    container.style.position = 'absolute';
    moveAt(e);

    body.appendChild(container);

    function moveAt(e) {
        container.style.left = e.pageX - shiftX + 'px';
        container.style.top = e.pageY - shiftY + 'px';
      }

    document.onmousemove = function(e) {
        moveAt(e);
    }

    container.onmouseup = function() {
        document.onmousemove = null;
        container.onmouseup = null;
      }

      container.ondragstart = function() {
    return false;
  };

  function getCoords(elem) { 
    let box = elem.getBoundingClientRect();
         return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
         };
    }
}

}



});