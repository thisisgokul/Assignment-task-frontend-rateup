import CardView from "@/components/shared/CardView";
import { BoardPageProps } from "@/types";

export default function CardPage({ params, searchParams }: BoardPageProps) {
  const boardId = Number(searchParams.boardId); // Ensure it's a number if required

  return (
    <main>
      <section>
        <CardView id={params.id} boardId={boardId} />
      </section>
    </main>
  );
}

