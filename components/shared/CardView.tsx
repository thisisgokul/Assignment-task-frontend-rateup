"use client";

import { Button } from "@/components/ui/button";
import CardLists from "../helpers/CardLists";
import { CardIdProps, Lists } from "@/types";
import { AddCardDialog } from "../helpers/AddCardDialog";
import useSWR from "swr";
import { fetcher } from "@/lib/utils/fetcher";

export default function CardView({ boardId, id }: CardIdProps) {
  const { data: lists, isLoading } = useSWR<{ data: Lists[] }>(
    `/boards/${boardId}/lists`,
    fetcher
  );
  return (
    <div className="min-h-screen padding bg-gray-950 text-white p-8">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <h4 className="text-3xl font-bold">
          📌 Cards Inside{" "}
          {lists?.data.find((list) => list?.id === Number(id))?.title ||
            "Untitled"}
        </h4>

        <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center">
          <AddCardDialog listId={id || ""} />
        </Button>
      </div>

      {/* Card Grid view */}
      <CardLists lists={lists?.data || []} listId={id || ""} />
    </div>
  );
}
