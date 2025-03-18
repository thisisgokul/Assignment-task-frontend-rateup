"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {  Pencil } from "lucide-react";
import { Cards, Lists } from "@/types";
import useSWR from "swr";
import { fetcher } from "@/lib/utils/fetcher";
import ListDropDown from "./ListDropDown";
import { AddCardDialog } from "./AddCardDialog";
import { DeleteCardDialog } from "./DeleteCardDailog";
import Loader from "../ui/loader";


type ListDropDownProps = {
  lists: Lists[]; 
  listId: string;
};

export default function CardLists({ lists, listId }: ListDropDownProps) {
  const { data: cards, isLoading } = useSWR<{ data: Cards[] }>(
    `/lists/${listId}/cards`,
    fetcher
  );

  if (isLoading) return  <Loader/>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards?.data?.length ? (
        cards.data.map((card) => (
          <Card
            key={card.id}
            className="bg-gray-900 text-white shadow-lg rounded-2xl border border-gray-800"
          >
            <CardHeader className="flex justify-between items-center px-4 pt-4">
              <CardTitle className="text-lg font-bold">
                📌 {card.title}
              </CardTitle>
              <ListDropDown
                lists={lists || []}
                cardId={card.id}
                listId={listId}
              />
            </CardHeader>

            <CardContent className="px-4 pb-6">
              <p className="text-gray-300 text-sm">
                {card.description || "No description provided."}
              </p>

              <div className="flex justify-end mt-4 gap-3">
                <Button
                  variant="outline"
                  className="text-gray-800 cursor-pointer border-gray-600"
                >
                  <Pencil size={16} className="mr-1" />{" "}
                  <AddCardDialog
                    cardDescription={card.description}
                    cardTitle={card.title}
                    listId={listId}
                    id={card.id}
                  />
                </Button>
                <Button className="bg-red-500 hover:bg-red-600 cursor-pointer text-white">
                  <DeleteCardDialog id={card.id} listId={listId} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="flex justify-center items-center w-full col-span-full">
          <p className="text-gray-400 text-lg">No cards available</p>
        </div>
      )}
    </div>
  );
}
