import Image from "next/image";
import Widget from "../ui/Widget";

export default function PlayerHeader({ playerBioInfo, playerImage }: any) {
  const { fn, ln, tc, tn, pos, num, ht, wt, dob, y, dy, hcc } =
    playerBioInfo.data.pl;

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
    <div className="flex justify-center  items-center gap-x-44 bg-slate-100 py-10 flex-wrap">
      {/* LEFT */}
      <div className=" border-slate-300 p-2 rounded-2xl ">
        <Image src={playerImage} alt="player-image" width={250} height={250} />
      </div>

      {/* RIGHT */}
      <div className="flex flex-col">
        <p className="font-bold text-6xl mb-4 text-center lg:text-start">
          {fn} {ln}
        </p>
        <p className="font-bold text-3xl text-red-900 mb-6 text-center lg:text-start">
          {tc} {tn} - #{num} - {pos}
        </p>

        {/* BIO WDIGETS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6">
          {personalInfo.map((item) => (
            <div key={item.value}>
              <Widget value={item.value} description={item.description} />
            </div>
          ))}
        </div>

        {/* DRAFT INFO */}

        <div className=" border border-red-800 rounded-2xl  my-4 p-4 bg-gold opacity-85">
          <p className="font-bold text-3xl text-white">Draft Information</p>
          <p className="font-extralight text-2xl sm:text-xl text-white">
            Draft Year: {dy}
          </p>
          <p className="font-extralight text-2xl sm:text-xl text-white">
            College: {hcc}
          </p>
        </div>
      </div>
    </div>
  );
}
