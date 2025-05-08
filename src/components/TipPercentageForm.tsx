import type { Dispatch, SetStateAction } from "react";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];
type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip:number
};
export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina: </h3>
      <form>
        {tipOptions.map((option) => (
          <div key={option.id} className="flex gap-2">
            <label htmlFor="">{option.label}</label>
            <input id="{tip.id}" type="radio" name="tip" value={option.value} onChange={e => setTip(+e.target.value)} checked = {option.value === tip}/>
          </div>
        ))}
      </form>
    </div>
  );
}
