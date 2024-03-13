import { SelectChangeEvent } from "@mui/material";
import React from "react";

export interface AutoFiltersProps {
    uniqueMakes: string[];
    uniqueTypes: string[];
    uniqueResellers: string[];
    filters: {
        make: string;
        model: string;
        types: string[];
        resellers: string[];
    };
    onMakeChange: (event: SelectChangeEvent) => void;
    onModelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onTypeChange: (event: SelectChangeEvent<string[]>) => void;
    onResellerChange: (event: SelectChangeEvent<string[]>) => void;
    onResetFilters: () => void;
}

export interface Car {
    id: number;
    make: string;
    model: string;
    type: string;
    sales: {
        date: string;
        reseller: string;
    }[];
}