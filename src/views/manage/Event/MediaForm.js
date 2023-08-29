import PropTypes from 'prop-types';

// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, Typography, TextField, Autocomplete } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// third-party
import { useFormik, Form, FormikProvider } from 'formik';
import * as yup from 'yup';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { DesktopDatePicker, DesktopTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useEffect } from 'react';
import ItemAttachments from './ItemAttachments';

const validationSchema = yup.object({});

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

const MediaForm = ({ detailsData, setDetailsData, handleNext, handleBack, setErrorIndex }) => {
    const formik = useFormik({
        initialValues: {
            // TODO add fields for repeat schedule,
        },
        validationSchema,
        onSubmit: (values) => {
            setDetailsData((oldDetails) => ({
                ...oldDetails,
                ...values
            }));
            handleNext();
        }
    });

    const theme = useTheme();

    useEffect(() => {
        console.log(formik.values);
    }, [formik.values]);

    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Media
            </Typography>
            <form onSubmit={formik.handleSubmit} id="validation-forms" style={{ overflow: 'auto' }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid container spacing={3} style={{}}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="subtitle1">Images *</Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <ItemAttachments
                                        attachments={formik.values.images}
                                        setFieldValue={formik.setFieldValue}
                                        fieldName="images"
                                        multiple
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="subtitle1">Posters *</Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <ItemAttachments
                                        attachments={formik.values.posters}
                                        setFieldValue={formik.setFieldValue}
                                        fieldName="posters"
                                        multiple
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="subtitle1">Thumbnail *</Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <ItemAttachments
                                        attachments={formik.values.thumbnail}
                                        setFieldValue={formik.setFieldValue}
                                        fieldName="thumbnail"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Stack direction="row" justifyContent="space-between">
                                <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                                    Back
                                </Button>
                                <AnimateButton>
                                    <Button variant="contained" sx={{ my: 3, ml: 1 }} type="submit">
                                        Next
                                    </Button>
                                </AnimateButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </LocalizationProvider>
            </form>
        </>
    );
};

MediaForm.propTypes = {
    detailsData: PropTypes.object,
    setDetailsData: PropTypes.func,
    handleNext: PropTypes.func,
    handleBack: PropTypes.func,
    setErrorIndex: PropTypes.func
};

export default MediaForm;
