import { Boards } from "@/types";
import { Button } from "./imports";
import Link from "next/link";

export function GlareCardComponent({ title,  created_at,id }:Boards) {
  return (
    <div className="relative w-full max-w-sm p-6 rounded-xl border border-gray-800 bg-black/30 backdrop-blur-lg shadow-lg shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 rounded-xl"></div>
    <h3 className="relative text-xl md:text-2xl font-bold text-white text-center drop-shadow-lg">
      {title}
    </h3>
    <p className="relative mt-2 text-gray-300 text-center text-sm">
      Added on {new Date(created_at).toDateString()}
    </p>

     <Link href={`/list-page/${id}`} className="relative  mt-4 flex justify-center">
     <Button variant="secondary" className="px-4 cursor-pointer py-2">
        View List
      </Button>
     </Link>
  
  </div>
  );
}
