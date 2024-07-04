// JS uninstall.html

const discordUsername = 'CSSNR'
const discordAvatar = 'https://cssnr.github.io/media/logo.png'

const uninstallForm = document.getElementById('uninstall-form')
const uninstallResponse = document.getElementById('uninstall-response')
const inputCount = document.getElementById('input-count')
const submitBtn = document.getElementById('submit-btn')
const errorAlert = document.getElementById('error-alert')

uninstallForm.addEventListener('submit', formSubmit)
uninstallResponse.addEventListener('input', function (e) {
    inputCount.textContent = this.value.length
})

document.addEventListener('DOMContentLoaded', domContentLoaded)

/**
 * DOMContentLoaded Callback
 * @function domContentLoaded
 */
async function domContentLoaded() {
    console.debug('DOMContentLoaded')
    const parent = document.getElementById('feedback')
    const apps = [webExtensions, webApps, githubActions]
    const combined = apps.flat()
    for (const app of combined) {
        const option = document.createElement('option')
        option.value = app.name
        option.textContent = app.name
        parent.appendChild(option)
    }
}

async function formSubmit(event) {
    console.debug('formSubmit:', event, this)
    event.preventDefault()
    errorAlert.style.display = 'none'
    const url = this[0].value
    const app = this[1].value
    const text = this[2].value.trim()
    if (!text) {
        uninstallResponse.focus()
        return console.warn('No Feedback to Send.')
    }
    submitBtn.classList.add('disabled')
    const lines = [
        `CSSNR GitHub Feedback for: **${app}**`,
        `\`${navigator.userAgent}\``,
        `\`\`\`\n${text}\n\`\`\``,
    ]
    // console.debug('lines:', lines)
    const response = await sendDiscord(url, lines.join('\n'))
    console.debug('response:', response)
    submitBtn.classList.remove('disabled')
    if (response.status >= 200 && response.status <= 299) {
        console.debug('Success')
        const redirect = new URL(window.location.origin)
        redirect.searchParams.append('feedback', 'yes')
        redirect.pathname = '/'
        window.location = redirect
    } else {
        console.warn(`Error ${response.status}`, response)
        errorAlert.textContent = `Error ${response.status}: ${response.statusText}`
        errorAlert.style.display = 'block'
    }
}

async function sendDiscord(url, content) {
    // console.debug('sendDiscord', url, content)
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
