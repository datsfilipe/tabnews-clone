type Props = {
  title: string;
  coins: number;
  comments: number;
  author: string;
  timestamp: string;
  index: number;
};

const timeAgo = (timestamp: string) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (seconds < 60) {
    return new Intl.RelativeTimeFormat("pt-BR", {
      style: "long",
      numeric: "auto",
    }).format(-seconds, "second");
  } else if (minutes < 60) {
    return new Intl.RelativeTimeFormat("pt-BR", {
      style: "long",
      numeric: "auto",
    }).format(-minutes, "minute");
  } else if (hours < 24) {
    return new Intl.RelativeTimeFormat("pt-BR", {
      style: "long",
      numeric: "auto",
    }).format(-hours, "hour");
  } else if (hours < 30 * 24) {
    return new Intl.RelativeTimeFormat("pt-BR", {
      style: "long",
      numeric: "auto",
    }).format(-Math.floor(hours / 24), "day");
  } else if (hours < 365 * 24) {
    return new Intl.RelativeTimeFormat("pt-BR", {
      style: "long",
      numeric: "auto",
    }).format(-Math.floor(hours / (24 * 30)), "month");
  } else {
    return new Intl.RelativeTimeFormat("pt-BR", {
      style: "long",
      numeric: "auto",
    }).format(-Math.floor(hours / (24 * 365)), "year");
  }
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
          {`· ${timeAgo(props.timestamp)}`}
        </span>
      </div>
    </div>
  );
}
