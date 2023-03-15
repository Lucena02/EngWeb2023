

exports.paginaNormal = function(data, info){
    var pagHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8"/>
                <link rel = "stylesheet" href = "w3.css"/>
                <title>Task Manager</title>
            </head>
            <body>
                <div class="w3-card-4">
                    <header class ="w3-container w3-purple">
                        <h2>Task</h2>
                    </header>
`
            if (info === undefined) {
                pagHTML += `
            
                    <form class="w3-container" method="POST">
                        <fieldset>
                            <legend>Tarefa</legend>
                            <label>Autor</label>
                            <input class="w3-input w3-round" type="text" name="autor"/>
                            <br/>
                            <label>Tarefa</label>
                            <input class="w3-input w3-round" type="text" name="descricao"/>
                            <br/>
                            <label>Data Limite</label>
                            <input class="w3-input w3-round" type="text" name="duedate"/>
                            <br/>
                            <label>Estado da Tarefa:</label>
                            <input class="w3-check" type="checkbox" name="completed" value="false"/>
                            <label>Por Fazer</label>
                            <input class="w3-check" type="checkbox" name="completed" value="true"/>
                            <label>Concluida</label>
                        </fieldset>
                    <br/>
                    <button class="w3-btn w3-purple w3-mb-2" type="submit">Submit</button>
                </form> `
            }

            else {
                console.log("Oi")
                pagHTML += `
            
                    <form class="w3-container" method="POST">
                        <fieldset>
                            <legend>Tarefa</legend>
                            <label>Autor</label>
                            <input class="w3-input w3-round" type="text" name="autor" value="${info[" autor"]}"/>
                            <br/>
                            <label>Tarefa</label>
                            <input class="w3-input w3-round" type="text" name="descricao" value="${info["descricao"]}"/>
                            <br/>
                            <label>Data Limite</label>
                            <input class="w3-input w3-round" type="text" name="duedate" value="${info["duedate"]}"/>
                            <br/>
                            <label>Estado da Tarefa:</label>
                            <input class="w3-check" type="checkbox" name="completed" value="false"/>
                            <label>Por Fazer</label>
                            <input class="w3-check" type="checkbox" name="completed" value="true"/>
                            <label>Concluida</label>
                        </fieldset>
                    <br/>
                    <button class="w3-btn w3-purple w3-mb-2" type="submit">Submit</button>
                </form> `
            }


            pagHTML += `
            </div>
            <div class="float-container">
                <div class = "float-child">
                    <header> TO DO LIST </header>
                    <table class="w3-table">
                    <tr>
                        <th>Id</th>
                        <th>Autor</th>
                        <th>Description</th>
                        <th>Due Date</th>
                    </tr>
                    `

                    for(i = 0; i < data.length;i++){
                        if (data[i]["completed"] == "false"){
                            pagHTML += `
                                <tr>
                                    <th>${data[i]["id"]}</th>
                                    <th>${data[i][" autor"]}</th>
                                    <th>${data[i]["descricao"]}</th>
                                    <th>${data[i]["duedate"]}</th>
                                    <th><a href="http://localhost:7777/edit/${data[i]["id"]}">Edit</a></th>
                                    <th><a href="http://localhost:7777/delete/${data[i]["id"]}">Delete</a></th>
                                </tr>
                            `
                        }
                    }

                    pagHTML+= `
                    </table>
                </div>

                <div class = "float-child">
                    <header> COMPLETED TASKS </header>
                    <table class="w3-table">
                    <tr>
                        <th>Id</th>
                        <th>Autor</th>
                        <th>Description</th>
                        <th>Due Date</th>
                    </tr>
                    `

                    for(i = 0; i < data.length ;i++){
                        if (data[i]["completed"] == "true"){
                            pagHTML += `
                                <tr>
                                    <th>${data[i]["id"]}</th>
                                    <th>${data[i][" autor"]}</th>
                                    <th>${data[i]["descricao"]}</th>
                                    <th>${data[i]["duedate"]}</th>
                                    <th><a href="http://localhost:7777/edit/${data[i]["id"]}">Edit</a></th>
                                    <th><a href="http://localhost:7777/delete/${data[i]["id"]}">Delete</a></th>
                                </tr>
                            `
                        }
                    }

               pagHTML += `
                    </table>
                </div>
            </div>
        </body>
    </html>


    `
    return pagHTML
}