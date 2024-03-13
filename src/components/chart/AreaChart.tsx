import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import cars from "@/data/cars.json";
import {StyledArea} from "@/components/chart/styledArea";
import {Car} from "@/types/AutoTypes"

function prepareChartData(data: Car[]) {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    let salesData: { date: Date; sales: number }[] = [];

    data.forEach((item) => {
        item.sales.forEach((sale) => {
            let saleDate = new Date(sale.date);
            if (saleDate >= oneYearAgo) {
                let existingData = salesData.find((data) => data.date.getTime() === saleDate.getTime());
                if (existingData) {
                    existingData.sales++;
                } else {
                    salesData.push({ date: saleDate, sales: 1 });
                }
            }
        });
    });

    salesData.sort((a, b) => a.date.getTime() - b.date.getTime());

    let time = salesData.map((data) => data.date);
    let sales = salesData.map((data) => data.sales);

    return { time, sales };
}

let data: Car[] = cars;
let chartData = prepareChartData(data);

const AreaChart: React.FC = () => {
    return (
        <StyledArea>
            <LineChart
                xAxis={[
                    {
                        scaleType: 'time',
                        data: chartData.time,
                        min: chartData.time[0].getTime(),
                        max: chartData.time[chartData.time.length - 1].getTime(),
                    },
                ]}
                series={[
                    {
                        data: chartData.sales,
                        area: true,
                    },
                ]}
                height={300}
            />
        </StyledArea>
    );
};

export default AreaChart;