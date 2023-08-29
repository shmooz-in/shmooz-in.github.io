import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    Radio,
    RadioGroup,
    Stack,
    Switch,
    TextField,
    Tooltip,
    Typography
} from '@mui/material';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// third-party
import _ from 'lodash';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';

// project imports
import { gridSpacing } from 'store/constant';

// assets
import DateRangeIcon from '@mui/icons-material/DateRange';
import DeleteIcon from '@mui/icons-material/Delete';
import ItemAttachments from './ItemAttachments';

// constant
const getInitialValues = (category, range) => {
    const newCategory = {
        name: '',
        slug: '',
        status: true
    };

    if (category || range) {
        return _.merge({}, newCategory, category);
    }

    return newCategory;
};

// ==============================|| CALENDAR EVENT ADD / EDIT / DELETE ||============================== //

const CategoryAdd = ({ category, range, handleDelete, handleCreate, handleUpdate, onCancel }) => {
    const theme = useTheme();
    const isCreating = !category;

    const CategorySchema = Yup.object().shape({
        name: Yup.string().max(255).required('Name is required'),

        slug: Yup.string().max(255).required('Slug is required')
    });

    const formik = useFormik({
        initialValues: getInitialValues(category, range),
        validationSchema: CategorySchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                const data = {
                    name: values.name,
                    slug: values.slug,
                    status: values.status,
                    image: values.image,
                    template: false // TODO
                };

                if (category) {
                    handleUpdate(category.id, data);
                } else {
                    handleCreate(data);
                }

                resetForm();
                onCancel();
                setSubmitting(false);
            } catch (error) {
                console.error(error);
            }
        }
    });

    const { values, errors, touched, handleSubmit, isSubmitting, getFieldProps, setFieldValue } = formik;

    return (
        <FormikProvider value={formik}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <DialogTitle>{category ? 'Edit Category' : 'Add Category'}</DialogTitle>
                    <Divider />
                    <DialogContent sx={{ p: 3 }}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    {...getFieldProps('name')}
                                    error={Boolean(touched.name && errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Slug"
                                    {...getFieldProps('slug')}
                                    error={Boolean(touched.slug && errors.slug)}
                                    helperText={touched.slug && errors.slug}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <Typography variant="subtitle1">Attachments:</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <ItemAttachments attachments={[]} setFieldValue={setFieldValue} />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Switch checked={values.status} {...getFieldProps('status')} />}
                                    label="Active"
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>

                    <DialogActions sx={{ p: 3 }}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                {!isCreating && (
                                    <Tooltip title="Delete Category">
                                        <IconButton onClick={() => handleDelete(category?.id)} size="large">
                                            <DeleteIcon color="error" />
                                        </IconButton>
                                    </Tooltip>
                                )}
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Button type="button" variant="outlined" onClick={onCancel}>
                                        Cancel
                                    </Button>
                                    <Button type="submit" variant="contained" disabled={isSubmitting}>
                                        {category ? 'Edit' : 'Add'}
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </Form>
            </LocalizationProvider>
        </FormikProvider>
    );
};

CategoryAdd.propTypes = {
    category: PropTypes.object,
    range: PropTypes.object,
    handleDelete: PropTypes.func,
    handleCreate: PropTypes.func,
    handleUpdate: PropTypes.func,
    onCancel: PropTypes.func
};

export default CategoryAdd;
