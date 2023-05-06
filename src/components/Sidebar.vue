<template>
  <aside class="w-64 fixed top-0 left-0 h-full bg-slate-700 text-white shadow shadow-slate-900">
    <ul class="flex flex-row items-center gap-2">
      <li class="w-full relative h-12">
        <a href="#" class="block h-full">
          <div class="flex w-full h-full items-center justify-center text-xl uppercase font-bold">Branding</div>
        </a>
      </li>
    </ul>
    <ul class="flex flex-col items-center gap-2">
      <li v-for="m in list_menu" :key="m.menu_id" class="w-full relative h-9">
        <a :href="m.menu_url" class="block h-full">
          <div class="flex w-full h-full items-center gap-2 flex-row px-2">
            <span v-html="m.menu_icon"></span>
            <span>{{ m.menu_text }}</span>
          </div>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'Sidebar',

    data() {
      return {
        list_menu: [
          {
            menu_id: 'home',
            menu_text: 'Home',
            menu_icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`,
            menu_url: '#',
            menu_header: false,
          },
          {
            menu_id: 'ui-element',
            menu_text: 'UI Element',
            menu_icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" /></svg>`,
            menu_url: '#',
            menu_header: true,
          },
        ],
      };
    },
  }
</script>