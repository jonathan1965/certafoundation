import React, {useState} from "react";
interface ExpandableTextProps {
  text: string;
  maxLength?: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  maxLength = 100,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div>
      <p>{isExpanded ? text : `${text.slice(0, maxLength)}...`}</p>
      {text.length > maxLength && (
        <button onClick={handleToggle}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;