import tags from 'lucide-static/lib/icons/tags'
import * as iconsJs from 'lucide-static/lib/index'

const icons = Object.keys(tags)
  .map(t => tags[t])
  .flat(1)

async function getIcon(name) {
  if (!(name in iconsJs)) {
    console.log(`Icon "${name}" not available`)
    return ''
  }

  return iconsJs[name]
}

async function getIconList() {
  return icons.map(icon => ({
    name: icon,
  }))
}

window.customIconsets = window.customIconsets || {}
window.customIconsets['luc'] = getIcon

window.customIcons = window.customIcons || {}
window.customIcons['luc'] = { getIcon, getIconList }
