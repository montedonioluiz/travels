import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputDto {
  label: string;
  form: {
    label: string;
    register: UseFormRegister<any>;
    options?: RegisterOptions;
    errors: FieldErrors;
  };
  type?: string;
  className?: string;
}
export default function Input({
  label,
  className,
  type = "text",
  form: { label: formLabel, register, options = {}, errors },
}: InputDto) {
  return (
    <div className={`columns-1 ${className}`}>
      <label className="w-full">{label}</label>
      <input
        className="w-full border-2 border-zinc-300 rounded hover:bg-zinc-400"
        type={type}
        {...register(formLabel, options)}
      />
      {errors[formLabel]?.type === "required" && (
        <p className="text-red-600 text-xs pt-1">Campo obrigatório.</p>
      )}
      {errors[formLabel]?.type === "minLength" && (
        <p className="text-red-600 text-xs pt-1">
          Pelo menos {options.minLength?.toString()} caractéres são
          obrigatórias.
        </p>
      )}
    </div>
  );
}
