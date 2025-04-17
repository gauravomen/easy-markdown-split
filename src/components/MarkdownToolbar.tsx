
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Code, 
  Link, 
  Image, 
  Heading1, 
  Heading2, 
  Quote 
} from 'lucide-react';

interface MarkdownToolbarProps {
  onFormatClick: (format: string) => void;
}

const MarkdownToolbar = ({ onFormatClick }: MarkdownToolbarProps) => {
  return (
    <div className="flex flex-wrap items-center gap-1 p-2 bg-card border-b">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => onFormatClick('bold')}
        title="Bold"
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => onFormatClick('italic')}
        title="Italic"
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Separator orientation="vertical" className="mx-1 h-6" />
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => onFormatClick('h1')}
        title="Heading 1"
      >
        <Heading1 className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => onFormatClick('h2')}
        title="Heading 2"
      >
        <Heading2 className="h-4 w-4" />
      </Button>
      <Separator orientation="vertical" className="mx-1 h-6" />
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => onFormatClick('ul')}
        title="Unordered List"
      >
        <List className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => onFormatClick('ol')}
        title="Ordered List"
      >
        <ListOrdered className="h-4 w-4" />
      </Button>
      <Separator orientation="vertical" className="mx-1 h-6" />
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => onFormatClick('code')}
        title="Code Block"
      >
        <Code className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => onFormatClick('quote')}
        title="Quote"
      >
        <Quote className="h-4 w-4" />
      </Button>
      <Separator orientation="vertical" className="mx-1 h-6" />
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => onFormatClick('link')}
        title="Link"
      >
        <Link className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => onFormatClick('image')}
        title="Image"
      >
        <Image className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default MarkdownToolbar;
