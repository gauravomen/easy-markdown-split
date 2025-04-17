
import React, { useRef } from 'react';
import { Textarea } from '@/components/ui/textarea';
import MarkdownToolbar from './MarkdownToolbar';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownEditor = ({ value, onChange }: MarkdownEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleFormat = (format: string) => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    let formattedText = '';
    let cursorOffset = 0;

    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        cursorOffset = 2;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        cursorOffset = 1;
        break;
      case 'h1':
        formattedText = `# ${selectedText}`;
        cursorOffset = 2;
        break;
      case 'h2':
        formattedText = `## ${selectedText}`;
        cursorOffset = 3;
        break;
      case 'ul':
        formattedText = `- ${selectedText}`;
        cursorOffset = 2;
        break;
      case 'ol':
        formattedText = `1. ${selectedText}`;
        cursorOffset = 3;
        break;
      case 'code':
        formattedText = `\`\`\`\n${selectedText}\n\`\`\``;
        cursorOffset = 4;
        break;
      case 'quote':
        formattedText = `> ${selectedText}`;
        cursorOffset = 2;
        break;
      case 'link':
        formattedText = `[${selectedText}](url)`;
        cursorOffset = 3;
        break;
      case 'image':
        formattedText = `![${selectedText}](url)`;
        cursorOffset = 4;
        break;
      default:
        return;
    }

    const newValue = value.substring(0, start) + formattedText + value.substring(end);
    onChange(newValue);

    // Set cursor position after formatting
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        if (selectedText.length > 0) {
          textareaRef.current.selectionStart = start + formattedText.length;
          textareaRef.current.selectionEnd = start + formattedText.length;
        } else {
          textareaRef.current.selectionStart = start + cursorOffset;
          textareaRef.current.selectionEnd = start + cursorOffset;
        }
      }
    }, 0);
  };

  return (
    <div className="flex flex-col h-full border rounded-md overflow-hidden bg-white">
      <MarkdownToolbar onFormatClick={handleFormat} />
      <Textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 p-4 resize-none rounded-none border-0 font-mono text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Write your Markdown here..."
      />
    </div>
  );
};

export default MarkdownEditor;
