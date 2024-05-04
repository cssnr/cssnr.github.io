// JS for index.html

document.addEventListener('DOMContentLoaded', domContentLoaded)

const infoCard = document.querySelector('.clone > .info-card')
const extContainer = document.getElementById('ext-container')
const appsContainer = document.getElementById('apps-container')
const actionsContainer = document.getElementById('actions-container')

const webExtensions = [
    {
        name: 'Link Extractor',
        url: 'https://link-extractor.cssnr.com/',
        icon: 'https://link-extractor.cssnr.com/media/logo.png',
        description:
            'Web Extension to easily extract, parse, or open all links/domains from a site or text with optional filters.',
        links: {
            Google: 'https://chromewebstore.google.com/detail/link-extractor/ifefifghpkllfibejafbakmflidjcjfp',
            Mozilla: 'https://addons.mozilla.org/addon/link-extractor',
            GitHub: 'https://github.com/cssnr/link-extractor',
            Website: 'https://link-extractor.cssnr.com/',
        },
    },
    {
        name: 'Open Links in New Tab',
        url: 'https://open-links-in-new-tab.cssnr.com/',
        icon: 'https://raw.githubusercontent.com/cssnr/open-links-in-new-tab/master/src/images/logo128.png',
        description:
            'Web Extension to Open Links in New Tabs for Specified Domains or Temporarily on Any Tab.',
        links: {
            Google: 'https://chromewebstore.google.com/detail/open-links-in-new-tab/efahmjakjnnmleokcaomicgfhobabdkc',
            Mozilla: 'https://addons.mozilla.org/addon/open-links-in-new-tab',
            GitHub: 'https://github.com/cssnr/open-links-in-new-tab',
            Website: 'https://open-links-in-new-tab.cssnr.com/',
        },
    },
    {
        name: 'PlayDrift Extension',
        url: 'https://playdrift-extension.cssnr.com/',
        icon: 'https://playdrift-extension.cssnr.com/media/logo.png',
        description:
            'PlayDrift Web Extension to view Rankings and Win/Loss Records on Player Profiles plus much more.',
        links: {
            Google: 'https://chromewebstore.google.com/detail/playdrift-extension/anlkpnbhiiojmedlkchcdmigkdccnmcn',
            Mozilla: 'https://addons.mozilla.org/addon/playdrift-extension',
            GitHub: 'https://github.com/cssnr/playdrift-extension',
            Website: 'https://playdrift-extension.cssnr.com/',
        },
    },
    {
        name: 'Django Files Extension',
        url: 'https://django-files.github.io/',
        icon: 'https://raw.githubusercontent.com/django-files/web-extension/master/src/media/logo128.png',
        description:
            'Web Extension for Django Files to view recent uploads, shorten URLs, and upload any Image, Video or Audio.',
        links: {
            Google: 'https://chromewebstore.google.com/detail/django-files/abpbiefojfkekhkjnpakpekkpeibnjej',
            Mozilla: 'https://addons.mozilla.org/addon/django-files',
            GitHub: 'https://github.com/django-files/web-extension',
            Website: 'https://django-files.github.io/',
        },
    },
    {
        name: 'SMWC Web Extension',
        url: 'https://smwc.world/',
        icon: 'https://raw.githubusercontent.com/cssnr/smwc-web-extension/master/src/images/logo128.png',
        description:
            'Web Extension to to easily Patch and Play ROMs Online via the smwc.world site.',
        links: {
            Google: 'https://chromewebstore.google.com/detail/smwc-web-extension/foalfafgmnglcgpgkhhmcfhjgmdcjide',
            Mozilla: 'https://addons.mozilla.org/addon/smwc-web-extension',
            GitHub: 'https://github.com/cssnr/smwc-web-extension',
            Website: 'https://smwc.world/',
        },
    },
    {
        name: 'ASN Plus',
        url: 'https://asn-plus.cssnr.com/',
        icon: 'https://asn-plus.cssnr.com/media/logo.png',
        description:
            'Aviation Safety Network Web Extension to enable dark mode plus add additional features.',
        links: {
            Google: 'https://chromewebstore.google.com/detail/asn-plus/phcbcnpmcbkcnijkpfohkdmcofcofibh',
            Mozilla: 'https://addons.mozilla.org/addon/asn-plus',
            GitHub: 'https://github.com/cssnr/asn-plus',
            Website: 'https://asn-plus.cssnr.com/',
        },
    },
    {
        name: 'Text Formatter',
        url: 'https://github.com/cssnr/text-formatter',
        icon: 'https://raw.githubusercontent.com/cssnr/text-formatter/master/src/images/logo128.png',
        description: 'Web Extension for Splitting and Formatting Text.',
        links: {
            Google: 'https://chromewebstore.google.com/detail/text-formatter/medimbembaeldnglneiipkenpagjfcdj',
            Mozilla: 'https://github.com/cssnr/text-formatter/releases/latest',
            GitHub: 'https://github.com/cssnr/text-formatter',
        },
    },
    {
        name: 'Simple Extension',
        url: 'https://github.com/smashedr/simple-extension/',
        icon: 'https://raw.githubusercontent.com/smashedr/simple-extension/master/src/images/logo128.png',
        description:
            'Example Web Extension for copying and creating new web extensions based on Manifest V3.',
        links: {
            GitHub: 'https://github.com/smashedr/simple-extension/',
        },
    },
]

