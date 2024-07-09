import {memo, ReactNode} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

interface CustomSelectInputProps {
    className?: string
    children?: ReactNode
}


export const CustomSelectInput = memo((props: CustomSelectInputProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const BRANDS = ["re:store", "samsung","xiaomi"]


    return (
        <div
            {...otherProps}
        >
            <FormControl
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                    marginBottom: "10px"
                }}

                fullWidth size="small">
                <InputLabel id="demo-select-small-label">Выбор услуги</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    // value={form.service}
                    label="Выбор бренда"
                    // onChange={(e) =>
                    //     dispatch(formService(e.target.value))
                    // }

                >
                    {BRANDS.map((item, index) => (
                        <MenuItem
                            key={index}
                            value={item}
                            // onClick={() => trigerInterval(TEST_TIME, item[1])}
                            // onClick={() => {
                            //     dispatch(listVarietyWorkApp(item.type_work))
                            // }}

                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

        </div>
    );
});