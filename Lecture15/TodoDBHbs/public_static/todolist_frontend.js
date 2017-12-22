//for change in front-end files there is no need to restart the server, just reload in browser.
$(function () {  //for window on load

    function refreshTodos (todos) {
        var list = $('#todolist')
        list.empty()
        for (todo of todos) {
            list.append(
                `<li>${todo.task}</li>`
            )
        }
    }

    $.get(
        'http://localhost:3333/api/',
        function (data) {
            refreshTodos(data)
        }
    )


    $('#addtodo').click(function () { //onclick
        // var task=$('#task').val();         //form input value
        // console.log(task);
        // $.post('/add',{task:task});
        $.post( //above lines written in short. $.post is async function of jQuery. with path as first arg and body as the second one.
            'http://localhost:3333/api/add', //path  //take care of paths!!! not /add because initially we are on root itself but we want /api/add
            {task: $('#task').val()}, //body
            function (data) {// Third argument is a callback function as we want out function to be async.
                // console.log(data);        //data in the callback function is the response sent by the server on post request.
                refreshTodos(data)
            }
        )  //the data printed which is array of tasks in todolist is not in human readable but machine readable form
        //The above post function corresponds to the post request made at'/add' in todoapi.js
        $('#task').val("") //clears the form when button clicked. .val() gets if no argument passed else it sets
    })
})
