type Props = {
  title: string;
  coins: number;
  comments: number;
  author: string;
  timestamp: string;
  index: number;
};

export function PostItem(props: Props) {
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-row">
        <h1 className="text-2xl font-bold space-x-2">
          <span>{props.index}</span>
          <span>{props.title}</span>
        </h1>
        <div className="flex flex-row ml-4">
          <span className="text-sm text-gray-400">
            {`${props.coins} tabcoins • ${props.comments} comments •`}&nbsp;
            <a href="#">{props.author}</a>&nbsp;{`• ${props.timestamp}`}
          </span>
        </div>
      </div>
    </div>
  );
}
