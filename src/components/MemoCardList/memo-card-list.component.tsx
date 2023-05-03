import { MemoCard } from "@/models/MemoCard";
import MemoCardItem from "../MemoCardItem/memo-card-item.component";

export default function MemoCardList({ cards }: { cards: MemoCard[] }) {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4 grid-cols-2 sm:px-4 gap-4 mt-8">
        {cards.map((card: MemoCard, index: number) => (
          <MemoCardItem card={card} position={index + 1} key={card.id} />
        ))}
      </div>
    </div>
  );
}
