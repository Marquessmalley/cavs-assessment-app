interface IWidgetProps {
  value: string;
  description: string;
}
export default function Widget({ value, description }: IWidgetProps) {
  return (
    <div className="mx-4 bg-white px-16 py-4 border rounded-2xl border-amber-500 flex flex-col justify-center items-center">
      <p className="font-bold text-xl whitespace-nowrap">{value}</p>
      <p className="whitespace-nowrap">{description}</p>
    </div>
  );
}
