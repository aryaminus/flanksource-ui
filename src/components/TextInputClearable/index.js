import { SearchIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

export function TextInputClearable({
  className,
  defaultValue,
  onChange = () => {},
  onSubmit = () => {},
  inputClassName,
  inputOuterClassName,
  buttonIcon,
  hideButton,
  onClear,
  placeholder,
  hideClearButton = false,
  value,
  ...rest
}) {
  return (
    <div className={`flex ${className}`}>
      <div className={`relative flex-grow ${inputOuterClassName}`}>
        <input
          defaultValue={defaultValue}
          onChange={onChange}
          type="text"
          className={clsx(
            `h-full w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 block py-1 sm:text-sm border-gray-300 ${
              hideButton ? "rounded-md" : "rounded-l-md"
            } ${inputClassName}`,
            !hideClearButton && value && "pr-6"
          )}
          placeholder={placeholder}
          {...rest}
          value={value}
        />
        {!hideClearButton && value && (
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              className="p-1"
              type="button"
              onClick={() => {
                if (onClear) {
                  onClear();
                }
              }}
            >
              <IoCloseCircle
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
          </div>
        )}
      </div>
      {!hideButton && (
        <button
          onClick={() => onSubmit(value)}
          type="submit"
          className="py-2 px-3 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        >
          {buttonIcon || (
            <SearchIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
          )}
        </button>
      )}
    </div>
  );
}
