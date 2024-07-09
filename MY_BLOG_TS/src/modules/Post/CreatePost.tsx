import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Shared/library/Providers/UserProvider";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import { db } from "../../Config/FireBaseConfig";
import 'react-quill/dist/quill.snow.css';
import { Button } from "../../Shared/Components/ui/button";
import { Input } from "@/Shared/Components/ui/input";


export interface IFormType{
    title:string;
}
interface IDataType {
    title: string;
    content: unknown;
    date: Date;
    author: string;
}

interface IProps {
    setMutate: (mutate: boolean)=> void
}

const CreatePost: React.FC<IProps> = ({ setMutate }) => {

    const myColors = [
        "purple",
        "#785412",
        "#452632",
        "#856325",
        "#963254",
        "#254563",
        "white"
    ];
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ align: ["right", "center", "justify"] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            [{ color: myColors }],
            [{ background: myColors }]
        ]
    };
    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "color",
        "image",
        "background",
        "align"
    ];

    const [code, setCode] = useState<string>(
        "hello guys you can also add fonts and another features to this editor."
    );
    const handleProcedureContentChange = (content: string) => {
        setCode(content);
    };

    const {register, reset, handleSubmit}= useForm<IFormType>();

    const user =useContext(UserContext);

    const onSubmit =async (data:IFormType)=>{

        try {
            const customObject: IDataType = {
                title: data.title,
                content: code,
                author: user?.user ? user.user?.email : "",
                date: new Date(),

            }

            reset();

            console.log(customObject);

            const resp = await addDoc(collection(db, "blogs"),customObject);
            console.log(resp);

            setMutate(true)
            toast.success("Post created");
            
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div><Button type="submit">Create</Button></div>
            <div className="w-max"><Input type="text" placeholder="title" {...register("title")}/></div>
          <div>
            <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    value={code}
                    onChange={handleProcedureContentChange}
                />
                </div>

        </form>
    </div>
  )
}

export default CreatePost