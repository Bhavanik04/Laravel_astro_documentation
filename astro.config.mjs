import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import starlightDocSearch from '@astrojs/starlight-docsearch';
// import { markdown } from '@astrojs/markdown-remark';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:3000",
  integrations: [starlight({
    title: 'Saras',
    // social: {
    //   github: 'https://github.com/withastro/starlight'
    // },
    plugins: [starlightDocSearch({
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME'
    })],
  
    sidebar: [{
      label: 'Laravel & Package composition',
      link: '/package/package/'
    }, {
      label: 'API Security',
      items: [{
        label: 'API Security',
        link: '/apisecurity/token/'
      }]
    }, {
      label: 'API Logging',
      autogenerate: {
        directory: 'apilogging'
      }
    }, {
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
    }]
  }), tailwind(), mdx(), sitemap()
  // markdown(),
  ],
  output: "server",
  adapter: vercel()
});