const webApps = [
    {
        name: 'Django Files',
        url: 'https://django-files.github.io/',
        icon: 'https://raw.githubusercontent.com/django-files/web-extension/master/src/media/logo128.png',
        description:
            'A Feature Packed Self-Hosted Django/Docker File Manager for Sharing Files with ShareX, Flameshot and Much more.',
        links: {
            GitHub: 'https://github.com/django-files/django-files',
            Website: 'https://smwc.world/',
        },
    },
    {
        name: 'SMWC ROM Archive',
        url: 'https://smwc.world/',
        icon: 'https://smwc.world/static/images/logo.png',
        description:
            'SMWCentral ROM Archive to archive, download, send notifications, plus patch and play SMW ROMs online.',
        links: {
            GitHub: 'https://github.com/cssnr/smwc-web',
            Website: 'https://smwc.world/',
        },
    },
]

const githubActions = [
    {
        name: 'Stack Deploy',
        url: 'https://github.com/cssnr/stack-deploy-action',
        description:
            'Deploy Docker Stack to Remote Host using SSH Authentication.',
        links: {
            GitHub: 'https://github.com/cssnr/stack-deploy-action',
        },
    },
    {
        name: 'Mozilla Addon Update File',
        url: 'https://github.com/cssnr/mozilla-addon-update-action',
        description:
            'Update the Mozilla Firefox Update JSON File after a Release.',
        links: {
            GitHub: 'https://github.com/cssnr/mozilla-addon-update-action',
        },
    },
    {
        name: 'Push Artifacts',
        url: 'https://github.com/cssnr/push-artifacts-action',
        description: 'Pushes Build Artifacts to a Remote Host using rsync.',
        links: {
            GitHub: 'https://github.com/cssnr/push-artifacts-action',
        },
    },
    {
        name: 'Cloudflare Purge Cache',
        url: 'https://github.com/cssnr/cf-purge-cache-action',
        description: 'Pushes Build Artifacts to a Remote Host using rsync.',
        links: {
            GitHub: 'https://github.com/cssnr/cf-purge-cache-action',
        },
    },
]

/**
 * DOMContentLoaded Callback
 * @function domContentLoaded
 */
async function domContentLoaded() {
    console.debug('DOMContentLoaded')
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
}

/**
 * Add Card
 * @function addCard
 * @param {Object} data
 * @param {HTMLElement} parent
 */
function addCard(data, parent) {
    console.debug('addCard:', data)
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
    const title = card.querySelector('h3 > a')
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
        a.textContent = text
        a.title = text
        a.href = href
        footer.appendChild(a)
        footer.appendChild(document.createTextNode(' - '))
    }
    footer.removeChild(footer.lastChild)
    parent.appendChild(card)
}
