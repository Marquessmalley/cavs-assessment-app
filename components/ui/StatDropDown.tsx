"use client";

export default function StatDropDown({ setMode }: any) {
  return (
    <select
      name="mode"
      className="w-40 p-2 rounded-md bg-slate-200 font-bold cursor-pointer"
      onChange={(e) => setMode(e.target.value)}
    >
      <option value="Total">Total</option>
      <option value="Per Game">Per Game</option>
      <option value="Per 36 Min">Per 36 Min</option>
    </select>
  );
}
