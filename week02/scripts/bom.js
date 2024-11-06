

//declare three (3) variables that hold references to the input, button, and list elements.
        const list = document.querySelector('ul');
        const input = document.querySelector('input');
        const buttin = document.querySelector('button');

        buttin.addEventListener('click', ()=>{
         const myItem = input.value;
         //Check to makesure input is not blank before doing the following code
       if(myItem !== ''){
        input.value ='';
        const listItem = document.createElement('li');
        const listText = document.createElement('favchap');
        const listBtn= document.createElement('button');

        listItem.appendChild(listText);
        listItem.appendChild(listBtn);
        listText.textContent = myItem;
        listBtn.textContent = 'X';
        list.appendChild(listItem);

        //Add an event listener to the delete button that removes the li element when clicked
        listBtn.addEventListener('click', ()=> {
        list.removeChild(listItem);
        myItem = '';
        });
    
       } 
       input.focus();
       
        });

    
  

