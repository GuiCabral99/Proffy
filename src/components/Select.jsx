export default function Select({
  labelContent,
  optionContent,
  options,
  name,
  ...rest
}) {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={name}
        className="text-sm text-color-text-complement font-light mt-4"
      >
        {labelContent}
      </label>
      <select
        className="rounded-md outline-none h-14 w-full mt-1.5 bg-color-input-background border border-color-line-in-white py-0 px-3 text-base text-color-text-title font-archivo"
        name={name}
        id={name}
      >
        <option
          disabled
          selected
          hidden
          {...rest}
          className="text-color-text-title"
        >
          Selecione uma opção
        </option>
        {options.map((option) => {
          return (
            <option
              className="text-color-text-title py-4"
              key={option.value}
              value={option.value}
            >
              {option.content}
            </option>
          );
        })}
      </select>
    </div>
  );
}
