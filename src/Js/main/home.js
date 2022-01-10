$("#btn-mobile").bind('touchstart click', toogleMenu);

function toogleMenu(e) {
    if(e.type === 'touchstart') e.preventDefault()
    console.log(e)
    const nav = $("#nav-header")
    nav.toggleClass('active')
    const active = nav.hasClass('active')
    console.log(active)
    e.currentTarget.setAttribute('aria-expanded', active)
}
