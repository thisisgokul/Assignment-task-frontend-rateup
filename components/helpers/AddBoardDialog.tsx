import {
  AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,
  AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,Button,Input,
} from "./imports";
import { useState } from "react";
import { createBoard } from "@/lib/Actions/boardActions";

export function AddBoardDialog() {
  const [title, setTitle] = useState("");

  // submit function for create Boards
  const handleSubmit = () => {
    createBoard(title, () => setTitle("")); 
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary" className="cursor-pointer">
          + Add New Board
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add a New Board</AlertDialogTitle>
          <AlertDialogDescription>
            Enter a title for your new board.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mt-2">
          <Input
            type="text"
            placeholder="Board Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <AlertDialogFooter >
          <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
          <AlertDialogAction className="cursor-pointer"
            onClick={handleSubmit}
            disabled={!title.trim()}
          >
            Create Board
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
