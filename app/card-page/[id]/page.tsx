import CardView from "@/components/shared/CardView";

// @ts-ignore
export default function CardPage({ params, searchParams }) {
  const boardId = Number(searchParams.boardId);

  return (
    <main>
      <section>
        <CardView id={params.id} boardId={boardId} />
      </section>
    </main>
  );
}

