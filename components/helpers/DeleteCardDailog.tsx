"use client";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./imports";
import { mutate } from "swr";
import { deleteCard } from "@/lib/Actions/cardActions";


type DeleteCardDialogProps = {
  id: number;
  listId:string
};

export function DeleteCardDialog({ id ,listId}: DeleteCardDialogProps) {
  const handleDelete = () => {
    deleteCard(id, () => {
        mutate(`/lists/${listId}/cards`); 
      });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <span className="cursor-pointer flex  hover:underline">
        <Trash2 size={16} className="mr-1" /> Delete 
        </span>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Card</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this card? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
          <AlertDialogAction  onClick={handleDelete} className="bg-red-600 cursor-pointer hover:bg-red-700">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
