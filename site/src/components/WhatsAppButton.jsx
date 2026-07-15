import { links, icons } from '../data'
import Icon from './Icon'

export default function WhatsAppButton() {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-fab"
    >
      <Icon paths={icons.whatsapp} />
    </a>
  )
}
