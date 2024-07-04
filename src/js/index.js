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

/**
 * DOMContentLoaded Callback
 * @function domContentLoaded
 */
async function domContentLoaded() {
    console.debug('DOMContentLoaded')
    const searchParams = new URLSearchParams(window.location.search)
    const feedback = searchParams.get('feedback')
    // console.debug('feedback:', feedback)
    if (feedback) {
        document.getElementById('feedback').classList.remove('d-none')
        history.pushState(null, '', location.href.split('?')[0])
    }

    console.debug('Add webExtensions')
    for (const data of webExtensions) {
        addCard(data, extContainer)
    }
    console.debug('Add webApps')
    for (const data of webApps) {
        addCard(data, appsContainer)
    }
    console.debug('Add githubActions')
    for (const data of githubActions) {
        addCard(data, actionsContainer)
    }
    console.debug('Add githubActions')
    for (const data of otherSoftware) {
        addCard(data, otherContainer)
    }
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
        a.classList.add('text-decoration-none')
        a.title = text
        a.href = href
        if (data.badges?.hasOwnProperty(text)) {
            console.log('text:', text)
            console.log('href:', href)
            const src = eval(text)(data.badges[text])
            console.log('src:', src)
            const img = document.createElement('img')
            img.src = src
            img.alt = text
            a.classList.add('me-2')
            a.appendChild(img)
            footer.appendChild(a)
        } else {
            a.textContent = text
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
