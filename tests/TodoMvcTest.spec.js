const {test, expect} = require('@playwright/test');
const {PageRepository} = require('../pages/PageRepository');
const {faker} = require('@faker-js/faker');

var toDoItem = faker.random.alphaNumeric(10);

test.beforeEach(async ({ page }) => {
  await page.goto('https://todomvc.com/examples/angular2/');
  await expect(page).toHaveTitle("Angular2 • TodoMVC");
});

test.describe('Automation for To Do MVC', () => {
  test('Verify that user is able to enter an item into the To Do List', async ({page}) => {
    const pageRepository = new PageRepository(page); 
    const todosPage = pageRepository.getToDoPage();
    await todosPage.enterTodoItems(toDoItem);
    await expect(todosPage.enteredTodoItem).toHaveText(toDoItem);
  });
  
  test('Verify that user is able to mark a To Do Item as Completed', async ({page}) => {
    const pageRepository = new PageRepository(page); 
    const todosPage = pageRepository.getToDoPage();
    await todosPage.markToDoItemAsCompleted(toDoItem);
    await expect(todosPage.checkCompletionButton).toHaveClass("completed");
  });
  
  test('Verify that user can re-enable a marked completed to-do item', async ({page}) => {
    const pageRepository = new PageRepository(page); 
    const todosPage = pageRepository.getToDoPage();
    await todosPage.reEnableCompletedItem(toDoItem);
    await expect(todosPage.enteredTodoItem).toHaveText(toDoItem);
  });
  
  test('Verify that user can enter multiple items in the To-Do List', async ({page}) => {
    const pageRepository = new PageRepository(page); 
    const todosPage = pageRepository.getToDoPage();
    for (let i=0;i<10;i++) {
      toDoItem = faker.random.alphaNumeric(10);
      await todosPage.enterTodoItems(toDoItem);
      await expect(todosPage.enteredTodoItem.nth(i)).toHaveText(toDoItem);
    }
  });
  
  test('Verify that user can mark an item as completed from a list and the remaining items remain as-is', async ({page}) => {
    const pageRepository = new PageRepository(page); 
    const todosPage = pageRepository.getToDoPage();
    for (var i=0;i<10;i++) {
      toDoItem = faker.random.alphaNumeric(10);
      await todosPage.enterTodoItems(toDoItem);
    }
    await todosPage.markLastItemAsCompleted();
    expect(await todosPage.checkCompletionButton.count()).toBe(1);
  });

  test('Verify that multiple to-do items can be marked completed', async ({page}) => {
    const pageRepository = new PageRepository(page); 
    const todosPage = pageRepository.getToDoPage();
    for (var i=0;i<5;i++) {
      toDoItem = faker.random.alphaNumeric(10);
      await todosPage.enterTodoItems(toDoItem);
      await todosPage.completedButton.nth(i).click();
    }
    expect(await todosPage.checkCompletionButton.count()).toBe(5);
  });
})


