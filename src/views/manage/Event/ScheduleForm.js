// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, Typography, TextField, Autocomplete } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// third-party
import { useFormik, Form, FormikProvider } from 'formik';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as yup from 'yup';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { DesktopDatePicker, DesktopTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useEffect } from 'react';

const validationSchema = yup.object({
    start_date: yup
        .date()
        .nullable()
        .required('Start date is required')
        .min(new Date(new Date().setHours(0, 0, 0, 0)), 'Start Date cannot be in past'),
    end_date: yup
        .date()
        .nullable()
        .required('End date is required')
        .when('start_date', (start_date, yup) => {
            if (start_date) {
                return yup.min(start_date, 'End date cannot be before Start Date');
            }
            return yup;
        }),
    start_time: yup.string().required('Start time is required'),

    // end_time: yup.string().required('End time is required') // TODO Important

    end_time: yup
        .date()
        .nullable()
        .required('End time is required')
        .test('min_end_time', 'End time cannot be before Start time', function (value) {
            const { end_date, start_time, start_date } = this.parent;

            const startTime = moment(start_time).format('HH:mm');
            const endTime = moment(value).format('HH:mm');

            const startDate = moment(`${moment(start_date).format('YYYY-MM-DD')} ${startTime}`);

            const endDate = moment(`${moment(end_date).format('YYYY-MM-DD')} ${endTime}`);
            if (startDate.isValid()) {
                return endDate.isSameOrAfter(startDate);
            }
            return false;
        })
    /*  .when(['start_time', 'end_date', 'end_time'], (start_time, end_date, yup) => {
            if (start_time) {
                return yupmin(start_time, 'End time cannot be before Start time');
            }
            return yup;
        }) */
    /* (date) => moment().diff(moment(date), 'years') >= 18 ) */
});

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

const ScheduleForm = ({ detailsData, setDetailsData, handleNext, handleBack, setErrorIndex }) => {
    const formik = useFormik({
        initialValues: {
            start_date: detailsData.start_date,
            end_date: detailsData.end_date,
            start_time: detailsData.start_date
                ? moment(`${moment(detailsData.start_date).format('YYYY-MM-DD')} ${detailsData.start_time}`).toISOString()
                : '',
            end_time: detailsData.end_date
                ? moment(`${moment(detailsData.end_date).format('YYYY-MM-DD')} ${detailsData.end_time}`).toISOString()
                : ''

            // TODO add fields for repeat schedule,
        },
        validationSchema,
        onSubmit: (values, { setFieldError, setFieldTouched, setErrors }) => {
            const updatedDetails = {
                ...values,
                start_date: moment(values.start_date).format('YYYY-MM-DD'),
                end_date: moment(values.end_date).format('YYYY-MM-DD'),
                start_time: moment(values.start_time).format('HH:mm:ss'),
                end_time: moment(values.end_time).format('HH:mm:ss')
            };

            setDetailsData((oldDetailsData) => ({
                // TODO
                ...oldDetailsData,
                ...updatedDetails
            }));
            handleNext(updatedDetails, { setFieldTouched, setErrors, setFieldError, dirty: formik.dirty });
        }
    });

    const theme = useTheme();

    useEffect(() => {
        console.log(formik.values);
    }, [formik.values]);

    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Event Schedule
            </Typography>
            <form onSubmit={formik.handleSubmit} id="validation-forms" style={{ overflow: 'auto' }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid container spacing={3} style={{}}>
                        <Grid item xs={6}>
                            <DesktopDatePicker
                                disablePast
                                label="Start Date"
                                value={formik.values.start_date || ''}
                                inputFormat="yyyy/MM/dd"
                                onChange={(date) => {
                                    formik.setFieldValue('start_date', date);
                                }}
                                renderInput={(props) => (
                                    <TextField
                                        fullWidth
                                        {...props}
                                        id="start_date"
                                        name="start_date"
                                        error={formik.touched.start_date && Boolean(formik.errors.start_date)}
                                        helperText={formik.touched.start_date && formik.errors.start_date}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <DesktopDatePicker
                                disablePast
                                label="End Date"
                                value={formik.values.end_date || ''}
                                inputFormat="yyyy/MM/dd"
                                onChange={(date) => {
                                    formik.setFieldValue('end_date', date);
                                }}
                                renderInput={(props) => (
                                    <TextField
                                        fullWidth
                                        {...props}
                                        error={formik.touched.end_date && Boolean(formik.errors.end_date)}
                                        helperText={formik.touched.end_date && formik.errors.end_date}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <DesktopTimePicker
                                // disablePast
                                label="Start Time"
                                value={formik.values.start_time || ''}
                                disableIgnoringDatePartForTimeValidation
                                inputFormat="HH:mm"
                                onChange={(date) => {
                                    formik.setFieldValue('start_time', date);
                                }}
                                ampm={false}
                                renderInput={(props) => (
                                    <TextField
                                        fullWidth
                                        {...props}
                                        error={formik.touched.start_time && Boolean(formik.errors.start_time)}
                                        helperText={formik.touched.start_time && formik.errors.start_time}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <DesktopTimePicker
                                // disablePast
                                label="End Time"
                                value={formik.values.end_time || null}
                                inputFormat="HH:mm"
                                onChange={(date) => {
                                    formik.setFieldValue('end_time', date);
                                }}
                                renderInput={(props) => (
                                    <TextField
                                        fullWidth
                                        {...props}
                                        error={formik.touched.end_time && Boolean(formik.errors.end_time)}
                                        helperText={formik.touched.end_time && formik.errors.end_time}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Stack direction="row" justifyContent="space-between">
                                <Button onClick={handleBack} sx={{ my: 3, ml: 1 }} disabled={formik.isSubmitting}>
                                    Back
                                </Button>
                                <AnimateButton>
                                    <Button variant="contained" sx={{ my: 3, ml: 1 }} type="submit" disabled={formik.isSubmitting}>
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

ScheduleForm.propTypes = {
    detailsData: PropTypes.object,
    setDetailsData: PropTypes.func,
    handleNext: PropTypes.func,
    handleBack: PropTypes.func,
    setErrorIndex: PropTypes.func
};

export default ScheduleForm;
