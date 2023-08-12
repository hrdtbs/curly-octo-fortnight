import MarkdownCopyCodeButton from "./mdx-copy-code-btn";

const MarkdownPreCode = ({
  children,
  ...restProps
}: React.ComponentPropsWithoutRef<"pre">) => {
  if (!("data-language" in restProps))
    return <pre {...restProps}>{children}</pre>;

  return (
    <pre {...restProps}>
      <MarkdownCopyCodeButton />
      {children}
    </pre>
  );
};

export default MarkdownPreCode;
