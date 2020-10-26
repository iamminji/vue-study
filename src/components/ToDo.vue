<template>
    <div id="app">
        <p>{{ text }}</p>
        <label>
            <input v-model="message">
        </label>
        <button class="btn btn-primary" v-on:click="btnClick" id="wow">클릭</button>
    </div>
</template>

<script>
    export default {
        name: 'ToDo',
        props: {
            text: String,
            message: String
        },
        methods: {
            btnClick: function () {
                this.text = this.message;
            }
        }
    }
</script>

<style scoped>

</style>