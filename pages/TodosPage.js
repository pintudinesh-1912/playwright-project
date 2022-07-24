class TodosPage {
    constructor(page) {
        this.page = page;
        this.todoTextBox = page.locator('[placeholder="What needs to be done?"]');
        this.enteredTodoItem = page.locator('label');
        this.completedButton = page.locator('.toggle');
        this.checkCompletionButton = page.locator('.completed');
    }

    async enterTodoItems(toDoItem) {
        await this.todoTextBox.fill(toDoItem);
        await this.page.keyboard.press('Enter');
    }

    async markToDoItemAsCompleted(toDoItem) {
        await this.enterTodoItems(toDoItem);
        await this.completedButton.click();
    }

    async reEnableCompletedItem(toDoItem) {
        await this.markToDoItemAsCompleted(toDoItem);
        await this.completedButton.click();
    }

    async markLastItemAsCompleted() {
        await this.completedButton.last().click();
    }
}
module.exports = {TodosPage}