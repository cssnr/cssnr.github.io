// JS uninstall.html

const url = new URL(window.location)
const redirect = new URL(url.origin)
redirect.searchParams.append('feedback', 'yes')
redirect.pathname = '/'

const discordUsername = 'CSSNR'
const discordAvatar = 'https://cssnr.github.io/media/logo.png'

const contentWrapper = document.getElementById('content-wrapper')
const uninstallForm = document.getElementById('uninstall-form')
const feedbackText = document.getElementById('feedback-text')
const inputCount = document.getElementById('input-count')
const submitBtn = document.getElementById('submit-btn')
const errorAlert = document.getElementById('error-alert')
const selectedApp = document.getElementById('selected-app')
uninstallForm.addEventListener('submit', formSubmit)

feedbackText.addEventListener('input', function () {
    inputCount.textContent = this.value.length
})

contentWrapper.addEventListener(
    'animationend',
    () => {
        // console.debug('contentWrapper: animationend')
        contentWrapper.classList.remove(
            'animate__animated',
            'animate__backInDown'
        )
    },
    { once: true }
)

document.addEventListener('DOMContentLoaded', function () {
    // console.debug('DOMContentLoaded')
    const selected = url.searchParams.get('app')
    if (selected) {
        selectedApp.value = selected
    }
    const appList = document.getElementById('app-list')
    const apps = [].concat(...Object.values(config))
    const combined = apps.flat()
    for (const app of combined) {
        const option = document.createElement('option')
        option.value = app.name
        // option.textContent = app.name
        // if (selected && app.name === selected) {
        //     option.selected = true
        // }
        appList.appendChild(option)
    }

    tsParticles.load({
        id: 'tsparticles',
        url: '/config/tsparticles.json',
    })
})

async function formSubmit(event) {
    console.debug('formSubmit:', event)
    event.preventDefault()
    errorAlert.classList.add('d-none')
    // error.innerHTML = ''
    const url = event.target.elements['relay-url'].value
    // console.debug('url:', url)
    const app = event.target.elements['selected-app'].value
    // console.debug('app:', app)
    const text = event.target.elements['feedback-text'].value
    // console.debug('text:', text)
    if (!text) {
        feedbackText.focus()
        animateCSS('textarea', 'shakeX')
        return console.warn('No Feedback Provided to Send.')
    }
    submitBtn.classList.add('disabled')
    const parser = new UAParser()
    const r = parser.getResult()
    const type = r.browser.type ? ` - ${r.browser.type}` : ''
    const lines = [
        `CSSNR Feedback for: **${app || 'General'}**`,
        `**Browser**: ${r.browser.name} ${r.browser.major} (${r.engine.name} - ${r.browser.version})`,
        `**System**: ${r.os.name} ${r.os.version} (${r.cpu.architecture}${type})`,
        `\`\`\`\n${text}\n\`\`\``,
    ]
    if (document.referrer) {
        lines.splice(3, 0, `**Referrer**: <${document.referrer}>`)
    }
    // console.debug('lines:', lines)
    try {
        const response = await sendDiscord(url, lines.join('\n'))
        console.debug('response:', response)
        submitBtn.classList.remove('disabled')
        if (response.ok) {
            contentWrapper.classList.add(
                'animate__animated',
                'animate__backOutUp'
            )
            window.location = redirect
        } else {
            console.warn(`Error ${response.status}`, response)
            showError(`Error ${response.status}: ${response.statusText}`)
        }
    } catch (e) {
        console.error(e)
        showError(`Error: ${e.message}`)
    }
    submitBtn.classList.remove('disabled')
}

function showError(message) {
    // const alert = document.querySelector('#clone > .alert').cloneNode(true)
    // errorAlert.querySelector('span').textContent = message
    errorAlert.textContent = message
    errorAlert.classList.remove('d-none')
    // error.appendChild(alert)
    // const bsAlert = new bootstrap.Alert(alert)
    // setTimeout(() => bsAlert.close(), 10000)
}

async function sendDiscord(url, content) {
    // console.debug('sendDiscord', url, content)
    // console.debug('content.length', content.length)
    const body = {
        username: discordUsername,
        avatar_url: discordAvatar,
        content: content,
    }
    const opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }
    return await fetch(url, opts)
}
