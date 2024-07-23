export const customSidebar = [
    {
        label: 'Laravel & Package composition',
        link: '/package/package/'
    },
    {
        label: 'API Security',
        items: [
            {
                label: 'API Security',
                link: '/apisecurity/token/'
            }
        ]
    },
    {
        label: 'API Logging',
        autogenerate: {
            directory: 'apilogging'
        }
    },
    {
               label: 'API Documentation',
               autogenerate: {
                 directory: 'apidoc/apidoc'
               },
               autogenerate: {
                 directory: 'apidoc/requestobj'
               },
               autogenerate: {
                 directory: 'apidoc'
               },
               autogenerate: {
                 directory: 'apidoc'
               }
             }, 
];

export const learningAstroSidebar = [
    {
        label: 'Start Here',
        items: [
            {
                label: 'Getting Started',
                link: '/laravel/api/start/started/'
            },
            {
                label: 'Manual Setup',
                link: '/laravel/api/start/install/'
            },
            {
                label: 'Deploy Your Site',
                link: '/laravel/api/start/deploy/'
            }
        ]
    },
    {
        label: 'Core Concept',
        items: [
            {
                label: 'Why Astro',
                link: '/laravel/api/coreconcept/astro/'
            }
        ]
    },
    {
        label: 'Guides',
        items: [
            {
                label: 'Pages',
                link: '/laravel/api/guides/example/'
            },
            {
                label: 'Authoring Content in Markdown',
                link: '/laravel/api/guides/markdown/'
            },
            {
                label: 'Components',
                link: '/laravel/api/guides/component/'
            },
            {
                label: 'CSS & Styling',
                link: '/laravel/api/guides/styling/'
            },
            {
                label: 'Customizing Starlight',
                link: '/laravel/api/guides/customizing/'
            },
            {
                label: 'Internationalization (i18n)',
                link: '/laravel/api/guides/internationalization/'
            },
            {
                label: 'Overriding Components',
                link: '/laravel/api/guides/overridingcomponents/'
            },
            {
                label: 'Project Structure',
                link: '/laravel/api/guides/projectstructure/'
            },
            {
                label: 'Sidebar Navigation',
                link: '/laravel/api/guides/sidebarnavigation/'
            },
            {
                label: 'Site Search',
                link: '/laravel/api/guides/sitesearch/'
            }
        ]
    }
];

export function getSidebar(currentUrl) {
    if (currentUrl.startsWith('/package/package/')) {
        return customSidebar;
    } else if (currentUrl.startsWith('/laravel/api/start/started/')) {
        return learningAstroSidebar;
    } else {
        // Default sidebar or additional logic as needed
        return customSidebar;
    }
}