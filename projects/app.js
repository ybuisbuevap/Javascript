let todo =[];
let req = prompt("enter your request");

while(true){
    if(req=="quit"){
        console.log("Quitting")
        break;
        
    }

    if(req=="list"){
        console.log("-------");
        
        for(let i = 0 ; i<todo.length ; i++){
            console.log(i , todo[i]);
        }
        console.log("-------");

    } else if(req=="add"){
        let task = prompt("Enter task")
        todo.push(task)
        console.log("Task added");
        
    } else if(req=="delete"){
        let idx = prompt("enter the task index you want to delete")
        todo.splice(idx ,1 )
        console.log("task deleted");
        
    } else
        console.log("wrong request");
        

    req = prompt("enter your request");
}