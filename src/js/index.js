// JS for index.html

document.addEventListener('DOMContentLoaded', domContentLoaded)

const infoCard = document.querySelector('.clone > .info-card')
const extContainer = document.getElementById('ext-container')
const appsContainer = document.getElementById('apps-container')
const actionsContainer = document.getElementById('actions-container')
const otherContainer = document.getElementById('other-container')

const faIcons = {
    faPython: document.querySelector('.clone .fa-python'),
    faJs: document.querySelector('.clone .fa-js'),
    faShell: document.querySelector('.clone .fa-terminal'),
}

// // Scroll Handlers
window.addEventListener('scroll', onScroll, { once: true })
const scrollDdown = document.getElementById('scroll-down')

function onScroll() {
    if (!localStorage.getItem('scrollShown')) {
        console.debug('Scroll Event Detected, Disabling Scroll Notification.')
        localStorage.setItem('scrollShown', 'yes')
        setTimeout(() => scrollDdown.classList.add('d-none'), 500)
    }
}

function checkScroll() {
    if (
        document.documentElement.clientHeight <
        document.documentElement.scrollHeight
    ) {
        console.debug('Scrolling Detected, Showing Scroll Notification.')
        scrollDdown.classList.remove('d-none')
    } else {
        console.debug('No Scrolling, Disabling Scroll Notification.')
        localStorage.setItem('scrollShown', 'yes')
    }
}

/**
 * DOMContentLoaded Callback
 * @function domContentLoaded
 */
async function domContentLoaded() {
    // console.debug('DOMContentLoaded')
    const searchParams = new URLSearchParams(window.location.search)
    const feedback = searchParams.get('feedback')
    // console.debug('feedback:', feedback)
    if (feedback) {
        document.getElementById('feedback').classList.remove('d-none')
        history.pushState(null, '', location.href.split('?')[0])
    }

    // console.debug('Add webExtensions')
    for (const data of webExtensions) {
        addCard(data, extContainer)
    }
    // console.debug('Add webApps')
    for (const data of webApps) {
        addCard(data, appsContainer)
    }
    // console.debug('Add githubActions')
    for (const data of githubActions) {
        addCard(data, actionsContainer)
    }
    // console.debug('Add otherSoftware')
    for (const data of otherSoftware) {
        addCard(data, otherContainer)
    }

    if (!localStorage.getItem('scrollShown')) {
        checkScroll()
    }

    AOS.init({ disable: 'mobile' })
    // AOS.init()

    // anime({
    //     targets: '#scroll-down',
    //     translateY: [
    //         { value: -25, duration: 1500 },
    //         { value: 0, duration: 1500 },
    //     ],
    //     easing: 'easeInOutSine',
    //     loop: true,
    // })
}

/**
 * Add Card
 * @function addCard
 * @param {Object} data
 * @param {HTMLElement} parent
 */
function addCard(data, parent) {
    // console.debug('addCard:', data)
    const card = infoCard.cloneNode(true)
    const links = card.querySelectorAll('.url-link')
    for (const link of links) {
        link.href = data.url
        link.title = data.name
    }
    const img = card.querySelector('img')
    if (data.icon) {
        img.src = data.icon
    } else {
        img.remove()
    }
    const title = card.querySelector('h4 > a')
    title.textContent = data.name
    const p = card.querySelector('p')
    p.textContent = data.description
    const footer = card.querySelector('.card-footer')
    const link = document.createElement('a')
    link.target = '_blank'
    link.rel = 'noopener'
    for (const [text, href] of Object.entries(data.links)) {
        const a = link.cloneNode(true)
        // a.classList.add('text-decoration-none')
        a.title = text
        a.href = href
        if (data.badges?.hasOwnProperty(text)) {
            // console.debug('text:', text)
            // console.debug('href:', href)
            const src = eval(text)(data.badges[text])
            // console.debug('src:', src)
            const img = document.createElement('img')
            img.src = src
            img.alt = text
            img.classList.add('mb-1', 'hvr-grow')
            a.classList.add('me-2')
            a.appendChild(img)
            footer.appendChild(a)
        } else {
            a.textContent = text
            a.classList.add(
                'link-offset-2-hover',
                'link-underline',
                'link-underline-opacity-0',
                'link-underline-opacity-75-hover'
            )
            footer.appendChild(a)
            footer.appendChild(document.createTextNode(' - '))
        }
    }
    footer.removeChild(footer.lastChild)

    if (data.fa) {
        const div = document.createElement('div')
        const icon = faIcons[data.fa].cloneNode(true)
        div.appendChild(icon)
        div.style.float = 'right'
        footer.appendChild(div)
    }
    parent.appendChild(card)
}
