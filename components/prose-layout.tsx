import { clsx } from "clsx";
import styles from "./prose-layout.module.css";
const ProseLayout = ({
  children,
  className,
  ...restProps
}: React.ComponentProps<"div">) => {
  return (
    <div {...restProps} className={clsx(styles.root, className)}>
      {children}
    </div>
  );
};

export default ProseLayout;
