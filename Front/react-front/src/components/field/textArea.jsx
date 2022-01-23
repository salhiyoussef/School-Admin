import React from 'react';
import { Input } from 'antd';
import ErrorTag from './ErrorTag';
import { StyledError, StyledLabel } from './Field.styled';

const FieldTextArea = ({
    input,
    custom,
    label,
    parent,
    meta: { touched, error, warning },
}) => (
    <div {...parent} className={`${parent && parent.className ? parent.className : ''} ${touched && error ? 'has-error' : ''}`}>
        { label && <StyledLabel>{label} :</StyledLabel>}
        <Input.TextArea
            {...input}
            {...custom}
        />
        { touched && (
            (error && <ErrorTag id={error} params={custom.params} />)
            || (warning && <StyledError>{warning}</StyledError>))
        }
    </div>
);

export default FieldTextArea;