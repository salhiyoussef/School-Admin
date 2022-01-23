import React from "react";
import { StyledCard } from "./styledCard";

export default function CardApp({title, children}) {
  return (
    <StyledCard title={title} bordered={false}>
        {children}
    </StyledCard>
  );
}
