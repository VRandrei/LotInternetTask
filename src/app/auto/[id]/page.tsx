import * as React from "react";
import { MainContainer} from '@/app/styledHome';
import BasicTable from '@/components/table/BasicTable';
import infoHeader from '@/data/tableInfoHeader.json'
import cars from "@/data/cars.json";
import {StyledButton, StyledDiv} from "@/app/auto/styledAuto"
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

const AutoInfo = ({ params }: { params: { id: string } }) => {
    const carId = parseInt(params.id, 10);
    const selectedCar = cars.find((car) => car.id === carId);
    const sortedSales = selectedCar?.sales.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <MainContainer>
            <StyledDiv>
                <StyledButton href={'/auto'}>
                    <KeyboardBackspaceRoundedIcon/>
                    <p>Back</p>
                </StyledButton>
                <BasicTable header={infoHeader} data={sortedSales} forInfo={true}/>
            </StyledDiv>
        </MainContainer>
    )
}

export default AutoInfo;