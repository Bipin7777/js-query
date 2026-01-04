$(document).ready(function () {

    // Add Task
    function addTask() {
        const taskText = $('#task-input').val().trim();
        if (!taskText) {
            alert('Please enter a task');
            return;
        }

        const taskItem = $('<li>');
        $('<span>').addClass('task-text').text(taskText).appendTo(taskItem);
        $('<input>').attr('type', 'checkbox').addClass('complete-checkbox').appendTo(taskItem);
        $('<button>').addClass('edit-btn').text('Edit').appendTo(taskItem);
        $('<button>').addClass('delete-btn').text('Delete').appendTo(taskItem);

        $('#task-list').append(taskItem);
        $('#task-input').val('');
    }

    $('#add-btn').click(addTask);

    // Enter key to add task
    $('#task-input').keypress(function (e) {
        if (e.which === 13) addTask();
    });

    // Delete Task
    $('#task-list').on('click', '.delete-btn', function () {
        $(this).parent().remove();
    });

    // Edit Task
    $('#task-list').on('click', '.edit-btn', function () {
        const taskSpan = $(this).siblings('.task-text');
        const currentText = taskSpan.text();
        const newText = prompt('Update task:', currentText);
        if (newText !== null && newText.trim() !== '') {
            taskSpan.text(newText.trim());
        }
    });

    // Complete Task (Checkbox)
    $('#task-list').on('change', '.complete-checkbox', function () {
        const taskText = $(this).siblings('.task-text');
        taskText.toggleClass('completed', this.checked);
    });

});
