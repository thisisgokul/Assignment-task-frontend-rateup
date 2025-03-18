import CardView from "@/components/shared/CardView";


export default function CardPage({ params, searchParams }: any) {
  const boardId = Number(searchParams.boardId);

  return (
    <main>
      <section>
        <CardView id={params.id} boardId={boardId} />
      </section>
    </main>
  );
}

