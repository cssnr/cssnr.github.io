// JS for index.html

const infoCard = document.querySelector('#clone > .info-card')

const devIcons = {
    python: document.querySelector('#clone > .devicon-python-plain'),
    javascript: document.querySelector('#clone > .devicon-javascript-plain'),
    typescript: document.querySelector('#clone > .devicon-typescript-plain'),
    powershell: document.querySelector('#clone > .devicon-powershell-plain'),
    kotlin: document.querySelector('#clone > .devicon-kotlin-plain'),
    docker: document.querySelector('#clone > .devicon-docker-plain'),
}

const dtOptions = {
    info: true,
    processing: true,
    responsive: true,
    // autoWidth: false,
    pageLength: -1,
    order: [],
    lengthMenu: [
        [-1, 5, 10, 25, 50],
        ['All', 5, 10, 25, 50],
    ],
    language: {
        // emptyTable: 'No Results',
        lengthMenu: '_MENU_ Applications',
        search: 'Filter',
        searchPlaceholder: 'Type to Filter...',
        zeroRecords: 'No Results',
    },
    // responsive: {
    //     breakpoints: [
    //         { name: 'icon', width: 550 },
    //         { name: 'name', width: Infinity },
    //         { name: 'description', width: Infinity },
    //         { name: 'github', width: Infinity },
    //         { name: 'fa', width: 550 },
    //     ],
    // },
    columns: [
        {
            data: 'icon',
            render: dtImage,
            orderable: false,
            responsivePriority: 5,
        },
        { data: 'name', render: dtName, responsivePriority: 1 },
        { data: 'description', responsivePriority: 2, orderable: false },
        {
            data: 'github',
            render: dtBadge,
            orderable: false,
            responsivePriority: 3,
        },
        {
            data: 'fa',
            render: dtIcon,
            orderable: false,
            responsivePriority: 4,
            // className: 'd-none d-sm-table-cell',
        },
    ],
    search: {
        regex: true,
    },
    // stateSave: true,
    // stateSaveParams: function (settings, data) {
    //     data.search.search = ''
    // },
}

function dtImage(data, type, row, meta) {
    // console.log('row:', row)
    if (!row?.icon) {
        return ''
    }
    const img = document.createElement('img')
    img.src = row.icon
    img.height = 20
    img.width = 20
    return img
}

function dtName(data, type, row, meta) {
    // console.log('row:', row)
    const link = document.createElement('a')
    link.classList.add('link-body-emphasis', 'text-decoration-none', 'fw-bold')
    link.textContent = data
    link.href = row.url
    return link
}

function dtBadge(data, type, row) {
    // console.log('data:', data)
    if (data) {
        return addBadge(null, 'GitHub', data, ghUrl(row))
    } else {
        return ''
    }
}

function dtIcon(data) {
    // console.log('data:', data)
    const icon = devIcons[data].cloneNode(true)
    return icon
}

document
    .querySelectorAll('.view-toggle')
    .forEach((el) => el.addEventListener('click', toggleView))

function toggleView(event) {
    const btn = event.target.closest('button')
    if (btn.dataset.view === 'cards') {
        toggleCards()
    }
    if (btn.dataset.view === 'list') {
        toggleList()
    }
}

const cards = document.getElementById('cards')
const table = document.getElementById('table')
const cardsViewBtn = document.getElementById('cards-view')
const listViewBtn = document.getElementById('list-view')

function toggleCards() {
    cards.classList.remove('d-none')
    table.classList.add('d-none')
    cardsViewBtn.classList.remove('btn-outline-secondary')
    cardsViewBtn.classList.add('btn-secondary')
    listViewBtn.classList.add('btn-outline-secondary')
    listViewBtn.classList.remove('btn-secondary')
    localStorage.setItem('view', 'cards')
    AOS.init({ disable: 'mobile' })
}

function toggleList() {
    table.classList.remove('d-none')
    cards.classList.add('d-none')
    listViewBtn.classList.remove('btn-outline-secondary')
    listViewBtn.classList.add('btn-secondary')
    cardsViewBtn.classList.add('btn-outline-secondary')
    cardsViewBtn.classList.remove('btn-secondary')
    localStorage.setItem('view', 'list')
    window.dispatchEvent(new Event('resize'))
}

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

document.addEventListener('DOMContentLoaded', domContentLoaded)

/**
 * DOMContentLoaded Callback
 * @function domContentLoaded
 */
async function domContentLoaded() {
    // console.debug('DOMContentLoaded')
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

    const apps = [].concat(...Object.values(config))
    const table = new DataTable('#data-table', dtOptions)
    table.rows.add(apps).draw()

    document
        .querySelectorAll('[data-bs-toggle="tooltip"]')
        .forEach((el) => new bootstrap.Tooltip(el))

    const view = localStorage.getItem('view')
    if (!view || view === 'cards') {
        toggleCards()
    } else {
        toggleList()
    }

    if (!localStorage.getItem('scrollShown')) {
        checkScroll()
    }

    // AOS.init({ disable: 'mobile' })
    // AOS.init()

    // if (window.scrollY !== 0) {
    //     console.debug('Not at Top')
    //     window.dispatchEvent(new Event('scroll'))
    // }
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

    // Get Footer
    const footer = card.querySelector('.card-footer')
    // const link = document.createElement('a')
    // link.target = '_blank'
    // link.rel = 'noopener'

    // Add Badges
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
            // const a = link.cloneNode(true)
            const a = document.createElement('a')
            a.target = '_blank'
            a.rel = 'noopener'
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
    a.target = '_blank'
    a.rel = 'noopener'
    // a.classList.add('text-decoration-none')
    a.title = badge
    a.href = href
    a.classList.add('me-2')
    a.appendChild(img)
    if (!parent) {
        return a
    } else {
        parent.appendChild(a)
    }
}

function ghUrl(data) {
    return `https://github.com/${data.github}`
}
