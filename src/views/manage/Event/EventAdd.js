import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// material-ui
import { Button, Step, Stepper, StepLabel, Stack, Typography } from '@mui/material';

// project imports
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import DetailsForm from './DetailsForm';
import ScheduleForm from './ScheduleForm';
import { useHref } from 'react-router-dom';
import VenueForm from './VenueForm';
import MediaForm from './MediaForm';
import { useDispatch } from 'react-redux';

import { addEvent, updateEvent, getEvents, setEventStatus } from 'store/slices/event';
import axios from 'utils/axios';
// step options
const steps = [
    {
        step: 'detail',
        label: 'Basic Details'
    },
    {
        step: 'timing',
        label: 'Schedule'
    },
    {
        step: 'location',
        label: 'Venue'
    },
    {
        step: 'media',
        label: 'Media'
    },
    {
        step: 'SEO',
        label: 'SEO'
    }
];

const getStepContent = (
    step,
    handleNext,
    handleBack,
    setErrorIndex,
    shippingData,
    setShippingData,
    paymentData,
    setPaymentData,
    detailsData,
    setDetailsData
) => {
    switch (step) {
        case 0:
            return (
                <DetailsForm
                    handleNext={handleNext}
                    setErrorIndex={setErrorIndex}
                    detailsData={detailsData}
                    setDetailsData={setDetailsData}
                />
            );
        case 1:
            return (
                <ScheduleForm
                    handleNext={handleNext}
                    handleBack={handleBack}
                    setErrorIndex={setErrorIndex}
                    detailsData={detailsData}
                    setDetailsData={setDetailsData}
                />
            );
        case 2:
            return (
                <VenueForm
                    handleNext={handleNext}
                    handleBack={handleBack}
                    setErrorIndex={setErrorIndex}
                    detailsData={detailsData}
                    setDetailsData={setDetailsData}
                />
            );
        case 3:
            return (
                <MediaForm
                    handleNext={handleNext}
                    handleBack={handleBack}
                    setErrorIndex={setErrorIndex}
                    detailsData={detailsData}
                    setDetailsData={setDetailsData}
                />
            );
        /* case 1:
            return (
                <AddressForm
                    handleNext={handleNext}
                    setErrorIndex={setErrorIndex}
                    shippingData={shippingData}
                    setShippingData={setShippingData}
                />
            );
        case 2:
            return (
                <PaymentForm
                    handleNext={handleNext}
                    handleBack={handleBack}
                    setErrorIndex={setErrorIndex}
                    paymentData={paymentData}
                    setPaymentData={setPaymentData}
                />
            );
        case 3:
            return <Review />; */
        default:
            return <div>No Step Found</div>;
        // throw new Error('Unknown step');
    }
};

// ==============================|| FORMS WIZARD - BASIC ||============================== //

const EventAdd = ({ event }) => {
    const dispatch = useDispatch();

    const [activeStep, setActiveStep] = React.useState(0);
    const [detailsData, setDetailsData] = React.useState({
        // TODO
        booking_close_before: 30,
        featured: false,
        // country_id: 101, // INDIA
        // state_id: 4030, // GUJARAT,
        // city_id: 134096, // Surat,
        country_id: null, // INDIA
        state_id: null, // GUJARAT,
        city_id: null, // Surat,
        id: null,
        ...event
    });

    const [shippingData, setShippingData] = React.useState({});
    const [paymentData, setPaymentData] = React.useState({});
    const [errorIndex, setErrorIndex] = React.useState(null);

    useEffect(() => {
        if (event?.id) {
            const fetchData = async () => {
                const response = await axios.get(`/api/events/${event?.id}`);
                setDetailsData((oldData) => ({
                    ...oldData,
                    ...response?.data?.data
                }));
            };

            // call the function
            fetchData().catch();
        }
    }, [event?.id]);

    const handleSuccess = (response) => {
        setDetailsData((oldDetailsData) => ({
            ...oldDetailsData,
            ...response?.data?.data
        }));
        setActiveStep(activeStep + 1);
    };

    const handleValidation = async (errors, field, setFieldTouched, setErrors, setFieldError) => {
        await setFieldTouched(field, true, true);
        //   setErrors({ [field]: errors[field].join(', ') });

        setFieldError(field, errors[field].join(', '));
    };

    const handleError =
        ({ setFieldTouched, setErrors, setFieldError }) =>
        (error) => {
            if (error?.errors) {
                Object.keys(error?.errors).forEach((e) => {
                    handleValidation(error?.errors, e, setFieldTouched, setErrors, setFieldError);
                });
            }
            // setActiveStep(activeStep + 1);
        };

    const handleNext = async (data, formik) => {
        try {
            // const step = steps[activeStep]?.step;

            data.step = steps[activeStep]?.step;
            data.id = detailsData.id;
            data._method = null;

            if (data.id && formik.dirty) {
                data._method = 'put';
                dispatch(updateEvent(data, handleSuccess, handleError(formik)));
            } else if (!data.id) {
                dispatch(addEvent(data, handleSuccess, handleError(formik)));
            } else {
                setActiveStep(activeStep + 1);
            }
        } catch (error) {
            console.error(error);
        }
        //  setActiveStep(activeStep + 1);
        setErrorIndex(null);
    };

    const handleSubmit = () => {};

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    useEffect(() => {
        console.log(detailsData);
    }, [detailsData]);

    return (
        <MainCard title={`${detailsData?.id ? 'Update' : 'Add'} Event`}>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map(({ step, label }, index) => {
                    const labelProps = {};

                    if (index === errorIndex) {
                        labelProps.optional = (
                            <Typography variant="caption" color="error">
                                Error
                            </Typography>
                        );

                        labelProps.error = true;
                    }

                    return (
                        <Step key={step}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <>
                {activeStep === steps.length ? (
                    <>
                        <Typography variant="h5" gutterBottom>
                            Thank you for your order.
                        </Typography>
                        <Typography variant="subtitle1">
                            Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your
                            order has shipped.
                        </Typography>
                        <Stack direction="row" justifyContent="flex-end">
                            <AnimateButton>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => {
                                        setShippingData({});
                                        setPaymentData({});
                                        setActiveStep(0);
                                    }}
                                    sx={{ my: 3, ml: 1 }}
                                >
                                    Reset
                                </Button>
                            </AnimateButton>
                        </Stack>
                    </>
                ) : (
                    <>
                        {getStepContent(
                            activeStep,
                            handleNext,
                            handleBack,
                            setErrorIndex,
                            shippingData,
                            setShippingData,
                            paymentData,
                            setPaymentData,
                            detailsData,
                            setDetailsData
                        )}

                        <Stack direction="row" justifyContent={activeStep !== 0 ? 'space-between' : 'flex-end'}>
                            {activeStep !== 0 && (
                                <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                                    Back
                                </Button>
                            )}
                            {/*  <AnimateButton>
                                <Button type="submit" variant="contained" sx={{ my: 3, ml: 1 }}>
                                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                </Button>
                            </AnimateButton> */}
                        </Stack>
                    </>
                )}
            </>
        </MainCard>
    );
};

EventAdd.propTypes = {};

export default EventAdd;
