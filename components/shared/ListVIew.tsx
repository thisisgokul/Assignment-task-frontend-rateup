"use client";
import { boardIdProps, Lists } from "@/types";
import React from "react";
import { AddListDialog } from "../helpers/AddListDialog";
import { fetcher } from "@/lib/utils/fetcher";
import useSWR from "swr";
import Link from "next/link";
import Loader from "../ui/loader";

export default function ListVIew({ boardId }: boardIdProps) {
  //fetch all lists
  const { data: lists, isLoading } = useSWR<{ data: Lists[] }>(
    `/boards/${boardId}/lists`,
    fetcher 
  );
  return (
    <div className="min-h-screen bg-gray-900 padding-x pt-12 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Lists</h1>

      {/* Add List dialog */}
      <div className="flex justify-center mb-6">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
          <AddListDialog boardId={boardId} />
        </button>
      </div>

      <div className="flex justify-center items-center">
        {isLoading && <Loader/>}
        {!isLoading && lists?.data?.length === 0 && (
          <p className="text-gray-400">No lists available.</p>
        )}
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
  
        {lists?.data.map((list) => (
          <div key={list.id} className="bg-gray-800 p-4 rounded-2xl shadow-lg">
            {/* Title & Rename Button */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">📌 {list.title}</h2>
              <button className="text-gray-300 hover:text-white text-sm bg-gray-700 px-2 py-1 rounded-lg">
             <AddListDialog id={list.id} listTitle={list.title} boardId={boardId}/>
              </button>
            </div>

            <p className="text-gray-400 mt-2">Track your ongoing projects.</p>

            {/* Show All Cards Button */}
           <Link href={`/card-page/${list.id}?boardId=${boardId}`}>
           <button className="mt-4 w-full bg-blue-500 cursor-pointer hover:bg-blue-600 text-white py-2 rounded-lg">
              Show All Cards
            </button>
           </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
