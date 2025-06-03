import "./inputField.style.css";

export function InputFieldDropdown({ options, value, onChange, className, label }) {
  const inputId = label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="card  w-80">
      <div className=" items-center text-center">
        {label && (
          <label htmlFor={inputId} className="block mb-2 text-3xl font-medium">
            {label}
          </label>
        )}
        <select
          id={inputId}
          value={value}
          onChange={onChange}
          className={`input ${className}`}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
