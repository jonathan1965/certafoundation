import { LucideIcon } from 'lucide-react';

interface PracticeAreaCardProps {
  title: string;
  Icon: LucideIcon;
}

const PracticeAreaCard = ({ title, Icon }: PracticeAreaCardProps) => {
  return (
    <div className="w-[280px] h-[200px] bg-white rounded-lg border border-gray-100 flex flex-col items-center justify-center p-6 cursor-pointer group hover:bg-primary hover:border-primary transition-all duration-300">
      <div className="mb-6 p-4 rounded-full bg-burgundy/5 group-hover:bg-white/10 transition-colors">
        <Icon className="w-6 h-6 text-burgundy group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-sm font-medium text-gray-900 group-hover:text-white transition-colors text-center max-w-[200px]">
        {title}
      </h3>
    </div>
  );
};

export default PracticeAreaCard;
