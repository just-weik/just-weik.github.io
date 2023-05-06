<template>
  <div :class="['w-full h-screen', { 'sidebar-collapse': !show_sidebar }]">
    <nav class="flex flex-row justify-between items-center gap-2 h-12 p-2 ml-64 bg-white shadow shadow-slate-500 relative z-10">
      <!-- Bars Icon -->
      <ul class="flex flex-row gap-2">
        <li>
          <a class="relative" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </a>
        </li>
        <li>{{ today_date }}</li>
      </ul>
      <!-- ./Bars Icon -->

      <!-- Navbar Tools Icon -->
      <ul class="flex flex-row gap-2">
        <li v-for="nicon in navbar_tools_icon" :key="nicon.id">
          <a class="relative" href="#">
            <span v-html="nicon.icon"></span>
            <span class="text-xxs w-4 h-4 flex justify-center items-center absolute -top-2 -right-1 bg-sky-600 text-white rounded-full">{{ nicon.badge }}</span>
          </a>
        </li>
        <li>
          <a class="relative" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
          </a>
        </li>
      </ul>
      <!-- ./Navbar Tools Icon -->
    </nav>

    <!-- Sidebar Menu -->
    <Sidebar></Sidebar>
    <!-- ./Sidebar Menu -->

    <!-- Content Area -->
    <div class="ml-64 p-2 overflow-y-auto content bg-slate-200">
      <!-- Content goes here -->
      <slot></slot>
      <!-- ./Content goes here -->
    </div>
    <!-- ./Content Area -->

    <!-- Footer -->
    <footer class="h-12 p-2 bg-white justify-between items-center gap-2 flex flex-row ml-64">
      <div>
        <strong>Copyright &copy; {{ development_duration }} <a href="#">just-weik.github.io</a>.</strong> All rights reserved.
      </div>

      <div><strong>Version</strong> 1.0.0</div>
    </footer>
    <!-- ./Footer -->
  </div>
</template>

<style>
  div.content {
    max-height: calc(100vh - theme(spacing.24));
  }
</style>

<script>
  import Sidebar from '@/components/Sidebar.vue';

  export default {
    name: 'ApplicationLayout',
    
    components: {
      Sidebar,
    },

    data() {
      return {
        show_sidebar: true,
        navbar_tools_icon: [
          {
            id: 'notification',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>`,
            badge: 10,
          },
          {
            id: 'mail',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>`,
            badge: 5,
          },
        ],
      };
    },
    computed: {
      today_date(){
        return this.$moment().format('DD MMM YYYY');
      },
      development_duration(){
        let start_year = "2023";
        let end_year = this.$moment().format('YYYY');
        return start_year === end_year ? start_year : `${ start_year } &minus; ${ end_year }`;
      },
    },
  }
</script>