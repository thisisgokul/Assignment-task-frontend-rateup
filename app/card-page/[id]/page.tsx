import CardView from "@/components/shared/CardView";

interface CardPageProps {
  params: { id: string }; 
  searchParams: { boardId?: string };
}

export default function CardPage({ params, searchParams }: CardPageProps) {
  const boardId = searchParams.boardId ? Number(searchParams.boardId) : undefined;

  return (
    <main>
      <section>
        <CardView id={params.id} boardId={boardId} />
      </section>
    </main>
  );
}
