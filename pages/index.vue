<template>
    <section class="overflow-hidden position-relative">
        <div class="row align-items-center g-0 h-100 w-100 ">
            <div class="col-md-8 col-lg-6">
                <div class="position-relative px-3 px-sm-5 py-5">

                    <h2 class="display-3 lh-1 mb-0 text-light text-center text-md-start">Lleg&oacute; el momento de</h2>
                    <h1 class="display-1 fw-bold text-body-emphasis lh-1 mb-3 text-white text-center text-md-start">ser vos misma!</h1>

                    <p class="lead mb-4 text-white-50">A trav&eacute;s de nuestros talleres descubrir&aacute;s nuevos
                        conocimientos,
                        herramientas y tips que har&aacute;n que tengas una vida m&aacute;s plena y saludable.
                        Nuestra comunidad es un espacio de encuentro y aprendizaje para compartir
                        conocimiento y crecimiento personal entre todas las mujeres, permiti&eacute;ndote
                        descubrir tu empoderamiento interior del que vos podes ser parte.</p>

                    <button type="button" class="btn btn-outline-secondary btn-lg">Saber mas</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    min-height: 100vh;
    background: url('~/assets/images/bg.gif') no-repeat;
    background-size: cover;
    background-position: 70% 0%;

    h1,
    h2 {

        text-shadow: #333 3px 2px 2px;
    }

    p {
        text-shadow: #333 1px 1px 1px;
    }
}

@media (min-width: 992px) {
    section {
        background-position: 0% 100%;

        .row {
            position: absolute;
        }
    }
}
</style>