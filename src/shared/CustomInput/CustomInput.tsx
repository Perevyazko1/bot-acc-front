import {memo, ReactNode} from 'react';
import {TextField} from "@mui/material";

interface CustomInputProps {
    className?: string
    children?: ReactNode
    nameInput: string
}


export const CustomInput = memo((props: CustomInputProps) => {
    const {
        className,
        children,
        nameInput,
        ...otherProps
    } = props


    return (
        <div>
            <TextField
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                    marginBottom: "10px"
                }}
                error={false}
                fullWidth
                size="small"
                helperText=""
                id="outlined"
                label={nameInput}
                // onClick={onClick}
                // onChange={(e) =>
                //     dispatch(formBrandCar(e.target.value))
                // }
            />

        </div>
    );
});