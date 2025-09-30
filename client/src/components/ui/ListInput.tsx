export const ListInput = ({
  label,
  values,
  onChange,
}: {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
}) => {
  const handleChange = (index: number, value: string) => {
    const next = [...values];
    next[index] = value;
    onChange(next);
  };

  const handleAdd = () => onChange([...values, ""]);
  const handleRemove = (index: number) =>
    onChange(values.filter((_, i) => i !== index));

  return (
    <div className="md:col-span-2">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="space-y-2">
        {values.map((item, i) => (
          <div key={i} className="flex gap-2">
            <input
              className="flex-1 border rounded-lg px-3 py-2"
              value={item}
              onChange={(e) => handleChange(i, e.target.value)}
            />
            <button
              type="button"
              onClick={() => handleRemove(i)}
              className="px-2 text-red-600"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAdd}
          className="text-blue-600 text-sm"
        >
          + Add {label.slice(0, -1)}
        </button>
      </div>
    </div>
  );
};
