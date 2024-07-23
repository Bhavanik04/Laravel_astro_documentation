---
title: Should not use  env() Outside Config Files
---
## This code in Blade is considered a bad practice:

:::danger

<p class="text-[13px] bg-[#EDEEF3] px-2 py-1 w-[52%]">< title> {{ env('APP_NAME', 'My project') }} < /title> </p>


<!-- :::note
Starlight is a documentation website toolkit built with [Astro](https://astro.build/). You can get started with this command:

```sh
npm create astro@latest -- --template starlight
``` -->

:::

## Instead, you should do this:

<title>{{ config('app.name') }}</title>



Then, define the config file value using the same <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">env()</span> and the "My project" fallback value on the config level.

## config/app.php:

:::note
<p class="text-[13px] bg-[#EDEEF3] px-2 py-1 w-[52%]">return [
    'name' => env('APP_NAME', 'My project'),
];</p>


