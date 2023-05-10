import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';
import addClasses from 'rehype-add-classes';
import compress from "astro-compress";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://use.thuanowa.com/',
  integrations: [sitemap(), react(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), tailwind(), compress(), robotsTxt()],
  markdown: {
    rehypePlugins: [[addClasses, {
      h1: 'text-4xl font-bold',
      h2: 'text-2xl font-bold',
      h3: 'text-xl font-bold',
      h4: 'text-lg font-bold',
      h5: 'font-bold',
      h6: 'font-bold',
      img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
      p: 'mb-6',
      a: 'underline underline-offset-2 hover:text-green-300 decoration-green-500',
      ul: 'list-disc'
    }]]
  }
});
