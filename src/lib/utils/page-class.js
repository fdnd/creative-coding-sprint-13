/**
 * Generate page-specific classes for the HTML element
 * @param {string} route - The current route path
 * @returns {string} - Space-separated class names
 */
export function getPageClass(route) {
  if (!route) return 'page-home'
  
  // Remove leading slash and split by path segments
  const segments = route.replace(/^\//, '').split('/').filter(Boolean)
  
  if (segments.length === 0) {
    return 'page-home'
  }
  // Create base class from first segment
  const baseClass = `page-${segments[0]}`
  // Add specific classes for known routes
  if (segments[0] === '[memberid]') {
    return 'page-member'
  }
  
  // Add nested class if there are multiple segments
  if (segments.length > 1) {
    return `${baseClass} page-${segments.join('-')}`
  }
  
  return baseClass
}
