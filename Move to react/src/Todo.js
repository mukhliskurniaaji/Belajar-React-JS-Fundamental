import React from 'react';

function Todo() {
    const [activity, setActivity] = React.useState();
    const [edit, setEdit] = React.useState({});
    const [todos, setTodos] = React.useState([]);
    const [message, setMessage] = React.useState("");

    function generateID() {
        return Date.now();
    }

    function addTodoHandler(event) {
        event.preventDefault();

        // Pesan ketika inputan kosong :
        if (!activity) {
            return setMessage("Aktivitas belum ditambahkan")
        }

        setMessage('');
         // sebelum mengeksekusi kode dibawahnya, message diset kososng

        // Logic untuk Edit :
        if (edit.id) {
            const updatedTodo = {
                ...edit,
                activity: activity,
            }

            // Mendapatkan index yang akan diedit :
            const editTodoIndex= todos.findIndex(function (todo) {
                return todo.id==edit.id
            });

            const updatedTodos = [...todos];
            // data diatas berarti mengkloning todos ke dalam updatedTodos

            updatedTodos[editTodoIndex]=updatedTodo;
            // kode di atas berarti mengedit updatedTodos dengan index editTodoIndex menjadi updatedTodo.

            setTodos(updatedTodos);
            // mengeset todos dengan updatedTodos

            return cacleEditHandler();
            // setelah selesai edit, dikembalikan ke mode tambah (cancel edit)
        }

        setTodos([
            ...todos,
            {
                id : generateID(),
                activity,
                done : false,
            },
        ]) ;
        // kode di atas berarti mengeset object, dengan ID dari function generateID
       
        setActivity('');
        // kode diatas berarti mengeset actifity menjadi kosong kembali (mereset)
    
    }

    function removeTodoHandler(todoID) {
        const filteredTodos = todos.filter(function (todo) {
            return todo.id !== todoID;
        })
        setTodos(filteredTodos);
        // mengeset todos dengan yang telah difilter

        if(edit.id) cacleEditHandler();
         // setelah selesai remove, dikembalikan ke mode tambah (cancel edit)
    }

    function editTodoHandler(todo) {
        setActivity(todo.activity); //mengeset ke tampilan edit
        setEdit(todo);
    }

    function cacleEditHandler() {
        setEdit({});
        setActivity('');
    }

    function doneTodoHandler(todo) {
        const updatedTodoChecklist ={
            // id : todo.id,
            // activity: todo.activity,
            // Atau bisa ditulis :
            ...todo,
            done : todo.done ? false:true,
        };

        // Mendapatkan index yang akan diedit :
        const editTodoIndex= todos.findIndex(function (currenttodo) {
            return currenttodo.id==todo.id
        });

        const updatedTodos = [...todos];
        updatedTodos[editTodoIndex]=updatedTodoChecklist;
        // kode di atas berarti mengedit updatedTodos dengan index editTodoIndex menjadi updatedTodo.

        setTodos(updatedTodos);
        // mengeset todos dengan updatedTodos
    }

    return(
        <>
            <h1>Simple Todo List</h1>

            {message && <i style={{color: 'red'}}>{message}</i>}
                                
            <form onSubmit={addTodoHandler}>
                <input 
                    type='text'
                    placeholder='aktivitas'
                    value={activity}
                    onChange={function(event){
                        setActivity(event.target.value);
                    }}
                    
                />
                <button type="submit">{edit.id ? "Simpan":'Tambah'}</button>  
                {edit.id && <button onClick={cacleEditHandler}>Batal Edit</button>}
            </form>
            
            {todos.length > 0 ?
                <ul>
                    {todos.map(function(todo){
                        return <li key={todo.id}>
                            <input 
                            type="checkbox"
                            checked={todo.done} 
                            onChange={doneTodoHandler.bind(this, todo)} />
                            {todo.activity}
                            {todo.done ? "<Selesai>" : "<Belum Selesai>"}
                                    <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                                    <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>    
                                </li>
                    })}
                </ul>
                :
                <p>Todo masih kosong, silahkan ditambahkan !</p>
            }
        </>
    )

}

export default Todo;