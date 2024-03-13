"use client";
import React, { useEffect, useState } from 'react';
import {SelectChangeEvent} from '@mui/material';
import { MainContainer } from '@/app/styledHome';
import BasicTable from '@/components/table/BasicTable';
import AreaChart from '@/components/chart/AreaChart';
import { StyledDiv} from '@/app/auto/styledAuto';
import header from "@/data/tableHeader.json"
import cars from "@/data/cars.json"
import AutoFilters from "@/components/autoFilters/AutoFilters";
import {Car} from "@/types/AutoTypes"

const Auto: React.FC = () => {
    const initialFilters = {
        make: '',
        model: '',
        types: [] as string[],
        resellers: [] as string[],
    };

    const [filters, setFilters] = useState(initialFilters);
    const [filteredData, setFilteredData] = useState<Car[]>([]);
    const uniqueMakes = Array.from(new Set(cars.map((item) => item.make)));
    const uniqueTypes = Array.from(new Set(cars.map((item) => item.type)));
    const uniqueResellers = Array.from(
        new Set(cars.flatMap((item) => item.sales.map((sale) => sale.reseller)))
    );

    useEffect(() => {
        const filtered = cars.filter((item) => {
            const makeFilter = !filters.make || item.make === filters.make;
            const modelFilter =
                !filters.model || item.model.toLowerCase().includes(filters.model.toLowerCase());
            const typesFilter =
                filters.types.length === 0 || filters.types.some((type) => item.type === type);
            const resellersFilter =
                filters.resellers.length === 0 ||
                filters.resellers.some((reseller) =>
                    item.sales.some((sale) => sale.reseller === reseller)
                );

            return makeFilter && modelFilter && typesFilter && resellersFilter;
        });

        setFilteredData(filtered);
    }, [filters, cars]);

    const handleMakeChange = (event: SelectChangeEvent) => {
        setFilters({ ...filters, make: event.target.value as string });
    };

    const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilters({ ...filters, model: event.target.value });
    };

    const handleTypeChange = (event: SelectChangeEvent<string[]>) => {
        setFilters({ ...filters, types: event.target.value as string[] });
    };

    const handleResellerChange = (event: SelectChangeEvent<string[]>) => {
        setFilters({ ...filters, resellers: event.target.value as string[] });
    };

    const handleResetFilters = () => {
        setFilters(initialFilters);
    };

    return (
        <MainContainer>
            <StyledDiv>

                <AutoFilters
                    uniqueMakes={uniqueMakes}
                    uniqueTypes={uniqueTypes}
                    uniqueResellers={uniqueResellers}
                    filters={filters}
                    onMakeChange={handleMakeChange}
                    onModelChange={handleModelChange}
                    onTypeChange={handleTypeChange}
                    onResellerChange={handleResellerChange}
                    onResetFilters={handleResetFilters}
                />

                <BasicTable header={header} data={filteredData} forInfo={false}/>

                <AreaChart />

            </StyledDiv>
        </MainContainer>
    );
};

export default Auto;