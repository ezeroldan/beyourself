<template>
    <aside>
        <div class="sidebar-left" :class="{ open: isSidebarOpen }">

            <div class="sidebar-close">
                <a class="close" href="#close" v-on:click="toggleSidebar"><i class="lni lni-close"></i></a>
            </div>

            <div class="sidebar-content">

                <div class="sidebar-logo">
                    <a href="index.html"><img src="~/assets/images/logo.svg" alt="Logo" /></a>
                </div>

                <p class="text">&iexcl;Lleg&oacute; el momento de ser vos misma!</p>

                <!-- logo -->
                <div class="sidebar-menu">
                    <h5 class="menu-title">Bienvenida</h5>
                    <ul>
                        <li v-for="(link, key) in navbarLinks" :key="key">
                            <a :href="'#' + link.href" v-text="link.text"></a>
                        </li>
                    </ul>
                </div>

                <social/>

            </div>

        </div>

        <div class="overlay-left" :class="{ open: isSidebarOpen }"></div>
    </aside>
</template>

<script>
export default {
    computed: {
        isSidebarOpen() {
            return this.$store.state.sidebarOpen
        },
        navbarLinks() {
            return this.$store.state.navbarLinks
        },
    },
    methods: {
        toggleSidebar(e) {
            this.$store.commit('toggleSidebar', e.target.value)
        }
    }
}
</script>