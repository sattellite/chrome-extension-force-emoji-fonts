const fontFaceStyle = document.createElement('style');
fontFaceStyle.appendChild(
  document.createTextNode(`
@font-face {
  font-family: "color-emoji";
  src: local("Apple Color Emoji"), local("Segoe UI Emoji"), local("Segoe UI Symbol"), local("Noto Color Emoji");
  unicode-range: U+a9, U+ae, U+203c, U+2049, U+2122, U+2139, U+2194-2199, U+21a9-21aa, U+231a-231b, U+2328, U+23cf, U+23e9-23f3, U+23f8-23fa, U+24c2, U+25aa-25ab, U+25b6, U+25c0, U+25fb-25fe, U+2600-2604, U+260e, U+2611, U+2614-2615, U+2618, U+261d, U+2620, U+2622-2623, U+2626, U+262a, U+262e-262f, U+2638-263a, U+2640, U+2642, U+2648-2653, U+265f, U+2660, U+2663, U+2665-2666, U+2668, U+267b, U+267e, U+267f, U+2692-2697, U+2699, U+269b-269c, U+26a0-26a1, U+26aa-26ab, U+26b0-26b1, U+26bd-26be, U+26c4-26c5, U+26c8, U+26ce-26cf, U+26d1, U+26d3-26d4, U+26e9-26ea, U+26f0-26f5, U+26f7-26fa, U+26fd, U+2702, U+2705, U+2708-270d, U+270f, U+2712, U+2714, U+2716, U+271d, U+2721, U+2728, U+2733-2734, U+2744, U+2747, U+274c, U+274e, U+2753-2755, U+2757, U+2763-2764, U+2795-2797, U+27a1, U+27b0, U+27bf, U+2934-2935, U+2b05-2b07, U+2b1b-2b1c, U+2b50, U+2b55, U+3030, U+303d, U+3297, U+3299, U+1f004, U+1f0cf, U+1f170-1f171, U+1f17e-1f17f, U+1f18e, U+1f191-1f19a, U+1f1e6-1f1ff, U+1f201-1f202, U+1f21a, U+1f22f, U+1f232-1f23a, U+1f250-1f251, U+1f300-1f321, U+1f324-1f393, U+1f396-1f397, U+1f399-1f39b, U+1f39e-1f3f0, U+1f3f3-1f3f5, U+1f3f7-1f4fd, U+1f4ff-1f53d, U+1f549-1f54e, U+1f550-1f567, U+1f56f-1f570, U+1f573-1f57a, U+1f587, U+1f58a-1f58d, U+1f590, U+1f595-1f596, U+1f5a4-1f5a5, U+1f5a8, U+1f5b1-1f5b2, U+1f5bc, U+1f5c2-1f5c4, U+1f5d1-1f5d3, U+1f5dc-1f5de, U+1f5e1, U+1f5e3, U+1f5e8, U+1f5ef, U+1f5f3, U+1f5fa-1f64f, U+1f680-1f6c5, U+1f6cb-1f6d2, U+1f6e0-1f6e5, U+1f6e9, U+1f6eb-1f6ec, U+1f6f0, U+1f6f3-1f6f9, U+1f910-1f93a, U+1f93c-1f93e, U+1f940-1f945, U+1f947-1f970, U+1f973-1f976, U+1f97a, U+1f97c-1f9a2, U+1f9b0-1f9b9, U+1f9c0-1f9c2, U+1f9d0-1f9ff, U+200d, U+fe0f, U+20e3, U+e0062-e0063, U+e0065, U+e0067, U+e006c, U+e006e, U+e0073-e0074, U+e0077, U+e007f;
}
`),
);
document.head.appendChild(fontFaceStyle);

document.body.style.fontFamily = [
  ...window
    .getComputedStyle(document.body)
    .getPropertyValue('font-family')
    .split(',')
    .map(f => f.trim()),
  'color-emoji',
].join(',');
