import { Cancel, InfoEmpty, WarningTriangle } from "iconoir-react";

const calloutVariants = {
  note: {
    icon: InfoEmpty,
    title: "Note",
    styles: "bg-teal-100 text-teal-950 dark:bg-teal-950 dark:text-teal-50",
  },
  danger: {
    icon: Cancel,
    title: "Danger",
    styles: "bg-red-100 text-red-950 dark:bg-red-950 dark:text-red-50",
  },
  warning: {
    icon: WarningTriangle,
    title: "Warning",
    styles:
      "bg-yellow-100 text-yellow-950 dark:bg-yellow-950 dark:text-yellow-50",
  },
};

type CalloutProps = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof calloutVariants;
};

const Callout = ({ children, className, variant = "note" }: CalloutProps) => {
  const { icon: Icon, styles, title } = calloutVariants[variant];

  return (
    <div>
      <p className="flex gap-2 items-center pb-4">
        <Icon />
        <span className="font-medium">{title}</span>
      </p>
      <div className="text-current space-y-4">{children}</div>
    </div>
  );
};

export default Callout;
