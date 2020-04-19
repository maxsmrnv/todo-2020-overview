<button on:click {...$$props}>
    <slot/>
</button>

<style>
    button {
        color: inherit;
        border-radius: 5px;
        background: none;
        border: 2px solid;
        font: inherit;
        line-height: 1;
        margin: 0.5em;
        padding: 1em 2em;
        cursor: pointer;
    }

    button:hover {
        background-color: cadetblue;
        color: #333333;
        box-shadow: inset 6.5em 0 0 0 cadetblue;
        transition: 0.25s;
    }

    button:focus {
        background-color: orange;
        color: #333333;
        box-shadow: inset 6.5em 0 0 0 orange;
        transition: 0.25s;
    }

    button:disabled {
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
        cursor: not-allowed;
        box-shadow: none;
    }

</style>