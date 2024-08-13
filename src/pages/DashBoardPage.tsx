import CreatePost from '../modules/Post/CreatePost'
import ListPosts from '../modules/Post/ListPost'
import { useState } from 'react'

const DashboardPage = () => {
    const [mutate, setMutate] = useState<boolean>(false);
    return (
        <div><CreatePost setMutate={setMutate} />
            <ListPosts mutate={mutate} setMutate={setMutate} />
        </div>
    )
}

export default DashboardPage