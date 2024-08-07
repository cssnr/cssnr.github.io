// JS for links.html and options.html

if (typeof ClipboardJS !== 'undefined') {
    const clipboard = new ClipboardJS('.clip')
    clipboard.on('success', function (event) {
        // console.debug('clipboard.success:', event)
        const text = event.text.trim()
        console.debug(`text: "${text}"`)
        if (event.trigger.dataset.toast) {
            showToast(event.trigger.dataset.toast)
        } else {
            showToast('Copied to Clipboard')
        }
    })
    clipboard.on('error', function (event) {
        console.debug('clipboard.error:', event)
        showToast('Clipboard Copy Failed', 'warning')
    })
}

/**
 * Show Bootstrap Toast
 * @function showToast
 * @param {String} message
 * @param {String} type
 */
function showToast(message, type = 'success') {
    console.log(`showToast: ${type}:`, message)
    const element = document.querySelector('.d-none .toast').cloneNode(true)
    element.addEventListener('mousemove', () => toast.hide())
    element.classList.add(`text-bg-${type}`)
    element.querySelector('.toast-body').innerHTML = message
    document.getElementById('toast-container').appendChild(element)
    const toast = new bootstrap.Toast(element)
    toast.show()
}

const backToTop = document.getElementById('back-to-top')
if (backToTop) {
    window.addEventListener('scroll', debounce(onScroll))
    backToTop.addEventListener('click', () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    })
}

/**
 * On Scroll Callback
 * @function onScroll
 */
function onScroll() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        backToTop.style.display = 'block'
    } else {
        backToTop.style.display = 'none'
    }
}

/**
 * DeBounce Function
 * @function debounce
 * @param {Function} fn
 * @param {Number} timeout
 */
function debounce(fn, timeout = 300) {
    let timeoutID
    return (...args) => {
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => fn(...args), timeout)
    }
}

const animateCSS = (selector, animation, prefix = 'animate__') => {
    const name = `${prefix}${animation}`
    const node = document.querySelector(selector)
    node.classList.add(`${prefix}animated`, name)
    function handleAnimationEnd(event) {
        event.stopPropagation()
        node.classList.remove(`${prefix}animated`, name)
    }
    node.addEventListener('animationend', handleAnimationEnd, {
        once: true,
    })
}
