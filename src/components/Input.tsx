import { InputHTMLAttributes } from 'react';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function TextInput({ className, ...props }: TextInputProps) {
  const defaultClassName =
    'bg-transparent border-b-2 border-neutral-400 focus:outline-none text-white text-center p-2 hover:border-white focus:border-white duration-300 placeholder:text-neutral-400 placeholder:text-sm';
  const finalClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return <input className={finalClassName} type="text" {...props} />;
}
