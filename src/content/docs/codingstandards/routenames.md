---
title: Must Use Route Names
---
## Don't do this:

:::danger
 <p class="text-[13px] bg-[#EDEEF3] px-2 py-1 w-[54%]">< a href="/posts/{{ $post->id }}">{{ $post->title }}< /a></p>
 :::

## Do this instead:

:::note
<p class="text-[13px] bg-[#EDEEF3] px-2 py-1 w-[63%]"> < a href="{{ route('posts.show', $post) }}">{{ $post->title }}< /a></p>

:::

## There are two reasons for this:

> 1. If you ever need to change the URLs (which happens more often than you think), you would need to change them only in the Routes file, and not everywhere in the project


> 2. Often route names follow the standard pattern of CRUD-like Resource Controllers, which makes it easier to read/understand by other future developers


