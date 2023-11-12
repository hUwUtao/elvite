import { edenTreaty } from '@elysiajs/eden'
import type { App } from './src'

export function mktreaty(url: string) {
    return edenTreaty<App>(url, {})
}