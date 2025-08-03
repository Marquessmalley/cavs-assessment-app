import Image from "next/image";
import Widget from "../ui/Widget";

export default function PlayerHeader({ playerBioInfo, playerImage }: any) {
  const { fn, ln, tc, tn, pos, num, ht, wt, dob, y } = playerBioInfo.data.pl;

  const personalInfo = [
    {
      value: ht,
      description: "Height",
    },
    {
      value: wt,
      description: "Weight",
    },
    {
      value: dob,
      description: "Date of Birth",
    },
    {
      value: y,
      description: "Years",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-x-44 bg-slate-100 py-10 flex-wrap">
      {/* LEFT */}
      <div className="border border-slate-300 p-2 rounded-2xl">
        <Image src={playerImage} alt="player-image" width={250} height={250} />
      </div>

      {/* RIGHT */}
      <div className="flex flex-col">
        <p className="font-bold text-6xl mb-4">
          {fn} {ln}
        </p>
        <p className="font-bold text-2xl text-red-900 mb-4">
          {tc} {tn} - #{num} - {pos}
        </p>

        {/* WDIGETS */}
        <div className="flex">
          {personalInfo.map((item) => (
            <div key={item.value}>
              <Widget value={item.value} description={item.description} />
            </div>
          ))}
        </div>

        {/* DRAFT INFO */}
      </div>
    </div>
  );
}
