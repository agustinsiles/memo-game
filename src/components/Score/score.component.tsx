export interface IProps {
  score: number;
}

export default function Score({ score }: IProps) {
  return (
    <span>
      Score: <b>{score}</b>
    </span>
  );
}
