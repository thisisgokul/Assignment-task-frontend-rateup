import ListView from "@/components/shared/ListVIew";
import { boardId } from "@/types";
import React from "react";

export default function ListPage({ params }: boardId) {
  return (
    <main>
      <section>
        <ListView boardId={params.id} />
      </section>
    </main>
  );
}
