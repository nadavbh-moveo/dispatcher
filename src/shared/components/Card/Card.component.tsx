

interface ICardProps {
customClass?: string;
  customStyles?: React.CSSProperties;
  children: React.ReactNode;

}

const Card = ({ customStyles, customClass, children }: ICardProps) => {
  return (
    <div className={`${customClass} card-wrapper`} style={customStyles}>
        {children}
    </div>
  );
};

export default Card;
