const Google = (id) =>
    `https://img.shields.io/chrome-web-store/users/${id}?logo=google&logoColor=white&label=&labelColor=4285F4&color=4285F4`
const Mozilla = (id) =>
    `https://img.shields.io/amo/users/${id}?logo=mozilla&logoColor=white&label=&labelColor=E66000&color=E66000`

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
            Website: 'https://link-extractor.cssnr.com/',
            GitHub: 'https://github.com/cssnr/link-extractor',
        },
        fa: 'faJs',
        badges: {
            Google: 'ifefifghpkllfibejafbakmflidjcjfp',
            Mozilla: 'link-extractor',
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
            Website: 'https://open-links-in-new-tab.cssnr.com/',
            GitHub: 'https://github.com/cssnr/open-links-in-new-tab',
        },
        fa: 'faJs',
        badges: {
            Google: 'efahmjakjnnmleokcaomicgfhobabdkc',
            Mozilla: 'open-links-in-new-tab',
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
            Website: 'https://playdrift-extension.cssnr.com/',
            GitHub: 'https://github.com/cssnr/playdrift-extension',
        },
        fa: 'faJs',
        badges: {
            Google: 'anlkpnbhiiojmedlkchcdmigkdccnmcn',
            Mozilla: 'playdrift-extension',
        },
    },
    {
        name: 'Django Files Extension',
        url: 'https://django-files.github.io/extension/',
        icon: 'https://raw.githubusercontent.com/django-files/web-extension/master/src/media/logo128.png',
        description:
            'Web Extension for Django Files to view recent uploads, shorten URLs, and upload any Image, Video or Audio.',
        links: {
            Google: 'https://chromewebstore.google.com/detail/django-files/abpbiefojfkekhkjnpakpekkpeibnjej',
            Mozilla: 'https://addons.mozilla.org/addon/django-files',
            Website: 'https://django-files.github.io/extension/',
            GitHub: 'https://github.com/django-files/web-extension',
        },
        fa: 'faJs',
        badges: {
            Google: 'abpbiefojfkekhkjnpakpekkpeibnjej',
            Mozilla: 'django-files',
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
            Website: 'https://smwc.world/',
            GitHub: 'https://github.com/cssnr/smwc-web-extension',
        },
        fa: 'faJs',
        badges: {
            Google: 'foalfafgmnglcgpgkhhmcfhjgmdcjide',
            Mozilla: 'smwc-web-extension',
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
            Website: 'https://asn-plus.cssnr.com/',
            GitHub: 'https://github.com/cssnr/asn-plus',
        },
        fa: 'faJs',
        badges: {
            Google: 'phcbcnpmcbkcnijkpfohkdmcofcofibh',
            Mozilla: 'asn-plus',
        },
    },
    {
        name: 'HLS Video Downloader',
        url: 'https://github.com/cssnr/hls-video-downloader',
        icon: 'https://raw.githubusercontent.com/cssnr/hls-video-downloader/master/src/images/logo128.png',
        description:
            'Experimental Web Extension for Downloading HLS Videos using Native FFmpeg.',
        links: {
            Google: 'https://chromewebstore.google.com/detail/text-formatter/mpmiiaolodhanoalpjncddpmnkbjicbo',
            Mozilla: 'https://addons.mozilla.org/addon/hls-video-downloader',
            Client: 'https://github.com/cssnr/hls-downloader-client',
            GitHub: 'https://github.com/cssnr/hls-video-downloader',
        },
        fa: 'faJs',
        badges: {
            Google: 'mpmiiaolodhanoalpjncddpmnkbjicbo',
            Mozilla: 'hls-video-downloader',
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
        fa: 'faJs',
        badges: {
            Google: 'medimbembaeldnglneiipkenpagjfcdj',
        },
    },
    {
        name: 'Aviation Tools',
        url: 'https://github.com/cssnr/aviation-tools',
        icon: 'https://raw.githubusercontent.com/cssnr/aviation-tools/master/src/images/logo128.png',
        description:
            'Aviation Tools Web Extension. Currently a Work in Progress.',
        links: {
            Google: 'https://chromewebstore.google.com/detail/aviation-tools/cjjhackeogffajjndfhemgniokonimin',
            Mozilla: 'https://github.com/cssnr/aviation-tools/releases/latest',
            GitHub: 'https://github.com/cssnr/aviation-tools',
        },
        fa: 'faJs',
        badges: {
            Google: 'cjjhackeogffajjndfhemgniokonimin',
        },
    },
    {
        name: 'Simple Extension',
        url: 'https://github.com/smashedr/simple-extension',
        icon: 'https://raw.githubusercontent.com/smashedr/simple-extension/master/src/images/logo128.png',
        description:
            'Example Web Extension for copying and creating new web extensions based on Manifest V3.',
        links: {
            GitHub: 'https://github.com/smashedr/simple-extension',
        },
        fa: 'faJs',
    },
    {
        name: 'Web Enhancer',
        url: 'https://github.com/smashedr/web-enhancer',
        icon: 'https://raw.githubusercontent.com/smashedr/web-enhancer/master/src/images/logo128.png',
        description:
            'Upcoming Web Extension with Various Browser Enhancements.',
        links: {
            GitHub: 'https://github.com/smashedr/web-enhancer',
        },
        fa: 'faJs',
    },
    {
        name: 'Site Tools',
        url: 'https://github.com/smashedr/site-tools',
        icon: 'https://raw.githubusercontent.com/smashedr/site-tools/master/src/images/logo128.png',
        description: 'Upcoming Web Extension with Various Site Modifications.',
        links: {
            GitHub: 'https://github.com/smashedr/site-tools',
        },
        fa: 'faJs',
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
            Website: 'https://smwc.world/',
            GitHub: 'https://github.com/django-files/django-files',
        },
        fa: 'faPython',
    },
    {
        name: 'SMWC ROM Archive',
        url: 'https://smwc.world/',
        icon: 'https://smwc.world/static/images/logo.png',
        description:
            'SMWCentral ROM Archive to archive, download, send notifications, plus patch and play SMW ROMs online.',
        links: {
            Website: 'https://smwc.world/',
            GitHub: 'https://github.com/cssnr/smwc-web',
        },
        fa: 'faPython',
    },
    {
        name: 'SlashGIF',
        url: 'https://slashgif.com/',
        icon: 'https://slashgif.com/static/images/slashgif.png',
        description:
            'Slack App to search for a random GIF and preview it, before posting publicly.',
        links: {
            Website: 'https://slashgif.com/',
        },
        fa: 'faPython',
    },
]

