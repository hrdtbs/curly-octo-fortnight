const ProseLayout = ({
  children,
  className,
  ...restProps
}: React.ComponentProps<"div">) => {
  return <div {...restProps}>{children}</div>;
};

export default ProseLayout;
