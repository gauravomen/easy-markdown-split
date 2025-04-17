
import React, { useState } from 'react';
import MarkdownEditor from '@/components/MarkdownEditor';
import MarkdownPreview from '@/components/MarkdownPreview';
import SplitPane from '@/components/SplitPane';

const Index = () => {
  const [markdown, setMarkdown] = useState<string>(
`# Welcome to the Markdown Editor

This is a **live preview** markdown editor with syntax highlighting.

## Features

- Split pane view with resizable panels
- Live markdown preview as you type
- Syntax highlighting for code blocks
- Basic formatting with the toolbar
- GitHub Flavored Markdown support

### Code Example

\`\`\`javascript
function greeting() {
  console.log("Hello, world!");
}

greeting();
\`\`\`

### Lists

1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item 3

- Unordered list item
- Another item
- And another one

### Blockquote

> This is a blockquote.
> It can span multiple lines.

### Links and Images

[Visit GitHub](https://github.com)

![Placeholder Image](https://via.placeholder.com/300x200)

**Start editing to see your changes in real-time!**
`);

  return (
    <div className="flex flex-col min-h-screen bg-muted">
      <header className="bg-card border-b shadow-sm p-4">
        <h1 className="text-2xl font-bold text-center text-editor-vivid-purple">
          Markdown Editor
        </h1>
      </header>
      
      <main className="flex-1 container py-6 px-4">
        <div className="h-[calc(100vh-10rem)]">
          <SplitPane
            left={
              <MarkdownEditor
                value={markdown}
                onChange={setMarkdown}
              />
            }
            right={
              <MarkdownPreview content={markdown} />
            }
          />
        </div>
      </main>
      
      <footer className="bg-card border-t p-4 text-center text-sm text-muted-foreground">
        <p>Easy Markdown Editor with Live Preview</p>
      </footer>
    </div>
  );
};

export default Index;
