<template>
    <div class="Card">
        <div class="columns is-multiline">
            <div v-for="(itm, index) in data" class="column is-one-third" :key="index">
                <div class="box">
                    <div class="title"> {{ itm.program }} </div>
                    <div class="content">
                        {{ itm.about }}
                    </div>
                    <!-- drop -->
                    <div class="dropdown is-hoverable">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                                <span>Hover me</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div class="dropdown-content">
                                <router-link v-for="(prg, index) in itm.subprogram" class="dropdown-item" :key="index" to="/about">
                                    {{ prg.program }}
                            	<hr class="dropdown-divider">
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex';
export default {
    name: "Card",
    data() {
        return {
            val: 2
        }
    },
    computed: {
        ...mapState(['data']),
    },
    methods: {
        ...mapActions(['fetchData']),
        toggle(id) {
            let a = document.getElementById(id).classList.add()
            // .classList.add("is-active");
            console.log(a)
        },
        close(id) {
            document.getElementById(id).classList.remove("is-active")
        }
    }
};
</script>