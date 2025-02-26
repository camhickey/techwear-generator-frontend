import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const defaultClassName =
    variant === 'primary'
      ? 'text-sm bg-black text-white border-white border-solid border-2 p-2 hover:text-orange-500 hover:border-orange-500 duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-white disabled:hover:border-white'
      : 'text-sm inline-flex gap-2 items-center text-white p-2 hover:text-orange-500 duration-300 disabled:cursor-not-allowed disabled:text-neutral-400';

  const finalClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}
