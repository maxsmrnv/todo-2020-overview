<script>
    import {onMount} from 'svelte';
    import Todo from './TodoItem.svelte';
    import Button from './components/Button.svelte'
    import * as requests from './utils/requests'
    import Input from "./components/Input.svelte";

    let todos = [];
    let inputField = '';

    onMount(async () => {
        const data = await requests.GET('tasks');
        if (data.todos) {
            todos = data.todos
        }
    })

    const handleSubmit = async () => {
        const todo = await requests.POST('add', {
            title: inputField
        });
        if (todo) {
            todos = [...todos, todo]
        }
        inputField = '';
    }

    const handleRemove = (id) => async () => {
        requests.DELETE('remove', {
            id
        }).then(() => {
            todos = todos.filter(todo => todo._id !== id)
        })
    }

    const handleComplete = (id) => async () => {
        const patched = await requests.PATCH('complete', {
            id
        })
        todos = todos.map(todo => todo._id === id ? patched : todo)
    }

</script>

<div id="container">
    <header>
        <h1>TODOS</h1>
    </header>
    <main>
        <div>
            <Input autofocus placeholder="Type what you need do" bind:value={inputField}/>
            <Button on:click={handleSubmit} disabled={!inputField}>Create</Button>
        </div>
        <div>
            {#each todos as todo (todo._id)}
                <Todo onCheckbox={handleComplete(todo._id)} onButton={handleRemove(todo._id)} {todo}/>
            {/each}
        </div>
    </main>
</div>

<style>

    #container {
        background-color: #333333;
        color: cadetblue;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    header {
        padding: 50px;
        height: 100px;
        display: flex;
        font-size: 36px;
        justify-content: center;
        align-items: center;

    }

    main {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>