<template>
    <nav class="navbar-area navbar-nine sticky">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-lg">

                        <a class="navbar-brand" href="index.html">
                            <img src="~/assets/images/white-logo.svg" alt="Logo" />
                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine"
                            aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="toggler-icon"></span>
                            <span class="toggler-icon"></span>
                            <span class="toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse sub-menu-bar" id="navbarNine">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item" v-for="(link, key) in navbarLinks" :key="key">
                                    <a class="page-scroll" :href="'#' + link.href" v-text="link.text"></a>
                                </li>
                            </ul>
                        </div>

                        <div class="navbar-btn d-none d-lg-inline-block">
                            <a class="menu-bar" href="#side-menu-left" v-on:click="toggleSidebar"><i
                                    class="lni lni-menu"></i></a>
                        </div>

                    </nav>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    computed: {
        isSidebarOpen() {
            return this.$store.state.isSidebarOpen
        },
        navbarLinks() {
            return this.$store.state.navbarLinks
        },
    },
    methods: {
        toggleSidebar(e) {
            this.$store.commit('toggleSidebar')
        }
    }
}
</script>