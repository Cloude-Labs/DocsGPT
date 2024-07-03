import React, { useEffect, useRef } from 'react';

type Props = {
  value: string | string[] | number;
  isAutoFocused: boolean;
  id?: string;
  maxLength?: number;
  name?: string;
  placeholder?: string;
  className?: string;
  children?: React.ReactElement;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({
  value,
  isAutoFocused,
  id,
  maxLength,
  name,
  placeholder,
  className,
  children,
  onChange,
  onPaste,
  onKeyDown,
}: Props) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const autoResizeTextArea = () => {
      if (textAreaRef.current) {
        textAreaRef.current.style.height = 'auto';

        const maxHeight = 96;
        const currentContentHeight = textAreaRef.current.scrollHeight;

        const newHeight = Math.min(maxHeight, currentContentHeight);

        textAreaRef.current.style.height = `${newHeight}px`;
      }
    };

    autoResizeTextArea();
  }, [value]);

  return (
    <textarea
      ref={textAreaRef}
      className={`} w-full resize-none self-stretch overflow-y-auto overflow-x-hidden whitespace-pre-wrap rounded-full bg-white px-9 pt-5 pb-[22px] text-base leading-tight opacity-100 focus:outline-none dark:bg-raisin-black
      dark:text-bright-gray ${className}`}
      id={id}
      rows={1}
      dir="auto"
      value={value}
      name={name}
      maxLength={maxLength}
      placeholder={placeholder}
      autoFocus={isAutoFocused}
      onChange={onChange}
      onPaste={onPaste}
      onKeyDown={onKeyDown}
    >
      {children}
    </textarea>
  );
};

export default TextArea;
