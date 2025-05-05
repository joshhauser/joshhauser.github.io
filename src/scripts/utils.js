import { marked } from 'marked';

export const renderMarkdown = (md) => {
  return marked.parse(md);
};
