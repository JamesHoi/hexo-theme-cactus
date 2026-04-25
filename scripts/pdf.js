const { escapeHTML } = require('hexo-util');

hexo.extend.tag.register('pdf', function(args) {
  const source = (args[0] || '').trim();
  const height = (args[1] || '900px').trim();
  const title = (args.slice(2).join(' ') || 'PDF').trim();

  if (!source) {
    return '<div class="pdf-embed pdf-embed-error">Missing PDF source.</div>';
  }

  const escapedSource = escapeHTML(source);
  const escapedHeight = escapeHTML(height);
  const escapedTitle = escapeHTML(title);

  return [
    '<div class="pdf-embed">',
    `  <iframe class="pdf-embed-frame" src="${escapedSource}" title="${escapedTitle}" style="height:${escapedHeight};" loading="lazy"></iframe>`,
    '</div>'
  ].join('\n');
}, { ends: false });
