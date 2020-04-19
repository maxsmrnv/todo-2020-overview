<script>
    import Checkbox from "./components/Checkbox.svelte";
    import Button from "./components/Button.svelte";
    import {fade} from 'svelte/transition';

    export let todo;
    export let onCheckbox;
    export let onButton;

    let itemIsHovered = false

    const handleHover = (val) => () => {
        itemIsHovered = val
    }
</script>

<div class="container"
     on:mouseenter={handleHover(true)}
     on:mouseleave={handleHover(false)}>
    <Checkbox
            checked={todo.isCompleted}
            disabled={todo.isCompleted}
            on:click={onCheckbox}>
        {todo.title}
    </Checkbox>
    {#if itemIsHovered}
        <div transition:fade>
            <Button on:click|once={onButton}>X</Button>
        </div>
    {/if}
</div>

<style>
    .container {
        margin: 10px;
        display: grid;
        grid-template-columns: 350px 100px;
        height: 70px;
        align-items: center;
    }

</style>