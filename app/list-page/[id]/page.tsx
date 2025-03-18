import ListView from "@/components/shared/ListVIew";
import React from "react";

export default async function ListPage({ params }: {
  params:Promise<{id:string}>;
 
}) {
  const {id} = await params
  return (
    <main>
      <section>
        <ListView boardId={id} />
      </section>
    </main>
  );
}
