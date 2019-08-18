import React from 'react';
import { Container, Typography, TextField, FormControl, Button} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

export default function ChirurgiesComponent() {
    return (
        <Container>
            <Typography component="h4" variant="h4">Ajouter nouvelle chirurgie</Typography>
            <FormControl fullWidth={true}>
                <TextField
                    label="Nom"
                    margin={"dense"}
                />
                <TextField
                    label="Description"
                    variant={"outlined"}
                    multiline
                    margin={"dense"}
                />
            </FormControl>
            <Button variant="contained" color="secondary" size={"large"}>
                Ajouter Chirurgie
                <CheckIcon/>
            </Button>
        </Container>
    )
}