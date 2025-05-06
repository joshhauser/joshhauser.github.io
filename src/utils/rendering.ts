import { marked } from 'marked';

export const renderMarkdown = (md: string) => {
  return marked.parse(md);
};
