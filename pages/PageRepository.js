const {TodosPage} = require('../pages/TodosPage');

class PageRepository {
    constructor(page) {
        this.page = page;
        this.toDoPage = new TodosPage(this.page);
    }

    getToDoPage() {
        return this.toDoPage;
    }
}

module.exports = {PageRepository}