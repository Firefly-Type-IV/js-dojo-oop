/**
 * A TodoList class with filtering capabilities.
 */
export class TodoList {
  constructor() {
    // TODO: Initialize an empty array for todos.
    // TODO: Each todo should be an object with { task: string, completed: boolean }
    this.todos = []
  }

  /**
   * Adds a new todo.
   * @param {string} task - The task description.
   */
  addTodo(task) {
    // TODO: Add a new todo object with completed set to false.
    this.todos.push({task: task, completed: false})
  }

  /**
   * Marks a todo as completed by index.
   * @param {number} index - The todo index.
   */
  completeTodo(index) {
    // TODO: Set the completed property to true for the todo at the given index.
    this.todos[index].completed = true
  }

  /**
   * Gets all incomplete todos.
   * @returns {Object[]} - Array of incomplete todo objects.
   */
  getIncompleteTodos() {
    // TODO: Filter and return todos where completed is false.
    return this.todos.filter(todo => todo.completed === false)
  }

  /**
   * Gets all completed todos.
   * @returns {Object[]} - Array of completed todo objects.
   */
  getCompletedTodos() {
    // TODO: Filter and return todos where completed is true.
    return this.todos.filter(todo => todo.completed === true)
  }
}
