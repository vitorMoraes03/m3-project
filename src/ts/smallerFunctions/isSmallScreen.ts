export function isSmallScreen(): boolean {
  const mediaQuery = window.matchMedia("(max-width: 600px)");
  if (mediaQuery.matches) {
    return true;
  }
  return false;
}
