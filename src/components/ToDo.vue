<template>
    <div>
        <h1>{{ text }}</h1>
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
                this.text = "버튼 누름!";
            }
        }
    }
</script>

<style scoped>

</style>