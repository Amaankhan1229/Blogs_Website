
import { UserContext } from '../Shared/library/Providers/UserProvider'
import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../Shared/Components/ui/card'
import { toast } from '@/Shared/Components/ui/use-toast'
import { Label } from '@/Shared/Components/ui/label'
import { Input } from '@/Shared/Components/ui/input'

interface ISignUpForm {
    email: string,
    password: string
}


const SignUpPage: React.FC = () => {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    const { register, handleSubmit} = useForm<ISignUpForm>()


    const onSubmit = async (data: ISignUpForm) => {

        try {

           await user?.registerUser(data.email, data.password);
          
           toast({
            title:"USer Registered Successfully",
            description: new Date().toISOString(),
           })

            navigate("/login")
        } catch (error) {
            toast({
                title:"error",
                description: `${error}`
            })
        }

    }
    return (
        <>
        <div className='flex justify-center items-center w-full h-screen'>
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl">Sign Up</CardTitle>
                    <CardDescription>
                        Enter your email below to create to your account.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required {...register("email", { required: true })} />
                          
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required  {...register("password", { required: true })} />
                            
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleSubmit(onSubmit)}>Register</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    </>
      
    )
}

export default SignUpPage