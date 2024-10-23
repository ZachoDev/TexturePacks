<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  navigationMenuTriggerStyleActive,
} from '@/components/ui/navigation-menu'

// const components: { title: string, href: string, description: string }[] = [
//   {
//     title: 'Alert Dialog',
//     href: '/docs/primitives/alert-dialog',
//     description:
//       'A modal dialog that interrupts the user with important content and expects a response.',
//   },
//   {
//     title: 'Hover Card',
//     href: '/docs/primitives/hover-card',
//     description:
//       'For sighted users to preview content available behind a link.',
//   },
//   {
//     title: 'Progress',
//     href: '/docs/primitives/progress',
//     description:
//       'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
//   },
//   {
//     title: 'Scroll-area',
//     href: '/docs/primitives/scroll-area',
//     description: 'Visually or semantically separates content.',
//   },
//   {
//     title: 'Tabs',
//     href: '/docs/primitives/tabs',
//     description:
//       'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
//   },
//   {
//     title: 'Tooltip',
//     href: '/docs/primitives/tooltip',
//     description:
//       'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
//   },
// ]

const route = useRoute()

const navMenuItems = [
  {
    name: 'Home',
    link: 'index',
    type: 'item'
  },
  {
    name: 'Texture Packs',
    link: 'products',
    type: 'item'
  },
  {
    name: 'Logo',
    link: 'index',
    type: 'logo'
  },
  {
    name: 'About',
    link: 'persons',
    type: 'item'
  },
  {
    name: 'Faq',
    link: 'faq',
    type: 'item'
  },
]

</script>

<template>
  <NavigationMenu >
    <NavigationMenuList>

      <NavigationMenuItem v-for="item in navMenuItems" :key="item.name">
        <NuxtLink v-if="item.type === 'item'" :to="{name: item.link}" >
          <NavigationMenuLink :class="$route.name === item.link ? navigationMenuTriggerStyleActive() : navigationMenuTriggerStyle()">
            {{ item.name }}
          </NavigationMenuLink>
        </NuxtLink>
        <NavigationMenuLink v-else class="m-10">
          <NuxtLink :to="{name: item.link}" >
            ZACHO
          </NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
</template>

<style scoped>
  .navigationMenuActiveStyle {
    @apply
    text-slate-100
    bg-red-700
    font-bold
  }
</style>