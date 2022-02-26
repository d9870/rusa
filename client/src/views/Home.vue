<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/mevn.jpg" width="350" />
        <!-- <HelloWorld msg="Default Boilerplate Template" /> -->
        <!-- <Navbar /> -->
        <Card />

        <hr>
        <footer class="footer">
          <div class="is-block">
            Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Maxime ut iste fuga optio, perferendis dolores. Veritatis facere eum repellendus aliquid sapiente maiores officia autem expedita incidunt. Aliquid quisquam odit hic fugiat magnam.
          </div>
        </footer>
        
    </div>
</template>
<script>
// @ is an alias to /src
// import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";

export default {
    name: "home",
    components: {
        // Navbar,
        Card
    },
};
</script>