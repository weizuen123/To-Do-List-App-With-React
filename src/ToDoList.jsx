import React, {useState} from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        
        if(newTask.trim() !== ""){//to prevent user to add empty task
        //t=> is updater function to safely update
        setTasks(t=> [...t,newTask]); //...t is like putting all the existing item in array, newTask is the new item, hence js will take the new item and all the existing one and ignore the item that has the same name as the new item.
        setNewTask("");
        }
    }

    function deleteTask(index){
        //if the element is not equal to the thing user wanna delete, it will store into new array
        const updatedTasks = tasks.filter((_,i) => i!==index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];

            //destructuring
            [updatedTasks[index], updatedTasks[index -1]] =
            [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length -1 ){
            const updatedTasks = [...tasks];

            //destructuring
            [updatedTasks[index], updatedTasks[index +1]] =
            [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
    <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
            <input 
                type="text"
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange}/>
            <button
                className="add-button"
                onClick={addTask}>
                Add
            </button>
        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                        className="delete-button"
                        onClick={()=> deleteTask(index)}>
                            Delete
                    </button>
                    <button
                        className="move-button"
                        onClick={()=> moveTaskUp(index)}>
                            ☝️
                    </button>
                    <button
                        className="move-button"
                        onClick={()=> moveTaskDown(index)}>
                            👇
                    </button>                
                </li>
            )}
        </ol>
    </div>);
}

export default ToDoList