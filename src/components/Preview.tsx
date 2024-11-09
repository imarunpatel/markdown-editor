import React from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import gfm from "remark-gfm";
import "../assets/css/markdown-style.css";

interface Props {
  markdown: string;
}
const Preview = React.memo(({ markdown }: Props) => {
  return (
    <div
      className="flex-1 border min-h-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-900 p-3 full w-full bg-white overflow-auto"
      style={{ maxHeight: "calc(100vh - 94px" }}
    >
      <Markdown
        className={`reactMarkDown prose prose-md max-w-full prose-gray dark:prose-invert`}
        children={markdown}
        remarkPlugins={[gfm]}
        components={{
          code(props: any) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={vscDarkPlus}
              />
            ) : (
              <code
                {...rest}
                className={`${
                  className || ""
                } dark:bg-gray-800 bg-gray-200 p-1 rounded before:content-[''] after:content-['']`}
              >
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
});

export default Preview;
