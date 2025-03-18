export type Boards = {
    id?: number;
    title: string;
    created_at: string;
  };
export type Lists = {
    id: number;
    title: string;
    board_id: number;
    position: number;
    created_at: string;
  };

export type Cards = {
    id: number;
    title: string;
    description:string;
    list_id: number;
    position: number;
    created_at: string;
  };

 export type boardId = {
    params: {
      id: string;
    };
  };

  export type BoardPageProps = {
    params: { id: string };
  searchParams: { boardId: string };
  };
  

  export type boardIdProps = {
    boardId?: string; // Make it optional
    id?: number; // Make it optional
    listTitle?:string
  };

  export type CardIdProps = {
    boardId?: any; // Make it optional
    id?: string 
   
  };
  
  export type ListViewProps = {
    boardId: string;
    title: string; 
    position: string; 
  };
  
  export type AddCardDialogProps = {
    id?: number;
    listId?: string;
  
    cardTitle?: string;
    cardDescription?: string;
  };