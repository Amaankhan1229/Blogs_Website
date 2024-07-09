import React from "react"
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
  } from "../../Shared/Components/ui/alert-dialog"
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../Config/FireBaseConfig"
import { Button } from "../../Shared/Components/ui/button";

interface IProps{ 
    postId: string;
    setMutate:(mutate:boolean)=> void
}

const DeletePost:React.FC<IProps> = ({postId, setMutate}) => {
    

    const deletePost= async()=>{
        try {
            const response= await deleteDoc(doc(db, "blogs", postId));
            console.log(response);

            setMutate(true);
            

        } catch (error) {
            console.log(error);
            
        }

    }

  return  (  <AlertDialog >
  <AlertDialogTrigger asChild>
      <Button variant="outline" >Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
      <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
          </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deletePost}>Delete</AlertDialogAction>
      </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
)
}

export default DeletePost