const githubActions = [
    {
        name: 'VirusTotal Scan',
        url: 'https://github.com/marketplace/actions/virustotal-action',
        description:
            'Scan Release Artifacts with VirusTotal and Update Release Notes.',
        links: {
            Actions: 'https://github.com/marketplace/actions/virustotal-action',
            GitHub: 'https://github.com/cssnr/virustotal-action',
        },
        fa: 'faJs',
    },
    {
        name: 'Update Version Tags',
        url: 'https://github.com/marketplace/actions/update-version-tags-action',
        description:
            'Update Version Tags on Push or Release for Semantic Versions.',
        links: {
            Actions:
                'https://github.com/marketplace/actions/update-version-tags-action',
            GitHub: 'https://github.com/cssnr/update-version-tags-action',
        },
        fa: 'faJs',
    },
    {
        name: 'Update JSON Value',
        url: 'https://github.com/marketplace/actions/update-json-value-action',
        description: 'Update JSON file Value(s) for Publishing.',
        links: {
            Actions:
                'https://github.com/marketplace/actions/update-json-value-action',
            GitHub: 'https://github.com/cssnr/update-json-value-action',
        },
        fa: 'faJs',
    },
    {
        name: 'Parse Issue Form',
        url: 'https://github.com/cssnr/parse-issue-form-action',
        description: 'Parse Issue Forms Into Individual Outputs.',
        links: {
            GitHub: 'https://github.com/cssnr/parse-issue-form-action',
        },
        fa: 'faJs',
    },
    {
        name: 'Stack Deploy',
        url: 'https://github.com/cssnr/stack-deploy-action',
        description:
            'Deploy Docker Stack to Remote Host using SSH Authentication.',
        links: {
            GitHub: 'https://github.com/cssnr/stack-deploy-action',
        },
        fa: 'faShell',
    },
    {
        name: 'Mozilla Addon Update',
        url: 'https://github.com/marketplace/actions/mozilla-addon-update-action',
        description:
            'Update the Mozilla Firefox Update JSON File after a Release.',
        links: {
            Actions:
                'https://github.com/marketplace/actions/mozilla-addon-update-action',
            GitHub: 'https://github.com/cssnr/mozilla-addon-update-action',
        },
        fa: 'faPython',
    },
    {
        name: 'Push Artifacts',
        url: 'https://github.com/cssnr/push-artifacts-action',
        description: 'Pushes Build Artifacts to a Remote Host using rsync.',
        links: {
            GitHub: 'https://github.com/cssnr/push-artifacts-action',
        },
        fa: 'faShell',
    },
    {
        name: 'Cloudflare Purge Cache',
        url: 'https://github.com/cssnr/cf-purge-cache-action',
        description: 'Easily Purge Cloudflare Cache.',
        links: {
            GitHub: 'https://github.com/cssnr/cf-purge-cache-action',
        },
        fa: 'faPython',
    },
]
const otherSoftware = [
    {
        name: "Carl's Cogs",
        url: 'https://github.com/smashedr/carl-cogs',
        description:
            'Red Discord Bot Cogs. Commands and Packages for the Red Discord Bot.',
        links: {
            'Red Discord Bot': 'https://github.com/Cog-Creators/Red-DiscordBot',
            GitHub: 'https://github.com/cssnr/vultr-python',
        },
        fa: 'faPython',
    },
    {
        name: 'Vultr Python',
        url: 'https://github.com/cssnr/vultr-python',
        description: 'Vultr Cloud Hosting Python 3 Library.',
        links: {
            Vultr: 'https://www.vultr.com/?ref=6905748',
            GitHub: 'https://github.com/cssnr/vultr-python',
        },
        fa: 'faPython',
    },
    {
        name: 'Zipline CLI',
        url: 'https://github.com/cssnr/zipline-cli',
        description: 'Command Line Interface for Zipline and Django Files.',
        links: {
            Zipline: 'https://github.com/diced/zipline',
            'Django Files': 'https://github.com/django-files/django-files',
            GitHub: 'https://github.com/cssnr/zipline-cli',
        },
        fa: 'faPython',
    },
]
