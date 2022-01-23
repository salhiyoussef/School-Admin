import React from 'react';
import { Input, Tooltip } from 'antd';
import ErrorTag from './ErrorTag';
import { StyledError, StyledLabel } from './Field.styled';

const FieldInputPassword = ({
    input,
    custom,
    label,
    parent,
    type,
    meta: { touched, error, warning },
    tooltip,
}) => (
    <div {...parent} className={`${parent && parent.className ? parent.className : ''} ${touched && error ? 'has-error' : ''}`}>
        { label && <StyledLabel>{label}</StyledLabel>}
        <Tooltip placement="topLeft" title={tooltip && tooltip !== undefined ? {tooltip} : null}>
            <Input.Password
                {...input}
                {...custom}
                type={type}
            />
        </Tooltip>
        { touched && (
            (error && <ErrorTag id={error} params={custom.params} />)
            || (warning && <StyledError>{warning}</StyledError>))
        }
    </div>
);

export default FieldInputPassword;