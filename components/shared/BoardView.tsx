"use client";

import { GlareCardComponent } from "../helpers/GlareCardComponent";
import { BackgroundLines } from "../ui/background-lines";
import useSWR from "swr";
import { fetcher } from "@/lib/utils/fetcher";
import { Boards } from "@/types";
import { AddBoardDialog } from "../helpers/AddBoardDialog";

export default function BoardsView() {
    const { data: boards, isLoading } = useSWR<{ data: Boards[] }>(`/boards`, fetcher);

  return (
    <BackgroundLines className="flex min-h-screen padding-x bg-black items-center w-full flex-col px-4">
      <div className="padding relative flex gap-5 justify-center items-center">
        <h1 className=" text-4xl text-white">Board View</h1>

        {/* Add Dialog component */}
         <AddBoardDialog/>
      </div>

      {isLoading && <p className="text-xl text-gray-300">Loading boards please wait...</p>}
      {!isLoading && boards?.data?.length === 0 && (
        <p className="text-gray-400">No boards available.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {boards?.data.map((board) => (
          <div
            key={board.id}
            className="transition-all cursor-pointer transform hover:scale-105"
          >
            {/* dispaly boards */}
            <GlareCardComponent title={board.title} id={board.id} created_at={board.created_at}/>
          </div>
        ))}
      </div>
    </BackgroundLines>
  );
}
