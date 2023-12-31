import
{
    Gender,
    Input,
    InputArray,
    Password,
    Select,
} from './'
export const FormikControl = (props) =>
{
    const { control, size, ...rest } = props;
    switch (control)
    {
        case "input":
            return <Input {...rest} />;
        case "password":
            return <Password {...rest} />;
        case "select":
            return <Select {...rest} />;
        case "array":
            return <InputArray {...rest} />;
        case "gender":
            return <Gender {...rest} />;

        default:
            return null;
    }
}