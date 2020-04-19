<script>
    export let todo;
    export let onCheckbox;
    export let onButton;
</script>

<main>
    <input
            type="checkbox"
            checked={todo.isCompleted}
            disabled={todo.isCompleted}
            on:click|preventDefault={onCheckbox}
    />
    <span>{todo.title}</span>
    <button on:click={onButton}>x</button>
</main>

<style>

</style>