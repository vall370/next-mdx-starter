import React from 'react';

interface MDXContentProps {
  source: string;
}

export default function MDXContent({ source }: MDXContentProps) {
  // In a real app, you would use a library like next-mdx-remote to render MDX
  // This is a simplified implementation that converts MDX to basic HTML
  
  const htmlContent = convertMdxToHtml(source);
  
  return (
    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

function convertMdxToHtml(mdx: string): string {
  // This is a very simplified conversion
  // In a real app, use proper MDX parsing and rendering
  
  let html = mdx
    // Convert headers
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    // Convert paragraphs
    .replace(/^(?!<h|<ul|<li|\*)(.*$)/gm, '<p>$1</p>')
    // Convert list items
    .replace(/^\* (.*$)/gm, '<li>$1</li>');
  
  // Wrap list items in ul tags
  const listItemRegex = /<li>.*<\/li>/g;
  if (html.match(listItemRegex)) {
    html = html.replace(
      /((<li>.*<\/li>\n)+)/g, 
      '<ul>\n$1</ul>\n'
    );
  }
  
  return html;
} 