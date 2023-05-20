<template>
    <main>

        <header class="sticky-top pt-md-3 bg-white bg-opacity-75 shadow-lg">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <div class="navbar-brand text-cursive fs-1">@beyourself</div>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#botonera"
                        aria-controls="botonera" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="botonera">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/">Inicio</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/equipo">Quienes Somos</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/talleres">Talleres</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/testimonios">Testimonios</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/terminos">Terminos & Condiciones</NuxtLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>

        <Nuxt />

        <footer class="border-top">
            <div class="container">
                <div
                    class="row justify-content-between align-items-center row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 py-3">

                    <div class="col mb-3">
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2">
                                <NuxtLink class="nav-link p-0" to="/">Inicio</NuxtLink>
                            </li>
                            <li class="nav-item mb-2">
                                <NuxtLink class="nav-link p-0" to="/equipo">Quienes Somos</NuxtLink>
                            </li>
                            <li class="nav-item mb-2">
                                <NuxtLink class="nav-link p-0" to="/talleres">Talleres</NuxtLink>
                            </li>
                            <li class="nav-item mb-2">
                                <NuxtLink class="nav-link p-0" to="/testimonios">Testimonios</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link p-0" to="/terminos">Terminos & Condiciones</NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <div class="col mb-3">
                        <img src="~/assets/images/logo.jpeg" class="img-fluid">
                    </div>

                </div>
            </div>
        </footer>

    </main>
</template>