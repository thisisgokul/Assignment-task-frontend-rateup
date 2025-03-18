import CardView from "@/components/shared/CardView";

interface CardPageProps {
  params: { id: string };
  searchParams: { boardId?: string }; // Make boardId optional
}

export default function CardPage({ params, searchParams }: CardPageProps) {
  const boardId = searchParams.boardId ? Number(searchParams.boardId) : null;

  return (
    <main>
      <section>
        <CardView id={params.id} boardId={boardId} />
      </section>
    </main>
  );
}
