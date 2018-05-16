document.body.style.fontFamily = [
  ...window
    .getComputedStyle(document.body)
    .getPropertyValue('font-family')
    .split(',')
    .map(f => f.trim()),
  '"Noto Color Emoji"',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
].join(',');
