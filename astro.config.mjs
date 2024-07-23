// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import starlightDocSearch from '@astrojs/starlight-docsearch';
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

// const laravelApiSidebar = [
//   {
//     label: 'Laravel & Package composition',
//     link: '/package/package/'
//   },
//   {
//     label: 'API Security',
//     items: [
//       {
//         label: 'API Security',
//         link: '/apisecurity/token/'
//       }
//     ]
//   },
//   {
//     label: 'API Logging',
//     autogenerate: {
//       directory: 'apilogging'
//     }
//   },
//   {
//       label: 'API Documentation',
//       autogenerate: {
//         directory: 'apidoc/apidoc'
//       },
//       autogenerate: {
//         directory: 'apidoc/requestobj'
//       },
//       autogenerate: {
//         directory: 'apidoc'
//       },
//       autogenerate: {
//         directory: 'apidoc'
//       }
//     }, 
// ];

// const learningAstroSidebar = [
//   {
//     label: 'Start Here',
//     items: [
//       {
//         label: 'Getting Started',
//         link: '/laravel/api/start/started/'
//       },
//       {
//         label: 'Manual Setup',
//         link: '/laravel/api/start/install/'
//       },
//       {
//         label: 'Deploy Your Site',
//         link: '/laravel/api/start/deploy/'
//       }
//     ]
//   },
//   {
//     label: 'Core Concept',
//     items: [
//       {
//         label: 'Why Astro',
//         link: '/laravel/api/coreconcept/astro/'
//       }
//     ]
//   },
//   {
//     label: 'Guides',
//     items: [
//       {
//         label: 'Pages',
//         link: '/laravel/api/guides/example/'
//       },
//       {
//         label: 'Authoring Content in Markdown',
//         link: '/laravel/api/guides/markdown/'
//       },
//       {
//         label: 'Components',
//         link: '/laravel/api/guides/component/'
//       },
//       {
//         label: 'CSS & Styling',
//         link: '/laravel/api/guides/styling/'
//       },
//       {
//         label: 'Customizing Starlight',
//         link: '/laravel/api/guides/customizing/'
//       },
//       {
//         label: 'Internationalization (i18n)',
//         link: '/laravel/api/guides/internationalization/'
//       },
//       {
//         label: 'Overriding Components',
//         link: '/laravel/api/guides/overridingcomponents/'
//       },
//       {
//         label: 'Project Structure',
//         link: '/laravel/api/guides/projectstructure/'
//       },
//       {
//         label: 'Sidebar Navigation',
//         link: '/laravel/api/guides/sidebarnavigation/'
//       },
//       {
//         label: 'Site Search',
//         link: '/laravel/api/guides/sitesearch/'
//       }
//     ]
//   }
// ];

export default defineConfig({
  site: "http://localhost:3000",
  integrations: [
    starlight({
      title: 'Saras',
      customCss: [
        // Relative path to your custom CSS file
        '/src/tailwind.css',
      ],
      sidebar: [
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
            {
                label: 'Coding Standards',
                autogenerate: {
                    directory: 'codingstandards/'
                  },
            
                
              },
              
      ]
    }),
    tailwind(),
    mdx(),
    sitemap(),
    react()
  ],
  output: "server",
  adapter: vercel()
});



// import { defineConfig } from 'astro/config';
// import starlight from '@astrojs/starlight';
// import tailwind from '@astrojs/tailwind';
// import { customSidebar ,learningAstroSidebar ,getSidebar} from './src/components/customesidebar';
// import mdx from "@astrojs/mdx";
// import react from "@astrojs/react";

// export default defineConfig({
//     site: "http://localhost:3000",
//     integrations: [
//         starlight({
//             title: 'Saras',
//             // sidebar: customSidebar ,
//             sidebar: getSidebar('/') 
//         }),
//         tailwind(),
//         mdx(),
//         react()
//     ],
// });

