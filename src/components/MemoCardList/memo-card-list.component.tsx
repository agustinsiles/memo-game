import { MemoCard } from "@/models/MemoCard";
import MemoCardItem from "../MemoCardItem/memo-card-item.component";

export default function MemoCardList({ cards }: { cards: MemoCard[] }) {
  return (
    <div className="grid grid-cols-6">
      {cards.map((card: MemoCard, index: number) => {
        const position = index + 1;
        return <MemoCardItem card={card} position={position} key={card.id} />;
      })}
    </div>
  );
}
