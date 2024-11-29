

//declare three (3) variables that hold references to the input, button, and list elements.
        const list = document.querySelector('ul');
        const input = document.querySelector('input');
        const buttin = document.querySelector('button');

        //eclare an array named chaptersArray and assign it to the results of a defined function named getChapterList
        
        let chaptersArray = getChapterList() || [];
        //Now let's populate the displayed list of chapters. Use a forEach on the
        //chaptersArray to process each entry named chapter. Use an arrow function
        //within the loop to call a new defined function named displayList and pass it
        //the argument of chapter. That way each entry will be processed, i.e., appended to the list.
        
        chaptersArray.forEach(chapter =>{
        displayList(chapter);
        });

        // change the button click event listener to onlyd do the following task
        /* 
        1.check if the input is empty, if not, then
        2.call displayList with the input.value argument,
        3.push the input.value into the chaptersArray,
        4.update the localStorage with the new array by calling a function named setChapterList,
        5.set the input.value to nothing, and
        6.set the focus back to the input.

         */
        buttin.addEventListener('click', ()=>{
          const myItem = input.value;
          //Check to makesure input is not blank before doing the following code
        if(myItem !== ''){
           displayList(myItem);
           chaptersArray.push(myItem);
           setChapterList();
           myItem = '';
           input.focus();
          } 
          input.focus();
        });
          
      function displayList(item){
        buttin.addEventListener('click', ()=>{
          const myItem = input.value;
          //Check to makesure input is not blank before doing the following code
        if(myItem !== ''){
         input.value ='';
         const listItem = document.createElement('li');
         const listText = document.createElement('favchap');
         const listBtn= document.createElement('button');
         listItem = item;
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

      }
      function setChapterList(){
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
      };
      function getChapterList(){
        return JSON.parse(localStorage.getItem('myFavBomList'));
      };
      function deleteChapter(chapter){
      chapter = chapter.sloce(0, chapter.length -1);
      chaptersArray = chaptersArray.filter((item) => item !== chapter);
      setChapterList();
      }

         /* input.value ='';
        
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
     *
          } 
        input.focus();
      });/
       

        // COMMENT OUT THE PREVIOUS CODE
        /*
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
*/
        
    
  

