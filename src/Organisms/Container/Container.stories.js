import React from "react";
import { storiesOf } from "@storybook/react";
import Container from "./Container";
import mockContainer from './mock/mockContainer';

storiesOf("Components/Container", module)
    .add("with no props", () => (
        <Container
            title={mockContainer.title}
            // tableData={mockContainer.tableData}
        />
    ))
    .add("with infoToolTip", () => (
        <Container
            title={mockContainer.title}
            infoToolTip
            infoText={mockContainer.infoText}
            // tableData={mockContainer.tableData}
        />
    ))
    .add("with calendar", () => (
        <Container
            title={mockContainer.title}
            calendar
            // tableData={mockContainer.tableData}
        />
    ))
    .add("with search", () => (
        <Container
            title={mockContainer.title}
            search
            // tableData={mockContainer.tableData}
        />
    ))
    .add("with dropdown", () => (
        <Container
            title={mockContainer.title}
            dropDown
            // tableData={mockContainer.tableData}
        />
    ))
    .add("with data export", () => (
        <Container
            title={mockContainer.title}
            export 
            tableData={mockContainer.tableData}
        />
    ))
    .add("with chart", () => (
        <Container
            title={mockContainer.title}
            infoToolTip
            infoText={mockContainer.infoText}
        >
            
        </Container>
    ));