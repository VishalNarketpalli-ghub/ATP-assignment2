
//        ii. task.js - Task operations
//                     // TODO: Import validator functions
//                     // import { ... } from './validator.js';
                    
import {validateDueDate, validatePriority, validateTitle} from "./validator"

const tasks = [];
                    
//                     // 1. Add new task
function addTask(title, priority, dueDate) {
                      // Validate using imported functions
    try {
        let validateDate = validateDueDate(dueDate);
        let validatePriority = validatePriority(priority);
        let validateTitle = validateTitle(title);
                          // If valid, add to tasks array
        if(validateDate && validatePriority && validateTitle){
            tasks.push(title);
        }
    } catch (error) {
        console.log(error.message + "at validate");
    }
                      // Return success/error message
}
                    
//                     // 2. Get all tasks
//                     function getAllTasks() {
//                       // Return all tasks
//                     }
                    
//                     // 3. Mark task as complete
//                     function completeTask(taskId) {
//                       // Find task and mark as complete
//                     }

//                   // Export functions