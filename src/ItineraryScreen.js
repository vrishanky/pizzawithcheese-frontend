import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


function ItineraryScreen() {

    // The states are: 
    // (1) null, (2) "client error", (3) "backend error", (4) "loading", (5) "success"

    var [formState, setFormState] = useState(null);
    var [errorsState, setErrorsState] = useState([]);


    // 1. Declare variables (not defined)
    var countryNameField;
    var descriptionField;
    var authorField;
    var itineraryField;
    var flagField;

     
    // Create a JS object like an HTML form element 
    var formData = new FormData();

    function attachFile(evt) {

        console.log('file data', evt.target.files)
        // Creating an array from the files attached by user
        var files = Array.from(evt.target.files);

        files.forEach(
            function(fileAttachment, index) {
                formData.append(index, fileAttachment);
            }
        )
    }


    function register() {


        // 2. Validate the fields
        var errors = [];

        if(countryNameField.value.length === 0) {
            errors.push('Please enter the country name');
        }

        if(descriptionField.value.length === 0) {
            errors.push('Please give a brief description of the itinerary');
        }

        if(authorField.value.length === 0) {
            errors.push('Please name the author');
        }

        if(itineraryField.value.length === 0) {
            errors.push('Please upload an itinerary');
        }

        // 3. If any field is not validated, go to "client error"
        if( errors.length > 0 ) {
            setFormState("client error");
            setErrorsState( errors );
        }

        // 4. If all fields are valid
        else {
            // 5. Go to "loading"
            setFormState("loading");
            setErrorsState([]);

            // 6. Send data backend
            formData.append('countryName', countryNameField.value);
            formData.append('description', descriptionField.value);
            formData.append('author', authorField.value);
            

            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/products/create`,
                {
                    'method': 'POST',
                    'body': formData
                }
            )
            .then(
                function(backendResponse) {
                    // Convert the HTTP string response to JSON
                    return backendResponse.json();
                }
            )
            .then(
                // 7. If backend sends success, go to "success"
                function(jsonResponse) {
                    if(jsonResponse.status === "ok") {
                        console.log('backend response /products/create', jsonResponse)
                        setFormState("success");
                    }
                    else {
                        setFormState("backend error");
                        setErrorsState([jsonResponse.message]);
                    }
                }
            )
            .catch(
                // 8. If backends sends error, go to "backend error"
                function(backendError) {
                    console.log('backendError at /products/create', backendError)
                    setFormState("backend error");
                }
            )
        }
    }

    function addListItem(str) {
        return <li>{str}</li>
    }

    return (
        <Container maxWidth="sm">
            <Box pt={8}>
                <Typography component="h1" variant="h2">
                    Upload a New Itinerary
                </Typography>
            </Box>

            <Box mt={4} mb={2}>
                <FormControl fullWidth sx={ { mb: 2 } }>
                    <TextField 
                    inputRef={ 
                        function( thisElement ){
                            countryNameField = thisElement;
                        } 
                    }
                    label="Countryname" required={true}/>
                </FormControl>

                <FormControl fullWidth sx={{ mb: 2 }}>
                   <TextField 
                   inputRef={ 
                        function( thisElement ){
                            descriptionField = thisElement;
                        } 
                    }
                   label="Description" required={true}/>
                </FormControl>

                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField 
                    inputRef={ 
                        function( thisElement ){
                            authorField = thisElement;
                        } 
                    }
                    label="Author" required={true}/>
                </FormControl>

            </Box>

            <Box mt={4} mb={4}>

                <Typography component="p" variant="body1" gutterBottom>
                    Upload the Itinerary (required)
                </Typography>

                <br/>

                <Button size="small" variant="contained" component="label">
                    Upload
                    <input 
                        ref={function(thisElement){ itineraryField = thisElement }} 
                        onClick={attachFile}
                        onChange={attachFile}
                        hidden accept="image/*" 
                        multiple type="file" 
                    />
                </Button>

            </Box>

            <Box mt={4} mb={4}>

                <Typography component="p" variant="body1" gutterBottom>
                    Upload the Country Flag (optional)
                </Typography>

                <br/>

                <Button size="small" variant="contained" component="label">
                    Upload the Country Flag
                    <input 
                        ref={function(thisElement){ flagField = thisElement }} 
                        onClick={attachFile}
                        onChange={attachFile}
                        hidden accept="image/*" 
                        multiple type="file" 
                    />
                </Button>

            </Box>


            <Box display="flex">
                
                {
                    formState !== "loading" &&
                    <Button onClick={register} size="large" variant="contained">Send</Button>
                }
                
                {
                    formState === "loading" &&
                    <CircularProgress />
                }
            </Box>

            <Box mt={2}>

                { 
                    formState === "client error" &&
                    <Alert severity="error">
                        <ul>
                        {
                            errorsState.map(addListItem)
                        }
                        </ul>
                    </Alert>
                }

                { 
                    formState === "backend error" &&
                    <Alert severity="error">
                        <ul>
                        {
                            errorsState.map(addListItem)
                        }
                        </ul>
                    </Alert>
                }

                {
                    formState === "success" &&
                    <Alert severity="success">
                        You have registered successfully!
                    </Alert>
                }
            </Box>
        </Container>
    )

}

export default ItineraryScreen;