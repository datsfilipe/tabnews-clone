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
    <div className="flex flex-col pb-2 px-4">
      <div className="flex flex-row">
        <h1 className="text-[1.05rem] space-x-2">
          <span>{props.index}.</span>
          <span>{props.title}</span>
        </h1>
      </div>
      <div className="flex flex-row ml-4">
        <span className="text-[0.78rem] text-gray-500">
          {`${props.coins} tabcoins · ${props.comments} comments ·`}&nbsp;
          <a href="#">{props.author}</a>
          {/* should be in the format: 2 hours ago, 6 days ago, something like that*/}
          &nbsp;
        </span>
      </div>
    </div>
  );
}
