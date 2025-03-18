import CardView from "@/components/shared/CardView";


export default async function CardPage({ params, searchParams }: {
  params:Promise<{id:string}>;
  searchParams:Promise<{boardId:number | string | undefined }>
}) {
  const {id} = await params
  const {boardId} = await searchParams

  return (
    <main>
      <section>
        <CardView id={id} boardId={boardId} />
      </section>
    </main>
  );
}