const inputbox = document.getElementById("input-text");  //geting data from input box
const addbutton = document.getElementById("add-button"); //geting addbutton
const todolist = document.getElementById("todo-list");
const clearAllbtn = document.getElementById("clear-all");
inputbox.onkeyup= ()=>{
    let data = inputbox.value; //getting  value entered by user
    if(data.trim() !=0 ){
        addbutton.classList.add("active"); //value is not only spacess add active class
    }else{
        addbutton.classList.remove("active"); 
    }

}
showList();

// addbutton to add the task 
addbutton.onclick= ()=>{
    let data = inputbox.value; //getting  value entered by user
    let getlocalStorage = localStorage.getItem("New todo"); //getting local storage
    if(getlocalStorage == null){
        arr = []; //if storage is null create a blank array.
    }else{
        arr = JSON.parse(getlocalStorage);  // transform json string into js object;
    }
    if(data.trim()!=0){
        arr.push(data); //add data to array
    }
    
    localStorage.setItem("New todo",  JSON.stringify(arr));//  transform js object into json  string;
    showList();
}

// function to display task
function showList(){
    let getlocalStorage = localStorage.getItem("New todo"); //getting local storage
    if(getlocalStorage == null){
        arr = []; //if storage is null create a blank array.
    }else{
        arr = JSON.parse(getlocalStorage);  // transform json string into js object;
    }
    const totalnooftask = document.getElementById("totaltask");
    totalnooftask.innerText = arr.length;
    let itag = '';
    arr.forEach((element , index) => {
         itag += `<li><input type="checkbox" name="termsChkbx" /> <span> ${element} </span><span class="delete" onclick="deletelist(${index})"><i class="fa-solid fa-xmark"></i></span></li>`;
    });
    todolist.innerHTML = itag;
    inputbox.value="";
}

// function to delete a particular task
function deletelist(index){
    let getlocalStorage = localStorage.getItem("New todo");
    arr = JSON.parse(getlocalStorage);
    arr.splice(index,1);
    localStorage.setItem("New todo",  JSON.stringify(arr));
    showList();
}

// clear-all button to clear all the tasks
clearAllbtn.onclick = ()=>{
   arr = [];
   localStorage.setItem("New todo",  JSON.stringify(arr));
   showList();
}



