// JS config Object

const config = {
    webExtensions: [
        {
            name: 'Link Extractor',
            github: 'cssnr/link-extractor',
            url: 'https://link-extractor.cssnr.com/',
            icon: 'https://link-extractor.cssnr.com/media/logo.png',
            description:
                'Web Extension to easily extract, parse, or open all links/domains from a site or text with optional filters.',
            badges: {
                Google: {
                    id: 'ifefifghpkllfibejafbakmflidjcjfp',
                    link: 'https://chromewebstore.google.com/detail/link-extractor/ifefifghpkllfibejafbakmflidjcjfp',
                },
                Mozilla: {
                    id: 'link-extractor',
                    link: 'https://addons.mozilla.org/addon/link-extractor',
                },
            },
            links: {
                Website: 'https://link-extractor.cssnr.com/',
            },
            fa: 'javascript',
        },
        {
            name: 'Open Links in New Tab',
            github: 'cssnr/open-links-in-new-tab',
            url: 'https://open-links-in-new-tab.cssnr.com/',
            icon: 'https://raw.githubusercontent.com/cssnr/open-links-in-new-tab/master/src/images/logo128.png',
            description:
                'Web Extension to Open Links in New Tabs for Specified Domains or Temporarily on Any Tab.',
            badges: {
                Google: {
                    id: 'efahmjakjnnmleokcaomicgfhobabdkc',
                    link: 'https://chromewebstore.google.com/detail/open-links-in-new-tab/efahmjakjnnmleokcaomicgfhobabdkc',
                },
                Mozilla: {
                    id: 'open-links-in-new-tab',
                    link: 'https://addons.mozilla.org/addon/open-links-in-new-tab',
                },
            },
            links: {
                Website: 'https://open-links-in-new-tab.cssnr.com/',
            },
            fa: 'javascript',
        },
        {
            name: 'Auto Auth',
            github: 'cssnr/auto-auth',
            url: 'https://github.com/cssnr/auto-auth',
            icon: 'https://raw.githubusercontent.com/cssnr/auto-auth/master/src/images/logo128.png',
            description:
                'Web Extension for Automatic Basic HTTP Authentication with many Options and Features.',
            badges: {
                Google: {
                    id: 'gpoiggobidhogpmmlakahiaaegibnogm',
                    link: 'https://chromewebstore.google.com/detail/auto-auth/gpoiggobidhogpmmlakahiaaegibnogm',
                },
                Mozilla: {
                    id: 'auto-auth',
                    link: 'https://addons.mozilla.org/addon/auto-auth',
                },
            },
            // links: {},
            fa: 'javascript',
        },
        {
            name: 'Cache Cleaner',
            github: 'cssnr/cache-cleaner',
            url: 'https://github.com/cssnr/cache-cleaner',
            icon: 'https://raw.githubusercontent.com/cssnr/cache-cleaner/master/src/images/logo128.png',
            description:
                'Web Extension for Automatic Basic HTTP Authentication with many Options and Features.',
            badges: {
                Google: {
                    id: 'nbkhplnnajkikghffmincdbipjalpobi',
                    link: 'https://chromewebstore.google.com/detail/cache-cleaner/nbkhplnnajkikghffmincdbipjalpobi',
                },
                Mozilla: {
                    id: 'cache-cleaner-addon',
                    link: 'https://addons.mozilla.org/addon/cache-cleaner-addon',
                },
            },
            // links: {},
            fa: 'javascript',
        },
        {
            name: 'HLS Video Downloader',
            github: 'cssnr/hls-video-downloader',
            url: 'https://github.com/cssnr/hls-video-downloader',
            icon: 'https://raw.githubusercontent.com/cssnr/hls-video-downloader/master/src/images/logo128.png',
            description:
                'Experimental Web Extension for Downloading HLS Videos using Native FFmpeg.',
            badges: {
                Google: {
                    id: 'mpmiiaolodhanoalpjncddpmnkbjicbo',
                    link: 'https://chromewebstore.google.com/detail/hls-video-downloader/mpmiiaolodhanoalpjncddpmnkbjicbo',
                },
                Mozilla: {
                    id: 'hls-video-downloader',
                    link: 'https://addons.mozilla.org/addon/hls-video-downloader',
                },
            },
            links: {
                Client: 'https://github.com/cssnr/hls-downloader-client',
            },
            fa: 'javascript',
        },
        {
            name: 'Zipline Extension',
            github: 'cssnr/zipline-extension',
            url: 'https://github.com/cssnr/zipline-extension',
            icon: 'https://raw.githubusercontent.com/cssnr/zipline-extension/master/src/media/logo128.png',
            description:
                'Zipline Web Extension to Upload, View and Edit files from a Zipline v4 Server.',
            badges: {
                Google: {
                    id: 'flmepeihikildcikjbmikbbmbeemedja',
                    link: 'https://chromewebstore.google.com/detail/zipline-extension/flmepeihikildcikjbmikbbmbeemedja',
                },
                Mozilla: {
                    id: 'zipline-extension',
                    link: 'https://addons.mozilla.org/addon/zipline-extension',
                },
            },
            links: {
                Zipline: 'https://github.com/diced/zipline',
            },
            fa: 'javascript',
        },
        {
            name: 'Obtainium Extension',
            github: 'cssnr/obtainium-extension',
            url: 'https://github.com/cssnr/obtainium-extension',
            icon: 'https://raw.githubusercontent.com/cssnr/obtainium-extension/master/src/images/logo128.png',
            description:
                'Obtainium Extension for Desktop and Firefox Android to help installing apps through Obtainium.',
            badges: {
                Google: {
                    id: 'flmepeihikildcikjbmikbbmbeemedja',
                    link: 'https://chromewebstore.google.com/detail/obtainium-extension/flmepeihikildcikjbmikbbmbeemedja',
                },
                Mozilla: {
                    id: 'obtainium-extension',
                    link: 'https://addons.mozilla.org/addon/obtainium-extension',
                },
            },
            links: {
                Obtainium: 'https://github.com/ImranR98/Obtainium',
            },
            fa: 'javascript',
        },
        {
            name: 'PlayDrift Extension',
            github: 'cssnr/playdrift-extension',
            url: 'https://playdrift-extension.cssnr.com/',
            icon: 'https://playdrift-extension.cssnr.com/media/logo.png',
            description:
                'PlayDrift Web Extension to view Rankings and Win/Loss Records on Player Profiles plus much more.',
            badges: {
                Google: {
                    id: 'anlkpnbhiiojmedlkchcdmigkdccnmcn',
                    link: 'https://chromewebstore.google.com/detail/playdrift-extension/anlkpnbhiiojmedlkchcdmigkdccnmcn',
                },
                Mozilla: {
                    id: 'playdrift-extension',
                    link: 'https://addons.mozilla.org/addon/playdrift-extension',
                },
            },
            links: {
                Website: 'https://playdrift-extension.cssnr.com/',
            },
            fa: 'javascript',
        },
        {
            name: 'Django Files Extension',
            github: 'django-files/web-extension',
            url: 'https://django-files.github.io/extension/',
            icon: 'https://raw.githubusercontent.com/django-files/web-extension/master/src/media/logo128.png',
            description:
                'Web Extension for Django Files to view recent uploads, shorten URLs, and upload any Image, Video or Audio.',
            badges: {
                Google: {
                    id: 'abpbiefojfkekhkjnpakpekkpeibnjej',
                    link: 'https://chromewebstore.google.com/detail/django-files/abpbiefojfkekhkjnpakpekkpeibnjej',
                },
                Mozilla: {
                    id: 'django-files',
                    link: 'https://addons.mozilla.org/addon/django-files',
                },
            },
            links: {
                Website: 'https://django-files.github.io/extension/',
            },
            fa: 'javascript',
        },
        {
            name: 'SMWC Web Extension',
            github: 'cssnr/smwc-web-extension',
            url: 'https://smwc.world/',
            icon: 'https://raw.githubusercontent.com/cssnr/smwc-web-extension/master/src/images/logo128.png',
            description:
                'Web Extension to to easily Patch and Play ROMs Online via the smwc.world site.',
            badges: {
                Google: {
                    id: 'foalfafgmnglcgpgkhhmcfhjgmdcjide',
                    link: 'https://chromewebstore.google.com/detail/smwc-web-extension/foalfafgmnglcgpgkhhmcfhjgmdcjide',
                },
                Mozilla: {
                    id: 'smwc-web-extension',
                    link: 'https://addons.mozilla.org/addon/smwc-web-extension',
                },
            },
            links: {
                Website: 'https://smwc.world/',
            },
            fa: 'javascript',
        },
        {
            name: 'ASN Plus',
            github: 'cssnr/asn-plus',
            url: 'https://asn-plus.cssnr.com/',
            icon: 'https://asn-plus.cssnr.com/media/logo.png',
            description:
                'Aviation Safety Network Web Extension to enable dark mode plus add additional features.',
            badges: {
                Google: {
                    id: 'phcbcnpmcbkcnijkpfohkdmcofcofibh',
                    link: 'https://chromewebstore.google.com/detail/asn-plus/phcbcnpmcbkcnijkpfohkdmcofcofibh',
                },
                Mozilla: {
                    id: 'asn-plus',
                    link: 'https://addons.mozilla.org/addon/asn-plus',
                },
            },
            links: {
                Website: 'https://asn-plus.cssnr.com/',
            },
            fa: 'javascript',
        },
        {
            name: 'Text Formatter',
            github: 'cssnr/text-formatter',
            url: 'https://github.com/cssnr/text-formatter',
            icon: 'https://raw.githubusercontent.com/cssnr/text-formatter/master/src/images/logo128.png',
            description: 'Web Extension for Splitting and Formatting Text.',
            badges: {
                Google: {
                    id: 'medimbembaeldnglneiipkenpagjfcdj',
                    link: 'https://chromewebstore.google.com/detail/text-formatter/medimbembaeldnglneiipkenpagjfcdj',
                },
            },
            links: {
                Mozilla:
                    'https://github.com/cssnr/text-formatter/releases/latest',
            },
            fa: 'javascript',
        },
        {
            name: 'Aviation Tools',
            github: 'cssnr/aviation-tools',
            url: 'https://github.com/cssnr/aviation-tools',
            icon: 'https://raw.githubusercontent.com/cssnr/aviation-tools/master/src/images/logo128.png',
            description:
                'Aviation Tools Web Extension. Currently a Work in Progress.',
            badges: {
                Google: {
                    id: 'cjjhackeogffajjndfhemgniokonimin',
                    link: 'https://chromewebstore.google.com/detail/aviation-tools/cjjhackeogffajjndfhemgniokonimin',
                },
            },
            links: {
                Mozilla:
                    'https://github.com/cssnr/aviation-tools/releases/latest',
            },
            fa: 'javascript',
        },
        {
            name: 'Simple Extension',
            github: 'smashedr/simple-extension',
            url: 'https://github.com/smashedr/simple-extension',
            icon: 'https://raw.githubusercontent.com/smashedr/simple-extension/master/src/images/logo128.png',
            description:
                'Example Web Extension for copying and creating new web extensions based on Manifest V3.',
            // badges: {},
            // links: {},
            fa: 'javascript',
        },
        {
            name: 'Web Enhancer',
            github: 'smashedr/web-enhancer',
            url: 'https://github.com/smashedr/web-enhancer',
            icon: 'https://raw.githubusercontent.com/smashedr/web-enhancer/master/src/images/logo128.png',
            description:
                'Upcoming Web Extension with Various Browser Enhancements.',
            // badges: {},
            // links: {},
            fa: 'javascript',
        },
        {
            name: 'Site Tools',
            github: 'smashedr/site-tools',
            url: 'https://github.com/smashedr/site-tools',
            icon: 'https://raw.githubusercontent.com/smashedr/site-tools/master/src/images/logo128.png',
            description:
                'Upcoming Web Extension with Various Site Modifications.',
            // badges: {},
            // links: {},
            fa: 'javascript',
        },
    ],

    mobileApps: [
        {
            name: 'Django Files Android',
            github: 'django-files/android-client',
            url: 'https://django-files.github.io/android',
            icon: 'https://raw.githubusercontent.com/django-files/web-extension/master/src/media/logo128.png',
            description:
                'Android Application for sharing, uploading, and viewing files hosted on Django Files server.',
            // badges: {},
            links: {
                Download:
                    'https://github.com/django-files/android-client/releases/latest/download/app-release.apk',
                Website: 'https://django-files.github.io/android/',
            },
            fa: 'kotlin',
        },
        {
            name: 'Zipline Android',
            github: 'cssnr/zipline-android',
            url: 'https://github.com/cssnr/zipline-android',
            icon: 'https://raw.githubusercontent.com/cssnr/zipline-android/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp',
            description:
                'Android Application for sharing, uploading, and viewing files hosted on Zipline v4 server.',
            // badges: {},
            links: {
                Download:
                    'https://github.com/cssnr/zipline-android/releases/latest/download/app-release.apk',
                Zipline: 'https://github.com/diced/zipline',
            },
            fa: 'kotlin',
        },
        {
            name: 'NOAA Weather',
            github: 'cssnr/noaa-weather-android',
            url: 'https://github.com/cssnr/noaa-weather-android',
            icon: 'https://raw.githubusercontent.com/cssnr/noaa-weather-android/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp',
            description:
                'Android Application for viewing NOAA weather.gov information and forecast with a widget.',
            // badges: {},
            links: {
                Download:
                    'https://github.com/cssnr/noaa-weather-android/releases/latest/download/app-release.apk',
                NOAA: 'https://www.weather.gov/',
            },
            fa: 'kotlin',
        },
        {
            name: 'Remote Wallpaper',
            github: 'cssnr/remote-wallpaper-android',
            url: 'https://github.com/cssnr/remote-wallpaper-android',
            icon: 'https://raw.githubusercontent.com/cssnr/remote-wallpaper-android/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp',
            description:
                'Set a Random Wallpaper from a Remote Source at set intervals or manually from the widget.',
            // badges: {},
            links: {
                Download:
                    'https://github.com/cssnr/remote-wallpaper-android/releases/latest/download/app-release.apk',
                Picsum: 'https://picsum.photos/',
                Aviation: 'https://smashedr.github.io/random-image/',
            },
            fa: 'kotlin',
        },
        {
            name: 'Tibs3DPrints Android',
            github: 'cssnr/tibs3dprints-android',
            url: 'https://github.com/cssnr/tibs3dprints-android',
            icon: 'https://raw.githubusercontent.com/cssnr/tibs3dprints-android/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp',
            description:
                'Android Application for Tibs3DPrints website with recent news and alerts for updates.',
            // badges: {},
            links: {
                Download:
                    'https://github.com/cssnr/tibs3dprints-android/releases/latest/download/app-release.apk',
                Website: 'https://tibs3dprints.com/',
            },
            fa: 'kotlin',
        },
    ],

    webApps: [
        {
            name: 'Django Files',
            github: 'django-files/django-files',
            url: 'https://django-files.github.io/',
            icon: 'https://raw.githubusercontent.com/django-files/web-extension/master/src/media/logo128.png',
            description:
                'A Feature Packed Self-Hosted Django/Docker File Manager for Sharing Files with ShareX, Flameshot and Much more.',
            // badges: {},
            links: {
                Website: 'https://smwc.world/',
            },
            fa: 'python',
        },
        {
            name: 'SMWC ROM Archive',
            github: 'cssnr/smwc-web',
            url: 'https://smwc.world/',
            icon: 'https://smwc.world/static/images/logo.png',
            description:
                'SMWCentral ROM Archive to archive, download, send notifications, plus patch and play SMW ROMs online.',
            // badges: {},
            links: {
                Website: 'https://smwc.world/',
            },
            fa: 'python',
        },
        {
            name: 'SlashGIF',
            github: '',
            url: 'https://slashgif.com/',
            icon: 'https://slashgif.com/static/images/slashgif.png',
            description:
                'Slack App to search for a random GIF and preview it, before posting publicly.',
            // badges: {},
            links: {
                Website: 'https://slashgif.com/',
            },
            fa: 'python',
        },
    ],

    githubActions: [
        {
            name: 'Stack Deploy',
            github: 'cssnr/stack-deploy-action',
            url: 'https://github.com/cssnr/stack-deploy-action',
            icon: '',
            description:
                'Deploy Docker Stack to Remote Host using SSH Authentication.',
            // badges: {},
            links: {
                Actions:
                    'https://github.com/marketplace/actions/docker-stack-deploy',
            },
            fa: 'powershell',
        },
        {
            name: 'Portainer Stack Deploy',
            github: 'cssnr/portainer-stack-deploy-action',
            url: 'https://github.com/cssnr/portainer-stack-deploy-action',
            icon: '',
            description:
                'Deploy Docker Stack to Remote Host using SSH Authentication.',
            // badges: {},
            links: {
                Actions:
                    'https://github.com/marketplace/actions/portainer-stack-deploy-action',
            },
            fa: 'javascript',
        },
        {
            name: 'VirusTotal Scan',
            github: 'cssnr/virustotal-action',
            url: 'https://github.com/cssnr/virustotal-action',
            icon: '',
            description:
                'Scan Release Artifacts with VirusTotal and Update Release Notes.',
            // badges: {},
            links: {
                Actions:
                    'https://github.com/marketplace/actions/virustotal-action',
            },
            fa: 'javascript',
        },
        {
            name: 'Cloudflare Purge Cache',
            github: 'cssnr/cf-purge-cache-action',
            url: 'https://github.com/cssnr/cf-purge-cache-action',
            icon: '',
            description: 'Easily Purge Cloudflare Cache.',
            // badges: {},
            links: {
                Actions:
                    'https://github.com/marketplace/actions/cloudflare-purge-zone-cache',
            },
            fa: 'python',
        },
        {
            name: 'Update Version Tags',
            github: 'cssnr/update-version-tags-action',
            url: 'https://github.com/cssnr/update-version-tags-action',
            icon: '',
            description:
                'Update Version Tags on Push or Release for Semantic Versions.',
            // badges: {},
            links: {
                Actions:
                    'https://github.com/marketplace/actions/update-version-tags-action',
            },
            fa: 'javascript',
        },
        {
            name: 'Update JSON Value',
            github: 'cssnr/update-json-value-action',
            url: 'https://github.com/cssnr/update-json-value-action',
            icon: '',
            description: 'Update JSON file Value(s) for Publishing.',
            // badges: {},
            links: {
                Actions:
                    'https://github.com/marketplace/actions/update-json-value-action',
            },
            fa: 'javascript',
        },
        {
            name: 'Parse Issue Form',
            github: 'cssnr/parse-issue-form-action',
            url: 'https://github.com/cssnr/parse-issue-form-action',
            icon: '',
            description: 'Parse Issue Forms Into Individual Outputs.',
            // badges: {},
            links: {
                Actions:
                    'https://github.com/marketplace/actions/parse-issue-form',
            },
            fa: 'javascript',
        },
        {
            name: 'Mozilla Addon Update',
            github: 'cssnr/mozilla-addon-update-action',
            url: 'https://github.com/cssnr/mozilla-addon-update-action',
            icon: '',
            description:
                'Update the Mozilla Firefox Update JSON File after a Release.',
            // badges: {},
            links: {
                Actions:
                    'https://github.com/marketplace/actions/mozilla-addon-update-action',
            },
            fa: 'python',
        },
        {
            name: 'Web Request Action',
            github: 'cssnr/web-request-action',
            url: 'https://github.com/cssnr/web-request-action',
            icon: '',
            description:
                'Send Web Requests like POST and GET with Axios using GitHub Actions.',
            // badges: {},
            links: {
                Actions: 'https://github.com/marketplace/actions/web-request',
            },
            fa: 'javascript',
        },
        {
            name: 'Json Key Value Check',
            github: 'cssnr/json-key-value-check-action',
            url: 'https://github.com/cssnr/json-key-value-check-action',
            icon: '',
            description:
                'Verify Specified JSON Keys are equal to Specified Values.',
            // badges: {},
            // links: {},
            fa: 'typescript',
        },
        {
            name: 'Env to/from Json',
            github: 'cssnr/env-json-action',
            url: 'https://github.com/cssnr/env-json-action',
            icon: '',
            description:
                'Convert Environment File to/from a JSON File w/ Outputs.',
            // badges: {},
            // links: {},
            fa: 'javascript',
        },
        {
            name: 'Push Artifacts',
            github: 'cssnr/push-artifacts-action',
            url: 'https://github.com/cssnr/push-artifacts-action',
            icon: '',
            description: 'Pushes Build Artifacts to a Remote Host using rsync.',
            // badges: {},
            // links: {},
            fa: 'powershell',
        },
        {
            name: 'JavaScript Template Action',
            github: 'smashedr/js-test-action',
            url: 'https://github.com/smashedr/js-test-action',
            icon: '',
            description: 'Template for JavaScript Actions.',
            // badges: {},
            // links: {},
            fa: 'javascript',
        },
        {
            name: 'TypeScript Template Action',
            github: 'smashedr/ts-test-action',
            url: 'https://github.com/smashedr/ts-test-action',
            icon: '',
            description: 'Template for TypeScript Actions.',
            // badges: {},
            // links: {},
            fa: 'typescript',
        },
        {
            name: 'Python Template Action',
            github: 'smashedr/py-test-action',
            url: 'https://github.com/smashedr/py-test-action',
            icon: '',
            description: 'Template for Python Actions.',
            // badges: {},
            // links: {},
            fa: 'python',
        },
        {
            name: 'Docker Template Action',
            github: 'smashedr/docker-test-action',
            url: 'https://github.com/smashedr/docker-test-action',
            icon: '',
            description: 'Template for Docker Container Actions.',
            // badges: {},
            // links: {},
            fa: 'docker',
        },
    ],

    otherSoftware: [
        {
            name: 'Zipline CLI',
            github: 'cssnr/zipline-cli',
            url: 'https://github.com/cssnr/zipline-cli',
            icon: '',
            description: 'Command Line Interface for Zipline and Django Files.',
            // badges: {},
            links: {
                Zipline: 'https://github.com/diced/zipline',
                'Django Files': 'https://github.com/django-files/django-files',
            },
            fa: 'python',
        },
        {
            name: "Carl's Cogs",
            github: 'cssnr/vultr-python',
            url: 'https://github.com/smashedr/carl-cogs',
            icon: '',
            description:
                'Red Discord Bot Cogs. Commands and Packages for the Red Discord Bot.',
            // badges: {},
            links: {
                'Red Discord Bot':
                    'https://github.com/Cog-Creators/Red-DiscordBot',
            },
            fa: 'python',
        },
        {
            name: 'Vultr Python',
            github: 'cssnr/vultr-python',
            url: 'https://github.com/cssnr/vultr-python',
            icon: '',
            description: 'Vultr Cloud Hosting API Python 3 Library.',
            // badges: {},
            links: {
                Vultr: 'https://www.vultr.com/?ref=6905748',
            },
            fa: 'python',
        },
        {
            name: 'Flask Random Image',
            github: 'smashedr/flask-random-image',
            url: 'https://github.com/smashedr/flask-random-image',
            icon: '',
            description:
                'Flask App to Redirect to a Random Image designed for Docker.',
            // badges: {},
            links: {
                API: 'https://flask-image.cssnr.com/',
                Pages: 'https://github.com/smashedr/random-image/',
            },
            fa: 'python',
        },
        {
            name: 'Discord Webhook Relay',
            github: 'smashedr/node-discord-hook',
            url: 'https://github.com/smashedr/node-discord-hook',
            icon: '',
            description:
                'Discord Webhook Relay built in NodeJS designed for Docker.',
            // badges: {},
            // links: {},
            fa: 'javascript',
        },
        {
            name: 'YouTube Embed Redirect',
            github: 'smashedr/youtube-embed',
            url: 'https://github.com/smashedr/youtube-embed/',
            icon: '',
            description:
                'GitHub Pages and Userscript to Redirect YouTube to an Embed.',
            // badges: {},
            links: {
                Userscript:
                    'https://github.com/smashedr/youtube-embed/raw/master/src/youtube-redirect.user.js',
                Pages: 'https://smashedr.github.io/youtube-embed/',
            },
            fa: 'python',
        },
        {
            name: 'Docker Nginx Proxy',
            github: 'cssnr/docker-nginx-proxy',
            url: 'https://github.com/cssnr/docker-nginx-proxy',
            icon: '',
            description: 'Nginx Docker Image for Proxying to Other Services.',
            // badges: {},
            links: {
                Package:
                    'https://github.com/cssnr/docker-nginx-proxy/pkgs/container/docker-nginx-proxy',
            },
            fa: 'docker',
        },

        {
            name: 'Docker Nginx Static',
            github: 'cssnr/docker-nginx-static',
            url: 'https://github.com/cssnr/docker-nginx-static',
            icon: '',
            description: 'Nginx Docker Image for Serving Static Files.',
            // badges: {},
            links: {
                Package:
                    'https://github.com/cssnr/docker-nginx-static/pkgs/container/docker-nginx-static',
            },
            fa: 'docker',
        },
        {
            name: 'Readme Stats Docker Image',
            github: 'smashedr/github-readme-stats',
            url: 'https://github.com/smashedr/github-readme-stats/',
            icon: '',
            description:
                'GitHub Readme Stats Docker Images, Compose and Workflows.',
            // badges: {},
            links: {
                Packages:
                    'https://github.com/smashedr?tab=packages&repo_name=github-readme-stats',
                Source: 'https://github.com/anuraghazra/github-readme-stats',
            },
            fa: 'docker',
        },
    ],
}
