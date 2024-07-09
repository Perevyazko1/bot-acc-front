import {memo, ReactNode} from 'react';
import {Box} from "@mui/material";
import {CustomInput} from "../CustomInput/CustomInput";
import {CustomSelectInput} from "../CustomSelectInput/CustomSelectInput";
import {CustomTextArea} from "../CustomTextArea/CustomTextArea";

interface CustomFormProps {
    className?: string
    children?: ReactNode
}


export const CustomForm = memo((props: CustomFormProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <div
            {...otherProps}
        >
            <Box
                sx={{
                    borderRadius: "10px",
                    width: "70vw",
                    margin: "0 auto",
                    bgcolor: 'background.paper',
                    padding: "10px 32px 32px 32px",

                }}
            >
                <CustomSelectInput/>
                <CustomInput nameInput={"ФИО сотрудника"}/>
                <CustomInput nameInput={"С какого магазина"}/>
                <CustomInput nameInput={"Ссылка на товар, если есть"}/>
                <CustomTextArea nameInput={"Особенности, преимущества"}/>
            </Box>
            {children}
        </div>
    );
});