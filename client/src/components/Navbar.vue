<template>
    <div class="Navbar">
        
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: "Navbar",
    props: {
        msg: String
    },
    computed: {
        ...mapState(["greet"])
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>