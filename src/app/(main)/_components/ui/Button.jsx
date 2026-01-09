import React from 'react';
import clsx from 'clsx';
import { LoaderCircle } from 'lucide-react';

const variantStyles = {
     secondary: ' bg-foreground/5   ',
     success: 'bg-[#06D001]   hover:bg-[#00db04c9] text-white',

     ghost: '    hover:bg-foreground/5',
     primary: ' bg-foreground text-background hover:bg-foreground/95',
     outline: '  border border-secondary/20   hover:bg-foreground/5',
     danger: 'bg-[#e7000b] text-white hover:bg-[#ea000bc9]',
};


const SizeStyles = {
     fit: ' px-4.5 py-[8px] text-[14px]  rounded-md  ',
};

const iconStyles = {
     fit: 'animate-spin size-[20px] ',
};


const Button = ({

     children,
     loading = false,
     disabled = false,
     variant = 'primary',
     w = 'fit-content',
     size = 'fit',
     className = '',
     ...props
}) => {
     const isDisabled = loading || disabled;

     return (
          <button
               style={{ width: w }}
               className={clsx(
                    ` font-inter font-[500] tracking-[0.02rem] flex justify-center items-center  focus:outline-offset-3 duration-150 cursor-pointer `,
                    variantStyles[variant],
                    SizeStyles[size],
                    isDisabled && ' cursor-not-allowed',
                    className
               )}
               disabled={isDisabled}
               {...props}
          >
               {loading ?
                    <LoaderCircle strokeWidth={1.9} className={iconStyles[size]} />

                    :
                    children
               }
          </button>
     );
};

export default Button;