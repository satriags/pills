// components/ui/Input.tsx
interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
}

export default function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  required = false,
  disabled = false,
  error,
  helperText,
  className = '',
  size = 'md',
  bordered = true
}: InputProps) {
  const sizeClass = {
    xs: 'input-xs',
    sm: 'input-sm',
    md: '',
    lg: 'input-lg'
  }[size];

  return (
    <div className={`form-control w-full ${className}`}>
      {label && (
        <label className="label">
          <span className="label-text">
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </span>
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`input ${bordered ? 'input-bordered' : ''} ${sizeClass} ${error ? 'input-error' : ''} w-full`}
      />
      {(error || helperText) && (
        <label className="label">
          <span className={`label-text-alt ${error ? 'text-error' : 'text-base-content/70'}`}>
            {error || helperText}
          </span>
        </label>
      )}
    </div>
  );
}
