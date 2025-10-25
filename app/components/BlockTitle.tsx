
interface BlockTitleProps {
  blockNumber: string;
  title: string;
}

export default function BlockTitle({ blockNumber, title }: BlockTitleProps) {
  return (
    <h2 className="mb-16 flex items-start text-3xl font-bold text-gray-700">
      <span className="text-6xl">{blockNumber}</span>
      <span className="font-normal pt-1 pl-3">{title}</span>
    </h2>
  );
}
