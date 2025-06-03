
import "./inputField.style.css";


export function InputField({ type, placeholder, value, onChange, className, label }) {
  const inputId = label?.toLowerCase().replace(/\s+/g, "-"); // z. B. "Kategorien" → "kategorien"

  return (
    <div className="card card-bg bg-neutral text-neutral-content w-80">
      <div className="card-body items-center text-center">
        {label && (
          <label htmlFor={inputId} className="block mb-2 text-sm font-medium">
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`input ${className}`}
        />
      </div>
    </div>
  );
}
