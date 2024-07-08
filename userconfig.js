let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Matão, São Paulo',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social",
        links: [
          
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#a9b665",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#e78a4e",
          },
          
          
          {
            name: "mastodon",
            url: "https://mastodon.ml/",
            icon: "brand-mastodon",
            icon_color: "#7C80F8",
          },
          {
            name: "mal",
            url: "https://myanimelist.net",
            icon: "list",
            icon_color: "#6B8BD6",
          },
          {
            name: "telegram",
            url: "https://web.telegram.org/a/",
            icon: "brand-telegram",
            icon_color: "#6CBFE8",
          },
          {
            name: "dtf",
            url: "https://dtf.ru/",
            icon: "square-letter-d",
            icon_color: "#D9F7FF",
          },

        ],
      },  {
        name: "Media",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
          {
            name: "kinopoisk",
            url: "https://hd.kinopoisk.ru",
            icon: "movie",
            icon_color: "#E78A4E",
          },
          {
            name: "spotify",
            url: "https://open.spotify.com/",
            icon: "brand-spotify",
            icon_color: "#64EA93",
          },
          {
            name: "yamusic",
            url: "https://music.yandex.ru/",
            icon: "music",
            icon_color: "#F9E080",
          },
          
        ],
      }],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "python",
              url: "https://docs.python.org/3/",
              icon: "brand-python",
              icon_color: "#5693C5",
            },
            {
              name: "flask",
              url: "https://flask.palletsprojects.com/en/3.0.x/",
              icon: "server",
              icon_color: "#65BDCB",
            },
            {
              name: "pyqt",
              url: "https://doc.qt.io/qtforpython-6/",
              icon: "app-window",
              icon_color: "#51E299",
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: "#ECECEC",
            },
            {
              name: "gemini",
              url: "https://gemini.google.com",
              icon: "sparkles",
              icon_color: "#629FDD",
            },
          ],
        },
      ],
    },
    {
      name: "study",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "inspiration",
          links: [
            {
              name: "pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
            {
              name: "artstation",
              url: "https://www.artstation.com/?sort_by=community",
              icon: "chart-area",
              icon_color: "#7daea3",
            },
            {
              name: "leonardo ai",
              url: "https://app.leonardo.ai/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "dribble",
              url: "https://dribbble.com/following",
              icon: "brand-dribbble-filled",
              icon_color: "#d3869b",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name: "uxpro",
              url: "https://uxpro.cc/",
              icon: "components",
              icon_color: "#a9b665",
            },
            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#ea6962",
            },
            {
              name: "adobe color",
              url: "https://color.adobe.com/es/create/color-wheel",
              icon: "brand-adobe",
              icon_color: "#7daea3",
            },
            {
              name: "terminalsexy",
              url: "https://terminal.sexy",
              icon: "prompt",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources 3d",
          links: [
            {
              name: "thingiverse",
              url: "https://www.thingiverse.com/",
              icon: "circle-letter-t",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "yamail",
              url: "https://mail.yandex.com/?uid=792958080#tabs/relevant",
              icon: "mail",
              icon_color: "#FFDC7C",
            },
            {
              name: "proton mail",
              url: "https://mail.proton.me/u/0/inbox",
              icon: "letter-p",
              icon_color: "#9A7CFF",
            },
            {
              name: "cock mail",
              url: "https://mail.cock.li/",
              icon: "mailbox",
              icon_color: "#0FB7FF",
            },

          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#7daea3",
            },
            {
              name: "fotos",
              url: "https://photos.google.com/u/1",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
          ],
        },
        
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
