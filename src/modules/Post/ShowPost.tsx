import {
    Card,
    CardContent,
    CardHeader,
  
  } from "../../Shared/Components/ui/card"
  


interface IProps {
    title: string;
    image: string;
    desc: string;
}

const ShowPost: React.FC<IProps> = ({ desc, image, title }) => {
    return (
 
            <Card>
                <CardHeader>{title}</CardHeader>
                <CardContent>
                    <img src={image} />
                    {desc}
                </CardContent>
            </Card>
        
    )
}

export default ShowPost