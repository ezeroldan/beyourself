<template>
    <section id="hero">

        <div id="content">
            <div class="px-5 py-5 caption">

                <h2 class="display-3 lh-1 mb-0">Lleg&oacute; el momento de</h2>
                <h1 class="display-1 fw-bold text-body-emphasis lh-1 mb-3">ser vos misma!</h1>

                <p class="lead mb-4">A trav&eacute;s de nuestros talleres descubrir&aacute;s nuevos
                    conocimientos,
                    herramientas y tips que har&aacute;n que tengas una vida m&aacute;s plena y saludable.
                    Nuestra comunidad es un espacio de encuentro y aprendizaje para compartir
                    conocimiento y crecimiento personal entre todas las mujeres, permiti&eacute;ndote
                    descubrir tu empoderamiento interior del que vos podes ser parte.</p>
                <button type="button" class="btn btn-outline-secondary btn-lg">Saber mas</button>
            </div>
        </div>

    </section>
</template>

<style lang="scss">
@media (min-width: 992px) {
    #hero {
        overflow: hidden;
        position: relative;
        min-height: 100vh;
        background: url('~/assets/images/bg.gif') no-repeat 0% 100% ;
        background-size: cover;

        #content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            position: absolute;

            .caption {
                width: 50%;
                position: relative;

                h1,
                h2 {
                    color: #fff;
                    text-shadow: #333 3px 2px 2px;
                }

                p {
                    color: #f8f9fa;
                    text-shadow: #333 1px 1px 1px;
                }
            }
        }
    }
}
</style>