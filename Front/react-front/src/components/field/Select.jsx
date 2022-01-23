import React from 'react';
import { Select, Tooltip } from 'antd';
import ErrorTag from './ErrorTag';
import { StyledError, StyledLabel } from './Field.styled';

const FieldSelect = ({
    input,
    custom,
    children,
    parent,
    label,
    tooltip,
    disabled,
    meta: { touched, error, warning },
}) => {
    const inputProps = input;
    if (custom.mode === 'multiple' && inputProps.value === '') {
        inputProps.value = [];
    }

    if (custom.mode !== 'multiple' && inputProps.value === '') {
        inputProps.value = undefined;
    }

    return (
        <div {...parent} className={`${parent.className} ${touched && error ? 'has-error' : ''}`}>
            { label && <StyledLabel className={parent.labelclass}>{label} :</StyledLabel>}
            <Tooltip placement="topLeft" title={tooltip && tooltip !== undefined ? {tooltip} : null}>
                <Select
                    {...custom}
                    {...input}
                    disabled={disabled}
                >
                    {children}
                </Select>
            </Tooltip>
            { touched && (
                (error && <ErrorTag id={error} params={custom.params} />)
                || (warning && <StyledError>{warning}</StyledError>))
            }
        </div>
    );
};

export default FieldSelect;