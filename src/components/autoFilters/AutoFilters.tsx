import React from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, OutlinedInput, MenuItem, Chip} from '@mui/material';
import { StyledButton, StyledBox } from '@/components/autoFilters/styledAutoFilters';
import { AutoFiltersProps } from "@/types/AutoTypes";

const AutoFilters: React.FC<AutoFiltersProps> = ({uniqueMakes, uniqueTypes, uniqueResellers, filters,
                                                     onMakeChange, onModelChange, onTypeChange, onResellerChange, onResetFilters}) => (
    <Grid container rowSpacing={2} columnSpacing={2} marginBottom={3}>
        <Grid item xs={12} md={6}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Make</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filters.make}
                    label="Make"
                    onChange={onMakeChange}
                >
                    {uniqueMakes.map((make, index) => (
                        <MenuItem key={index} value={make}>
                            {make}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
                fullWidth
                id="model"
                label="Model"
                name="model"
                autoComplete="model"
                value={filters.model}
                onChange={onModelChange}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl fullWidth>
                <InputLabel id="demo-multiple-chip-label">Type</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={filters.types}
                    onChange={onTypeChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Type" />}
                    renderValue={(selected) => (
                        <StyledBox>
                            {selected.map((value: string) => (
                                <Chip key={value} label={value} />
                            ))}
                        </StyledBox>
                    )}
                >
                    {uniqueTypes.map((type, index) => (
                        <MenuItem key={index} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={8} md={5}>
            <FormControl fullWidth>
                <InputLabel id="demo-multiple-chip-label">Reseller</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={filters.resellers}
                    onChange={onResellerChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Reseller" />}
                    renderValue={(selected) => (
                        <StyledBox>
                            {selected.map((value: string) => (
                                <Chip key={value} label={value} />
                            ))}
                        </StyledBox>
                    )}
                >
                    {uniqueResellers.map((reseller, index) => (
                        <MenuItem key={index} value={reseller}>
                            {reseller}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4} md={1}>
            <StyledButton onClick={onResetFilters}>Reset</StyledButton>
        </Grid>
    </Grid>
);

export default AutoFilters;