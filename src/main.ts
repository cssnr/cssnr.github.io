import '@/assets/main.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { ViteSSG } from 'vite-ssg'
import App from '@/App.vue'
import { routes } from '@/router'

// noinspection JSUnusedGlobalSymbols
export const createApp = ViteSSG(App, { routes })
