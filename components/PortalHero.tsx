import { bebasNeue } from "@/app/font";
interface IPortalHeroProps {
  title: string;
  description: string;
}

export default function PortalHero({ title, description }: IPortalHeroProps) {
  return (
    <div>
      <h1
        className={`${bebasNeue.className} font-bold text-2xl sm:text-4xl text-center mb-2`}
      >
        {title}
      </h1>
      <p className="font-extralight text-lg sm:text-xl text-center text-gray-500">
        {description}
      </p>
    </div>
  );
}
