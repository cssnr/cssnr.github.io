const Google = (id) =>
    `https://img.shields.io/chrome-web-store/users/${id}?logo=google&logoColor=white&label=&labelColor=4285F4&color=4285F4`
const Mozilla = (id) =>
    `https://img.shields.io/amo/users/${id}?logo=mozilla&logoColor=white&label=&labelColor=E66000&color=E66000`

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
                Google: 'ifefifghpkllfibejafbakmflidjcjfp',
                Mozilla: 'link-extractor',
            },
            links: {
                Google: 'https://chromewebstore.google.com/detail/link-extractor/ifefifghpkllfibejafbakmflidjcjfp',
                Mozilla: 'https://addons.mozilla.org/addon/link-extractor',
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
            links: {
                Google: 'https://chromewebstore.google.com/detail/open-links-in-new-tab/efahmjakjnnmleokcaomicgfhobabdkc',
                Mozilla:
                    'https://addons.mozilla.org/addon/open-links-in-new-tab',
                Website: 'https://open-links-in-new-tab.cssnr.com/',
            },
            badges: {
                Google: 'efahmjakjnnmleokcaomicgfhobabdkc',
                Mozilla: 'open-links-in-new-tab',
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
            links: {
                Google: 'https://chromewebstore.google.com/detail/playdrift-extension/anlkpnbhiiojmedlkchcdmigkdccnmcn',
                Mozilla: 'https://addons.mozilla.org/addon/playdrift-extension',
                Website: 'https://playdrift-extension.cssnr.com/',
            },
            badges: {
                Google: 'anlkpnbhiiojmedlkchcdmigkdccnmcn',
                Mozilla: 'playdrift-extension',
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
            links: {
                Google: 'https://chromewebstore.google.com/detail/django-files/abpbiefojfkekhkjnpakpekkpeibnjej',
                Mozilla: 'https://addons.mozilla.org/addon/django-files',
                Website: 'https://django-files.github.io/extension/',
            },
            badges: {
                Google: 'abpbiefojfkekhkjnpakpekkpeibnjej',
                Mozilla: 'django-files',
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
            links: {
                Google: 'https://chromewebstore.google.com/detail/smwc-web-extension/foalfafgmnglcgpgkhhmcfhjgmdcjide',
                Mozilla: 'https://addons.mozilla.org/addon/smwc-web-extension',
                Website: 'https://smwc.world/',
            },
            badges: {
                Google: 'foalfafgmnglcgpgkhhmcfhjgmdcjide',
                Mozilla: 'smwc-web-extension',
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
            links: {
                Google: 'https://chromewebstore.google.com/detail/asn-plus/phcbcnpmcbkcnijkpfohkdmcofcofibh',
                Mozilla: 'https://addons.mozilla.org/addon/asn-plus',
                Website: 'https://asn-plus.cssnr.com/',
            },
            badges: {
                Google: 'phcbcnpmcbkcnijkpfohkdmcofcofibh',
                Mozilla: 'asn-plus',
            },
            fa: 'javascript',
        },
        {
            name: 'HLS Video Downloader',
            github: 'cssnr/hls-video-downloader',
            url: 'https://github.com/cssnr/hls-video-downloader',
            icon: 'https://raw.githubusercontent.com/cssnr/hls-video-downloader/master/src/images/logo128.png',
            description:
                'Experimental Web Extension for Downloading HLS Videos using Native FFmpeg.',
            links: {
                Google: 'https://chromewebstore.google.com/detail/text-formatter/mpmiiaolodhanoalpjncddpmnkbjicbo',
                Mozilla:
                    'https://addons.mozilla.org/addon/hls-video-downloader',
                Client: 'https://github.com/cssnr/hls-downloader-client',
            },
            badges: {
                Google: 'mpmiiaolodhanoalpjncddpmnkbjicbo',
                Mozilla: 'hls-video-downloader',
            },
            fa: 'javascript',
        },
        {
            name: 'Text Formatter',
            github: 'cssnr/text-formatter',
            url: 'https://github.com/cssnr/text-formatter',
            icon: 'https://raw.githubusercontent.com/cssnr/text-formatter/master/src/images/logo128.png',
            description: 'Web Extension for Splitting and Formatting Text.',
            links: {
                Google: 'https://chromewebstore.google.com/detail/text-formatter/medimbembaeldnglneiipkenpagjfcdj',
                Mozilla:
                    'https://github.com/cssnr/text-formatter/releases/latest',
            },
            badges: {
                Google: 'medimbembaeldnglneiipkenpagjfcdj',
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
            links: {
                Google: 'https://chromewebstore.google.com/detail/aviation-tools/cjjhackeogffajjndfhemgniokonimin',
                Mozilla:
                    'https://github.com/cssnr/aviation-tools/releases/latest',
            },
            badges: {
                Google: 'cjjhackeogffajjndfhemgniokonimin',
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
            links: {},
            badges: {},
            fa: 'javascript',
        },
        {
            name: 'Web Enhancer',
            github: 'smashedr/web-enhancer',
            url: 'https://github.com/smashedr/web-enhancer',
            icon: 'https://raw.githubusercontent.com/smashedr/web-enhancer/master/src/images/logo128.png',
            description:
                'Upcoming Web Extension with Various Browser Enhancements.',
            links: {},
            badges: {},
            fa: 'javascript',
        },
        {
            name: 'Site Tools',
            github: 'smashedr/site-tools',
            url: 'https://github.com/smashedr/site-tools',
            icon: 'https://raw.githubusercontent.com/smashedr/site-tools/master/src/images/logo128.png',
            description:
                'Upcoming Web Extension with Various Site Modifications.',
            links: {},
            badges: {},
            fa: 'javascript',
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
            links: {
                Website: 'https://smwc.world/',
            },
            badges: {},
            fa: 'python',
        },
        {
            name: 'SMWC ROM Archive',
            github: 'cssnr/smwc-web',
            url: 'https://smwc.world/',
            icon: 'https://smwc.world/static/images/logo.png',
            description:
                'SMWCentral ROM Archive to archive, download, send notifications, plus patch and play SMW ROMs online.',
            links: {
                Website: 'https://smwc.world/',
            },
            badges: {},
            fa: 'python',
        },
        {
            name: 'SlashGIF',
            github: 'cssnr/slashgif-site',
            url: 'https://slashgif.com/',
            icon: 'https://slashgif.com/static/images/slashgif.png',
            description:
                'Slack App to search for a random GIF and preview it, before posting publicly.',
            links: {
                Website: 'https://slashgif.com/',
            },
            badges: {},
            fa: 'python',
        },
    ],

    githubActions: [
        {
            name: 'VirusTotal Scan',
            github: 'cssnr/virustotal-action',
            url: 'https://github.com/marketplace/actions/virustotal-action',
            description:
                'Scan Release Artifacts with VirusTotal and Update Release Notes.',
            links: {
                Actions:
                    'https://github.com/marketplace/actions/virustotal-action',
            },
            badges: {},
            fa: 'javascript',
        },
        {
            name: 'Update Version Tags',
            github: 'cssnr/update-version-tags-action',
            url: 'https://github.com/marketplace/actions/update-version-tags-action',
            description:
                'Update Version Tags on Push or Release for Semantic Versions.',
            links: {
                Actions:
                    'https://github.com/marketplace/actions/update-version-tags-action',
            },
            badges: {},
            fa: 'javascript',
        },
        {
            name: 'Update JSON Value',
            github: 'cssnr/update-json-value-action',
            url: 'https://github.com/marketplace/actions/update-json-value-action',
            description: 'Update JSON file Value(s) for Publishing.',
            links: {
                Actions:
                    'https://github.com/marketplace/actions/update-json-value-action',
            },
            badges: {},
            fa: 'javascript',
        },
        {
            name: 'Parse Issue Form',
            github: 'cssnr/parse-issue-form-action',
            url: 'https://github.com/cssnr/parse-issue-form-action',
            description: 'Parse Issue Forms Into Individual Outputs.',
            links: {
                Actions:
                    'https://github.com/marketplace/actions/parse-issue-form',
            },
            badges: {},
            fa: 'javascript',
        },
        {
            name: 'Stack Deploy',
            github: 'cssnr/stack-deploy-action',
            url: 'https://github.com/cssnr/stack-deploy-action',
            description:
                'Deploy Docker Stack to Remote Host using SSH Authentication.',
            links: {
                Actions:
                    'https://github.com/marketplace/actions/docker-stack-deploy',
            },
            badges: {},
            fa: 'powershell',
        },
        {
            name: 'Portainer Stack Deploy',
            github: 'cssnr/portainer-stack-deploy-action',
            url: 'https://github.com/cssnr/portainer-stack-deploy-action',
            description:
                'Deploy Docker Stack to Remote Host using SSH Authentication.',
            links: {
                Actions:
                    'https://github.com/marketplace/actions/portainer-stack-deploy-action',
            },
            badges: {},
            fa: 'javascript',
        },
        {
            name: 'Mozilla Addon Update',
            github: 'cssnr/mozilla-addon-update-action',
            url: 'https://github.com/marketplace/actions/mozilla-addon-update-action',
            description:
                'Update the Mozilla Firefox Update JSON File after a Release.',
            links: {
                Actions:
                    'https://github.com/marketplace/actions/mozilla-addon-update-action',
            },
            badges: {},
            fa: 'python',
        },
        {
            name: 'Json Key Value Check',
            github: 'cssnr/json-key-value-check-action',
            url: 'https://github.com/cssnr/json-key-value-check-action',
            description:
                'Verify Specified JSON Keys are equal to Specified Values.',
            links: {},
            badges: {},
            fa: 'typescript',
        },
        {
            name: 'Push Artifacts',
            github: 'cssnr/push-artifacts-action',
            url: 'https://github.com/cssnr/push-artifacts-action',
            description: 'Pushes Build Artifacts to a Remote Host using rsync.',
            links: {},
            badges: {},
            fa: 'powershell',
        },
        {
            name: 'Cloudflare Purge Cache',
            github: 'cssnr/cf-purge-cache-action',
            url: 'https://github.com/cssnr/cf-purge-cache-action',
            description: 'Easily Purge Cloudflare Cache.',
            links: {},
            badges: {},
            fa: 'python',
        },
        {
            name: 'JavaScript Template Action',
            github: 'smashedr/js-test-action',
            url: 'https://github.com/smashedr/js-test-action',
            description: 'Template for JavaScript Actions.',
            links: {},
            badges: {},
            fa: 'javascript',
        },
        {
            name: 'TypeScript Template Action',
            github: 'smashedr/ts-test-action',
            url: 'https://github.com/smashedr/ts-test-action',
            description: 'Template for TypeScript Actions.',
            links: {},
            badges: {},
            fa: 'typescript',
        },
        {
            name: 'Python Template Action',
            github: 'smashedr/py-test-action',
            url: 'https://github.com/smashedr/py-test-action',
            description: 'Template for Python Actions.',
            links: {},
            badges: {},
            fa: 'python',
        },
    ],
    otherSoftware: [
        {
            name: 'Zipline CLI',
            github: 'cssnr/zipline-cli',
            url: 'https://github.com/cssnr/zipline-cli',
            description: 'Command Line Interface for Zipline and Django Files.',
            links: {
                Zipline: 'https://github.com/diced/zipline',
                'Django Files': 'https://github.com/django-files/django-files',
            },
            badges: {},
            fa: 'python',
        },
        {
            name: "Carl's Cogs",
            github: 'cssnr/vultr-python',
            url: 'https://github.com/smashedr/carl-cogs',
            description:
                'Red Discord Bot Cogs. Commands and Packages for the Red Discord Bot.',
            links: {
                'Red Discord Bot':
                    'https://github.com/Cog-Creators/Red-DiscordBot',
            },
            badges: {},
            fa: 'python',
        },
        {
            name: 'Vultr Python',
            github: 'cssnr/vultr-python',
            url: 'https://github.com/cssnr/vultr-python',
            description: 'Vultr Cloud Hosting API Python 3 Library.',
            links: {
                Vultr: 'https://www.vultr.com/?ref=6905748',
            },
            badges: {},
            fa: 'python',
        },
        {
            name: 'Flask Random Image',
            github: 'smashedr/flask-random-image',
            url: 'https://github.com/smashedr/flask-random-image',
            description:
                'Flask App to Redirect to a Random Image designed for Docker.',
            links: {
                API: 'https://flask-image.cssnr.com/',
                Pages: 'https://github.com/smashedr/random-image/',
            },
            badges: {},
            fa: 'python',
        },
        {
            name: 'Discord Webhook Relay',
            github: 'smashedr/node-discord-hook',
            url: 'https://github.com/smashedr/node-discord-hook',
            description:
                'Discord Webhook Relay built in NodeJS designed for Docker.',
            links: {},
            badges: {},
            fa: 'javascript',
        },
        {
            name: 'YouTube Embed Redirect',
            github: 'smashedr/youtube-embed',
            url: 'https://github.com/smashedr/youtube-embed/',
            description:
                'GitHub Pages and Userscript to Redirect YouTube to an Embed.',
            links: {
                Userscript:
                    'https://github.com/smashedr/youtube-embed/raw/master/src/youtube-redirect.user.js',
                Pages: 'https://smashedr.github.io/youtube-embed/',
            },
            badges: {},
            fa: 'python',
        },
    ],
}
