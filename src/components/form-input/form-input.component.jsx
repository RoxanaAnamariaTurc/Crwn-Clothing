import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.style.jsx';

const FormInput = ({ label, ...otherProps }) =>
{

    return (
        <GroupContainer>
            <FormInputContainer{...otherProps} />
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>

            )}

        </GroupContainer>
    )
}

export default FormInput;