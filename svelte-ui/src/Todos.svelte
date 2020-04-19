<script>
    import {onMount} from 'svelte';
    import Todo from './TodoItem.svelte';
    import * as requests from './requests'

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
            inputField = '';
            todos = [...todos, todo]
        }
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

<main>
    <h1>TODO</h1>
    <form on:submit|preventDefault={handleSubmit}>
            <input type="text" bind:value={inputField}/>
            <button disabled={!inputField} type="submit">Add</button>
    </form>
    {#each todos as todo (todo._id)}
        <Todo onCheckbox={handleComplete(todo._id)} onButton={handleRemove(todo._id)} {todo}/>
    {/each}
</main>

<style>
</style>