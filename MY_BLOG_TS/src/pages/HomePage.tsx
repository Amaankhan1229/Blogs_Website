import ShowPost from "../../src/modules/Post/ShowPost";

import axios from "axios";
import useSWR from 'swr'


export interface IPostProps{
    image:string;
    title:string;
    id:string;
    description: string;
}

const HomePage: React.FC = () => {

    const { data, error, isLoading} = useSWR("https://fakestoreapi.com/products", () => axios.get("https://fakestoreapi.com/products"))

  

    if (isLoading) {
        return <>Loading</>
    }
    if (error) {
        return <>{JSON.stringify(error)}</>
    }
    else {
        console.log(data?.data);

        return (
            <>
                <h1>Home Page</h1>

                {data?.data?.map((post:IPostProps) => (<ShowPost key={post.id} desc={post.description} image={post.image} title={post.title} />))}

            </>
        )
    }


}

export default HomePage