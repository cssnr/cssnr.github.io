// JS for index.html

const infoCard = document.querySelector('#clone > .info-card')

const devIcons = {
    python: document.querySelector('#clone > .devicon-python-plain'),
    javascript: document.querySelector('#clone > .devicon-javascript-plain'),
    typescript: document.querySelector('#clone > .devicon-typescript-plain'),
    powershell: document.querySelector('#clone > .devicon-powershell-plain'),
}

document.addEventListener('DOMContentLoaded', domContentLoaded)

// Scroll Handlers
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
    console.debug('DOMContentLoaded')
    const searchParams = new URLSearchParams(window.location.search)
    const feedback = searchParams.get('feedback')
    if (feedback) {
        console.debug('feedback:', feedback)
        document.getElementById('feedback').classList.remove('d-none')
        history.pushState(null, '', location.href.split('?')[0])
    }

    // addCards(config)
    for (const [selector, apps] of Object.entries(config)) {
        // console.debug(`Add Section: ${selector}:`, apps)
        const parent = document.getElementById(selector)
        for (const data of apps) {
            addCard(parent, data)
        }
    }

    if (!localStorage.getItem('scrollShown')) {
        checkScroll()
    }

    document
        .querySelectorAll('[data-bs-toggle="tooltip"]')
        .forEach((el) => new bootstrap.Tooltip(el))

    AOS.init({ disable: 'mobile' })
    // AOS.init()
}

/**
 * @function addCard
 * @param {HTMLElement} parent
 * @param {Object} data
 */
function addCard(parent, data) {
    // console.debug(`addCard: ${data.name}:`, data)
    const card = infoCard.cloneNode(true)

    // Update Links
    const links = card.querySelectorAll('.url-link')
    for (const link of links) {
        link.href = data.url
        link.title = data.name
    }

    // Update Image
    const img = card.querySelector('img')
    if (data.icon) {
        img.src = data.icon
    } else {
        img.remove()
    }

    // Update Title and Text
    const title = card.querySelector('h4 > a')
    title.textContent = data.name
    const p = card.querySelector('p')
    p.textContent = data.description

    // Update Footer
    const footer = card.querySelector('.card-footer')
    const link = document.createElement('a')
    link.target = '_blank'
    link.rel = 'noopener'

    if (data.github) {
        addBadge(footer, 'GitHub', data.github, ghUrl(data))
    }
    if (data.badges) {
        for (const [key, value] of Object.entries(data.badges)) {
            addBadge(footer, key, value.id, value.link)
        }
    }

    // Add Links
    if (data.links) {
        for (const [text, href] of Object.entries(data.links)) {
            const a = link.cloneNode(true)
            // a.classList.add('text-decoration-none')
            a.title = text
            a.href = href
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
        footer.removeChild(footer.lastChild)
        // if (footer.lastChild?.textContent === ' - ') {
        //     footer.removeChild(footer.lastChild)
        // }
    }

    // Add Devicons
    if (data.fa) {
        const div = document.createElement('div')
        const icon = devIcons[data.fa].cloneNode(true)
        div.appendChild(icon)
        div.style.float = 'right'
        footer.appendChild(div)
    }
    parent.appendChild(card)
}

function addBadge(parent, badge, id, href) {
    const badges = {
        GitHub: `https://img.shields.io/github/stars/${id}?label=%20`,
        Google: `https://img.shields.io/chrome-web-store/users/${id}?logo=google&logoColor=white&label=&labelColor=4285F4&color=4285F4`,
        Mozilla: `https://img.shields.io/amo/users/${id}?logo=mozilla&logoColor=white&label=&labelColor=E66000&color=E66000`,
    }
    let src = badges[badge]

    // console.debug('src:', src)
    const img = document.createElement('img')
    img.src = src
    img.alt = badge
    img.classList.add('mb-1', 'hvr-grow')

    const a = document.createElement('a')
    // a.classList.add('text-decoration-none')
    a.title = badge
    a.href = href
    a.classList.add('me-2')
    a.appendChild(img)
    parent.appendChild(a)
}

function ghUrl(data) {
    return `https://github.com/${data.github}`
}
