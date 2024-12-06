interface InputDto {
  label: string;
  className?: string;
}
export default function Input({ label, className }: InputDto) {
  return (
    <div className={`columns-1 ${className}`}>
      <label className="w-full">{label}</label>
      <input className="w-full border-2 border-zinc-300 rounded" type="text" />
    </div>
  );
}
