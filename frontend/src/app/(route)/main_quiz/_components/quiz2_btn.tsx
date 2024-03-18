'use client'
import tw from "tailwind-styled-components";
import { useRouter } from "next/navigation"

export const Quiz2_btn = () => {
    const router = useRouter();

    const routetoQuiz2 = () => {
        router.push('/quiz2')
    }

    return (
        <Wrapper>
            <Quiz_img onClick={routetoQuiz2}>
                퀴즈 2
            </Quiz_img>
        </Wrapper>
    )
};

const Wrapper = tw.div`
flex
flex-col
px-20
py-10
justify-center
items-center
`

const Quiz_img = tw.button`
w-[250px]
h-[250px]
rounded-[100%]
bg-[rgba(155,205,160,0.7)]
shadow-[3.0px_3.0px_4.0px_rgba(0,0,0,0.1)]
cursor-pointer
font-bold
text-white
text-[25px]
hover:bg-[rgba(155,205,160,1)]
transition-all
`