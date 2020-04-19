<script>
    export let value
</script>

<input {...$$props} bind:value={value} type="text"/>

<style>
    input {
        line-height: 1;
        margin: 0.5em;
        padding: 1em 2em;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid cadetblue;
        color: #cccccc;
        width: 250px;
        font-size: inherit;
        outline: none;
    }
    input:focus {
        border-bottom: 1px solid orange;
    }
</style>