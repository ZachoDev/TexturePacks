import { cva } from 'class-variance-authority'

export { default as NavigationMenu } from './NavigationMenu.vue'
export { default as NavigationMenuList } from './NavigationMenuList.vue'
export { default as NavigationMenuItem } from './NavigationMenuItem.vue'
export { default as NavigationMenuTrigger } from './NavigationMenuTrigger.vue'
export { default as NavigationMenuContent } from './NavigationMenuContent.vue'
export { default as NavigationMenuLink } from './NavigationMenuLink.vue'

const styles = 'group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-slate-100 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 '

export const navigationMenuTriggerStyle = cva(
  styles,
)

export const navigationMenuTriggerStyleActive = cva(
  styles+'bg-slate-800 text-slate-100',
)
