import { cn } from "../../lib/utils";
import { IconType } from "react-icons/lib";
import CountUp from 'react-countup';

interface InfoCardProps {
  title: string;
  icon: IconType;
  color: string;
  text: string;
  bgColor?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  color,
  text,
  bgColor,
  icon: Icon,
}) => {
  const bgcolor = `bg-${color}/20`
  return (
    <div className="rounded-xl flex flex-col  bg-white space-y-3 p-6 ">
      <div className="relative">
        <h1 className="text-gray-500 text-sm capitalize">{title}</h1>
        <p className={cn("absolute -bottom-3 font-bold", color)}>___</p>
      </div>
      <div className="flex items-center text-4xl pt-6 space-x-3">
        <div className={cn(` rounded-full p-1`, color, bgColor)}>
          <Icon />
        </div>
        <div className={cn("font-semibold", color)}>
          <CountUp end={60} duration={3}/>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
