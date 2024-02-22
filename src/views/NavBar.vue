<template>
    <div class="nav-bar mt-5 container">
        <div class="logo"></div>
        <div class="nav">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About Me</router-link></li>
                <li><router-link to="/work">Works</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <i class="fa-solid fa-bars text-white d-lg-none d-md-none d-sm-block"></i>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        name : "NavBar"
    }
</script>

<style scoped>
    .nav ul{
        display: flex;
        gap: 3rem;
        padding: 0;
    }
    .nav li{
        list-style: none;
    }
    .nav li a {
        color: #FFF;
        text-decoration: none;
    }
</style>>
