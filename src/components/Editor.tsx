import React from 'react'

interface Props {
    markdown: string;
    setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}
const Editor: React.FC<Props> = ({ markdown, setMarkdown }) => {
  const handleMarkdownChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setMarkdown(event.target.value);
  };
  return (
    <div className="flex-1 h-full">
      <textarea
        value={markdown}
        onChange={handleMarkdownChange}
        className="block h-full p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="Write your markdown here..."
      />
    </div>
  );
};

export default Editor