import {memo, ReactNode} from 'react';
import {CustomForm} from "../shared/CustomForm/CustomForm";

interface MainPageProps {
    className?: string
    children?: ReactNode
}


export const MainPage = memo((props: MainPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <div
            {...otherProps}
        >
            <CustomForm/>
        </div>
    );
});