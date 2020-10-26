<template>
    <div>
        <p>{{ text }}</p>
        <input v-model="message">
        <button v-on:click="btnClick" id="wow">클릭</button>
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