export default function Input({ name, labelContent, ...rest }) {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={name}
        className="text-sm text-color-text-complement font-light mt-4"
      >
        {labelContent}
      </label>
      <input
        {...rest}
        className="outline-none rounded-md h-14 w-full mt-1.5 bg-color-input-background border border-color-line-in-white py-0 px-3 text-base text-color-text-title font-archivo"
      />
    </div>
  );
}
