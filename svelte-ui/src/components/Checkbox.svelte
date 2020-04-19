<label class="container" on:click>
    <slot/>
    <input on:click|preventDefault {...$$props} type="checkbox"/>
    <span class="checkmark"></span>
</label>

<style>
    /*!*create new checkbox container*!*/
    .container {
        display: block;
        position: relative;
        font-size: 22px;
        user-select: none;
        width: auto;
        border-radius: 2px;
        padding-left: 35px;
    }

    .container:hover {
        cursor: pointer;
    }

    /*hide default checkbox*/
    .container input {
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;
    }

    /*create checkmark*/
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        border: 1px solid;
        border-radius: 3px;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .container .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid orange;

        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }

    .container:hover input ~ .checkmark {
        border: 1px solid white;
        display: block;

    }

    .container input:checked ~ .checkmark:after {
        display: block;
    }



</style>