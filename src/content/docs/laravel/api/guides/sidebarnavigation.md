---
title : Sidebar Navigation
---

## Sidebar Navigation
An effective sidebar is crucial for organizing and navigating documentation effectively. Starlight offers comprehensive options to customize your sidebar's layout and content.

Default Sidebar

By default, Starlight generates a sidebar based on your documentation's filesystem structure. It uses each file’s title property as the sidebar entry.

For instance, consider the following file structure:

       
        src/
        └── content/
            └── docs/
                    ├── 01-getting-started.md
                    ├── 02-advanced.md
                    └── index.mdx

            

Learn more about autogenerated sidebars in the <a href="https://starlight.astro.build/guides/sidebar/#autogenerated-groups" class="underline">autogenerated groups section.</a>


## Adding Links and Link Groups to Sidebar

To customize your sidebar in Astro Starlight, you can configure sidebar links and groups using the starlight.sidebar property in your astro.config.mjs file. This allows you to create a structured and navigable sidebar layout.

Links

You can add individual links to internal or external pages using an object with label and link properties. Here’s how you can define a link in your astro.config.mjs:
      
       /* astro.config.mjs*/

        export default {
        starlight: {
            sidebar: [
            {
                label: 'Home',
                link: '/'
            },
            {
                label: 'Documentation',
                link: '/docs'
            },
            {
                label: 'External Link',
                link: 'https://example.com'
            }
            ]
        }
        };

## Grouping Links in the Sidebar

To add more structure to your sidebar, you can group related links under a collapsible heading. Groups can include both individual links and sub-groups.

You can create a group using an object with label and items properties. The label serves as the heading for the group, while the items array contains the links or sub-groups.

Here's an example of how to define a group in your astro.config.mjs file:

    /* astro.config.mjs */

    export default {
    starlight: {
        sidebar: [
        {
            label: 'Guides',
            items: [
            { label: 'Getting Started', link: '/docs/getting-started'},
            { label: 'Advanced Topics',  link: '/docs/advanced-topics'}
            ]
        },
        { label: 'API Reference',
            items: [
            { label: 'Introduction', link: '/api/introduction' },
            { label: 'Endpoints',
                items: [
                { label: 'Authentication', link: '/api/authentication' },
                { label: 'Data Retrieval', link: '/api/data-retrieval'
                }  ]
            } ]
        }  ]
      }
    };

## Badges

Links, groups, and autogenerated groups can also include a badge property to display a badge next to their label.

    starlight({
    sidebar: [
        {
        label: 'Stars',
        items: [
            // A link with a "Supergiant" badge.
            {
            label: 'Persei',
            link: '/stars/persei/',
            badge: 'Supergiant',
            },
        ],
        },
        // An autogenerated group with an "Outdated" badge.
        {
        label: 'Moons',
        badge: 'Outdated',
        autogenerate: { directory: 'moons' },
        },
    ],
    });

 ## Badge Variants and Custom Styling

You can customize the appearance of badges in your sidebar links using the text, variant, and class properties.

- text: The content to display on the badge (e.g., "New").
- variant: Use a built-in badge style by setting this property to one of the following values: note, tip, danger, caution, or success. By default, the badge uses your site's accent color.
- class: Optionally, you can create a custom badge style by specifying a CSS class name.


Here's an example of how you can define these properties in the frontmatter of a Markdown file:

    starlight({
    sidebar: [
        {
        label: 'Stars',
        items: [
            // A link with a yellow "Stub" badge.
            {
            label: 'Sirius',
            link: '/stars/sirius/',
            badge: { text: 'Stub', variant: 'caution' },
            },
        ],
        },
    ],
    });

## Custom HTML Attributes for Links

You can add custom HTML attributes to your links by including an attrs property in the link object.

Here's an example where the attrs property is used to add a target="_blank" attribute, making the link open in a new tab, and a style attribute to italicize the link label:    

    /* astro.config.mjs */

    export default {
    starlight: {
        sidebar: [
        {
            label: 'External Link',
            link: 'https://example.com',
            attrs: {
            target: '_blank',
            style: 'font-style: italic;'
            }
        }
        ]
    }
    };
In this example:

- The target: '_blank' attribute ensures the link opens in a new tab.
- The style: 'font-style: italic;' attribute applies inline CSS to italicize the link label.

This method allows you to add specific HTML attributes to your links, enhancing their functionality and appearance to meet your needs.

## Internationalization

To support multiple languages, use the translations property on link and group entries. Specify the BCP-47 language tag (e.g., "en", "ar", "zh-CN") as the key and the translated label as the value. The label property will be used for the default locale and for any languages without a specific translation.

Here's an example:

    /* astro.config.mjs */

    export default {
    starlight: {
        sidebar: [
        {
            label: 'Home',
            link: '/',
            translations: {
            en: 'Home',
            ar: 'الصفحة الرئيسية',
            'zh-CN': '首页'
            }
        },
        {
            label: 'Guides',
            items: [
            {
                label: 'Getting Started',
                link: '/guides/getting-started',
                translations: {
                en: 'Getting Started',
                ar: 'البدء',
                'zh-CN': '入门'
                }
            }
            ]
        }
        ]
    }
    };

In this example:

- The translations property provides localized labels for the "Home" and "Getting Started" links.
- The label property serves as the default label if no translation is available for a specific language.

This setup ensures that your documentation can accommodate multiple languages, enhancing accessibility for a global audience.

## Collapsing groups

Groups of links can be collapsed by default by setting the collapsed property to true.

    starlight({
    sidebar: [
        {
        label: 'Constellations',
        // Collapse the group by default.
        collapsed: true,
        items: [
            { label: 'Andromeda', link: '/constellations/andromeda/' },
            { label: 'Orion', link: '/constellations/orion/' },
        ],
        },
    ],
    });

<a herf="https://starlight.astro.build/guides/sidebar/#autogenerated-groups" class ="underline">Autogenerated groups </a>respect the collapsed value of their parent group:    

    starlight({
    sidebar: [
        {
        label: 'Constellations',
        // Collapse the group and its autogenerated subgroups by default.
        collapsed: true,
        autogenerate: { directory: 'constellations' },
        },
    ],
    });