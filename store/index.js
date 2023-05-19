export const state = () => ({
    sidebarOpen: false,
    navbarLinks: [
        { href: 'home', text: 'Inicio' },
        { href: 'team', text: 'Quienes Somos' },
        { href: 'services', text: 'Talleres' },
        { href: 'terms', text: 'Terminos & Condiciones' },
        
        
    ]
})

export const getters = {

}

export const mutations = {
    toggleSidebar(state) {
        state.sidebarOpen = !state.sidebarOpen
    }
}

export const actions = {

}