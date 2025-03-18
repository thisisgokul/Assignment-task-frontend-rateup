import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,
DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { Button } from "./imports";
import { Lists } from "@/types";
import { moveCard } from "@/lib/Actions/cardActions";
import { mutate } from "swr";

type ListDropDownProps = {
  lists: Lists[];
  cardId: number;
  listId: string;
};

export default function ListDropDown({lists,cardId,listId,}: ListDropDownProps) {

  const handleSelect = (list_id: number): void => {
    moveCard(list_id, cardId, () => {
      mutate(`/lists/${listId}/cards`); 
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-sm text-black cursor-pointer">
          Move to any list
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-800  text-white">
        {lists.map((list) => (
          <DropdownMenuItem className="cursor-pointer" onClick={() => handleSelect(list.id)} key={list.id}>
            {list.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
