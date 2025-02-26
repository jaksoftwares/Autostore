interface InputFieldProps {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
  }
  
  const InputField: React.FC<InputFieldProps> = ({
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
    error,
  }) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`p-2 border rounded-lg focus:ring focus:ring-blue-300 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  };
  
  export default InputField;
  