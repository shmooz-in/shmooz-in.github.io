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
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'store/slices/category';

const validationSchema = yup.object({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    excerpt: yup.string().required('Excerpt is required'),
    category_id: yup.string().nullable().required('Category is required'),
    booking_close_before: yup.number().integer('Please enter a number')
});

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

const DetailsForm = ({ detailsData, setDetailsData, handleNext, setErrorIndex }) => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: detailsData.title,
            description: detailsData.description,
            slug: detailsData.slug,
            excerpt: detailsData.excerpt,
            category_id: detailsData.category_id,
            faq: detailsData.faq,
            offline_payment_info: detailsData.offline_payment_info,
            booking_close_before: detailsData.booking_close_before,
            is_private: detailsData.is_private,
            featured: detailsData.featured,
            emergency_contact_number: detailsData.emergency_contact_number
        },
        validationSchema,
        onSubmit: (values, { setFieldError, setFieldTouched, setErrors, dirty }) => {
            console.log(formik);
            const updatedDetails = {
                title: values.title,
                description: values.description,
                slug: values.slug,
                excerpt: values.excerpt,
                category_id: values.category_id,
                faq: values.faq,
                offline_payment_info: values.offline_payment_info,
                booking_close_before: values.booking_close_before,
                is_private: values.is_private,
                featured: values.featured,
                emergency_contact_number: values.emergency_contact_number
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

    const dispatch = useDispatch();

    /* const categories = [
        // TODO
        { id: 1, name: 'music' },
        { id: 2, name: 'movies' }
    ]; */

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const { categories } = useSelector((state) => {
        console.log(state);
        return state.category;
    });

    // const venueList = useMemo(() => categories.map((e) => ({ name: e.title, ...e })), [categories]);

    const selectedVenue = useMemo(() => categories.find((e) => e.id === formik.values.category_id), [formik.values.category_id]);

    useEffect(() => {
        console.log(formik.values);
    }, [formik.values]);

    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Details
            </Typography>
            <form onSubmit={formik.handleSubmit} id="validation-forms">
                <Grid container spacing={3} style={{ overflow: 'auto', height: '50vh' }}>
                    <Grid item xs={12}>
                        <TextField
                            id="title"
                            name="title"
                            label="Title *"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            rows={3}
                            id="description"
                            name="description"
                            label="Description *"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.description)}
                            helperText={formik.touched.title && formik.errors.description}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="slug"
                            name="slug"
                            label="Slug"
                            value={formik.values.slug}
                            onChange={formik.handleChange}
                            error={formik.touched.slug && Boolean(formik.errors.slug)}
                            helperText={formik.touched.slug && formik.errors.slug}
                            fullWidth
                            // autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="excerpt"
                            name="excerpt"
                            label="Excerpt *"
                            value={formik.values.excerpt}
                            onChange={formik.handleChange}
                            error={formik.touched.excerpt && Boolean(formik.errors.excerpt)}
                            helperText={formik.touched.excerpt && formik.errors.excerpt}
                            fullWidth
                            // autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            id="category_id"
                            name="category_id"
                            options={categories}
                            getOptionLabel={(option) => option.name}
                            isOptionEqualToValue={(option, value) => {
                                console.log(value);
                                return option.id === value?.id;
                            }}
                            value={categories.find((e) => e.id === formik.values.category_id) || null}
                            onChange={(e, value) => {
                                console.log(value);
                                formik.setFieldValue('category_id', value?.id || null); // TODO important
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Category *"
                                    placeholder="Select Category"
                                    error={formik.touched.category_id && Boolean(formik.errors.category_id)}
                                    helperText={formik.touched.category_id && formik.errors.category_id}
                                />
                            )}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sx={{
                            '& .quill': {
                                bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'grey.50',
                                borderRadius: '12px',
                                '& .ql-toolbar': {
                                    bgcolor: theme.palette.mode === 'dark' ? 'dark.light' : 'grey.100',
                                    borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.light + 20 : 'grey.400',
                                    borderTopLeftRadius: '12px',
                                    borderTopRightRadius: '12px'
                                },
                                '& .ql-container': {
                                    borderColor:
                                        theme.palette.mode === 'dark'
                                            ? `${theme.palette.dark.light + 20} !important`
                                            : `${theme.palette.grey[400]} !important`,
                                    borderBottomLeftRadius: '12px',
                                    borderBottomRightRadius: '12px',
                                    '& .ql-editor': {
                                        minHeight: 125
                                    }
                                }
                            }
                        }}
                    >
                        <Typography variant="subtitle1">FAQs</Typography>
                        <ReactQuill
                            theme="snow"
                            value={formik.values.faq}
                            onChange={(value) => {
                                console.log(value);
                                formik.setFieldValue('faq', value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="offline_payment_info"
                            name="offline_payment_info"
                            label="Offline Payment Info"
                            multiline
                            rows={2}
                            value={formik.values.offline_payment_info}
                            onChange={formik.handleChange}
                            error={formik.touched.offline_payment_info && Boolean(formik.errors.offline_payment_info)}
                            helperText={formik.touched.offline_payment_info && formik.errors.offline_payment_info}
                            fullWidth
                            // autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="booking_close_before"
                            name="booking_close_before"
                            label="Booking Close Before (in mins) *"
                            type="number"
                            value={formik.values.booking_close_before}
                            onChange={formik.handleChange}
                            error={formik.touched.booking_close_before && Boolean(formik.errors.booking_close_before)}
                            helperText={formik.touched.booking_close_before && formik.errors.booking_close_before}
                            fullWidth
                            // autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="secondary"
                                    name="is_private"
                                    value={formik.values.is_private}
                                    onChange={formik.handleChange}
                                />
                            }
                            label="Is Private"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControlLabel
                            control={
                                <Checkbox color="secondary" name="featured" value={formik.values.featured} onChange={formik.handleChange} />
                            }
                            label="Featured"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="emergency_contact_number"
                            name="emergency_contact_number"
                            label="Emergency Contact"
                            type="number"
                            value={formik.values.emergency_contact_number}
                            onChange={formik.handleChange}
                            error={formik.touched.emergency_contact_number && Boolean(formik.errors.emergency_contact_number)}
                            helperText={formik.touched.emergency_contact_number && formik.errors.emergency_contact_number}
                            fullWidth
                            // autoComplete="family-name"
                        />
                    </Grid>

                    {/* <Grid item xs={12}>
                        <TextField id="address1" name="address1" label="Address line 1" fullWidth autoComplete="shipping address-line1" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="address2" name="address2" label="Address line 2" fullWidth autoComplete="shipping address-line2" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="city" name="city" label="City" fullWidth autoComplete="shipping address-level2" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="zip" name="zip" label="Zip / Postal code" fullWidth autoComplete="shipping postal-code" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="country" name="country" label="Country" fullWidth autoComplete="shipping country" />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Use this address for payment details"
                        />
                    </Grid> */}
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="flex-end">
                            <AnimateButton>
                                <Button variant="contained" sx={{ my: 3, ml: 1 }} type="submit">
                                    Next
                                </Button>
                            </AnimateButton>
                        </Stack>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

DetailsForm.propTypes = {
    detailsData: PropTypes.object,
    setDetailsData: PropTypes.func,
    handleNext: PropTypes.func,
    setErrorIndex: PropTypes.func
};

export default DetailsForm;
