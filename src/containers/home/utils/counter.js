import {Statistic} from "semantic-ui-react";
import React from "react";

export const counter = (value, text) => {
    return (
        <Statistic color="red" inverted>
            <Statistic.Value>{value}</Statistic.Value>
            <Statistic.Label>{text}</Statistic.Label>
        </Statistic>
    );
}