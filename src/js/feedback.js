// JS uninstall.html

const url = new URL(window.location)
const redirect = new URL(url.origin)
redirect.searchParams.append('feedback', 'yes')
redirect.pathname = '/'

const discordUsername = 'Link Extractor'
const discordAvatar = 'https://link-extractor.cssnr.com/media/logo.png'

const contentWrapper = document.getElementById('content-wrapper')
const uninstallForm = document.getElementById('uninstall-form')
const feedbackText = document.getElementById('feedback-text')
const inputCount = document.getElementById('input-count')
const submitBtn = document.getElementById('submit-btn')
const errorAlert = document.getElementById('error-alert')

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
    const parent = document.getElementById('app-list')
    const apps = [webExtensions, webApps, githubActions, otherSoftware]
    const combined = apps.flat()
    for (const app of combined) {
        const option = document.createElement('option')
        option.value = app.name
        option.textContent = app.name
        if (selected && app.name === selected) {
            option.selected = true
        }
        parent.appendChild(option)
    }

    tsParticles.load({
        id: 'tsparticles',
        url: '/config/tsparticles.json',
    })
})

async function formSubmit(event) {
    console.debug('formSubmit:', event)
    event.preventDefault()
    errorAlert.style.display = 'none'
    const url = event.target.elements['discord-webhook'].value
    // console.debug('url:', url)
    const app = event.target.elements['app-list'].value
    // console.debug('app:', app)
    const text = event.target.elements['feedback-text'].value
    // console.debug('text:', text)
    if (!text) {
        feedbackText.focus()
        animateCSS('textarea', 'shakeX')
        return console.warn('No Feedback Provided to Send.')
    }
    submitBtn.classList.add('disabled')
    const lines = [
        `CSSNR GitHub Feedback for: **${app}**`,
        `\`${navigator.userAgent}\``,
        `\`\`\`\n${text}\n\`\`\``,
    ]
    // console.debug('lines:', lines)
    try {
        const response = await sendDiscord(url, lines.join('\n'))
        console.debug('response:', response)
        submitBtn.classList.remove('disabled')
        if (response.status >= 200 && response.status <= 299) {
            contentWrapper.classList.add(
                'animate__animated',
                'animate__backOutUp'
            )
            window.location = redirect
        } else {
            console.warn(`Error ${response.status}`, response)
            errorAlert.textContent = `Error ${response.status}: ${response.statusText}`
            errorAlert.style.display = 'block'
        }
    } catch (e) {
        console.warn(`Error:`, e)
        errorAlert.textContent = `Error: ${e.message}`
        errorAlert.style.display = 'block'
    }
    submitBtn.classList.remove('disabled')
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
