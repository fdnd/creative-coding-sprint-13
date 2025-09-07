import { writable } from 'svelte/store'

// Store to hold header button content
export const headerButtonContent = writable(null)

// Helper function to set header button content
export function setHeaderButtonContent(content) {
  headerButtonContent.set(content)
}

// Helper function to clear header button content
export function clearHeaderButtonContent() {
  headerButtonContent.set(null)
}
