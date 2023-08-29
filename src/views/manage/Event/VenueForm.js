// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, Typography, TextField, Autocomplete, Switch, Radio, Box } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getVenues } from 'store/slices/venue';
import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { LocationOnOutlined } from '@mui/icons-material';
import { getCities, getCountries, getStatesLocal } from 'store/slices/demographics';
import GoogleMapsAutoComplete from 'ui-component/extended/GoogleMapsAutoComplete';
import { GoogleMap, Marker, useGoogleMap, useLoadScript } from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const mapStyle_mono = [
    {
        elementType: 'geometry',
        stylers: [
            {
                color: '#f5f5f5'
            }
        ]
    },
    {
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#616161'
            }
        ]
    },
    {
        elementType: 'labels.text.stroke',
        stylers: [
            {
                color: '#f5f5f5'
            }
        ]
    },
    {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'administrative.land_parcel',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#bdbdbd'
            }
        ]
    },
    {
        featureType: 'administrative.neighborhood',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
            {
                color: '#eeeeee'
            }
        ]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#757575'
            }
        ]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
            {
                color: '#e5e5e5'
            }
        ]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#9e9e9e'
            }
        ]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
            {
                color: '#ffffff'
            }
        ]
    },
    {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'road.arterial',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#757575'
            }
        ]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
            {
                color: '#dadada'
            }
        ]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#616161'
            }
        ]
    },
    {
        featureType: 'road.local',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#9e9e9e'
            }
        ]
    },
    {
        featureType: 'transit',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [
            {
                color: '#e5e5e5'
            }
        ]
    },
    {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [
            {
                color: '#eeeeee'
            }
        ]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
            {
                color: '#c9c9c9'
            }
        ]
    },
    {
        featureType: 'water',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#9e9e9e'
            }
        ]
    }
];

const validationSchema = yup.object({
    venue_id: yup
        .string()
        .nullable()
        .when('is_partnered', (is_partnered, yup) => {
            if (is_partnered) {
                return yup.required('Venue is required');
            }
            return yup;
        })
});

const Places = () => {
    console.log(GOOGLE_MAPS_API_KEY);
    const libraries = useMemo(() => ['places'], []);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
};

const Map = () => {
    const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
    const [selected, setSelected] = useState(null);

    const [map, setMap] = useState(null);

    useEffect(() => {
        if (selected) {
            map.panTo(selected);
        }
    }, [selected]);

    return (
        <>
            {/* <div className="places-container">
                <PlacesAutocomplete setSelected={setSelected} />
            </div> */}
            <GoogleMapsAutoComplete setSelected={setSelected} />

            <GoogleMap
                zoom={12}
                center={center}
                mapContainerClassName="map-container"
                mapContainerStyle={{ width: '100%', height: '300px' }}
                onLoad={(map) => setMap(map)}
                options={{ streetViewControl: false, styles: mapStyle_mono }}
            >
                {selected && <Marker position={selected} />}
            </GoogleMap>
        </>
    );
};

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

const VenueForm = ({ detailsData, setDetailsData, handleNext, handleBack, setErrorIndex }) => {
    const formik = useFormik({
        initialValues: {
            country_id: detailsData.country_id,
            state_id: detailsData.state_id,
            city_id: detailsData.city_id,
            zipcode: detailsData.zipcode,
            address: detailsData.address,
            venue_id: detailsData.venue_id,
            is_partnered: detailsData.venue_id != null,
            online_event: detailsData.online_event,
            online_location: detailsData.online_location
        },
        validationSchema,

        onSubmit: (values, { setFieldError, setFieldTouched, setErrors }) => {
            console.log(formik);
            const updatedDetails = {
                ...values
            };

            if (updatedDetails.online_event) {
                // TODO Api not resetting
                updatedDetails.venue_id = null;
                updatedDetails.country_id = null;
                updatedDetails.state_id = null;
                updatedDetails.city_id = null;
                updatedDetails.zipcode = null;
                updatedDetails.address = null;
            } else {
                updatedDetails.online_location = null;
            }

            setDetailsData((oldDetailsData) => ({
                // TODO
                ...oldDetailsData,
                ...updatedDetails
            }));
            handleNext(updatedDetails, { setFieldTouched, setErrors, setFieldError, dirty: formik.dirty });
        }
    });

    /* const countries = [
        {
            id: 101,
            name: 'India',
            iso3: 'IND',
            numeric_code: '356',
            iso2: 'IN',
            phone_code: '91',
            capital: 'New Delhi',
            currency: 'INR',
            currency_name: 'Indian rupee',
            currency_symbol: '₹',
            tld: '.in',
            native: 'भारत',
            region: 'Asia',
            subregion: 'Southern Asia',
            timezones:
                "[{zoneName:'Asia\\/Kolkata',gmtOffset:19800,gmtOffsetName:'UTC+05:30',abbreviation:'IST',tzName:'Indian Standard Time'}]",
            translations: null,
            latitude: '20.00000000',
            longitude: '77.00000000',
            emoji: '🇮🇳',
            emojiU: 'U+1F1EE U+1F1F3',
            wikiDataId: null,
            status: true,
            created_at: null,
            updated_at: null,
            deleted_at: null
        }
    ];

    const states = [
        // TODO
        {
            id: 4030,
            country_id: 101,
            name: 'Gujarat',
            state_code: 'GJ',
            fips_code: null,
            iso2: null,
            type: 'state',
            latitude: '22.25865200',
            longitude: '71.19238050',
            wikiDataId: null,
            status: true,
            created_at: null,
            updated_at: null,
            deleted_at: null
        }
    ];

    const cities = [
        // TODO
        {
            id: 134096,
            state_id: 4030,
            country_id: 101,
            name: 'Surat',
            latitude: '21.17801000',
            longitude: '72.81189000',
            wikiDataId: 'Q4629',
            status: true,
            created_at: null,
            updated_at: null,
            deleted_at: null
        }
    ]; */

    /*    <Checkbox
                                        color="secondary"
                                        name="online_event"
                                        value={formik.values.online_event}
                                        onChange={formik.handleChange}
                                    /> */

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getVenues());
    }, [dispatch]);

    const { venues } = useSelector((state) => {
        console.log(state);
        return state.venue;
    });

    const [countries, setCountries] = useState([]);

    const [states, setStates] = useState([]);

    const {
        states: staticStates,
        countries: staticCountries,
        cities
    } = useSelector((state) => {
        console.log(state);
        return state.demographics;
    });
    React.useEffect(() => {
        if (staticCountries.length === 0) {
            dispatch(getCountries());
        }
    }, []);

    React.useEffect(() => {
        const validCountries = staticCountries.filter((country) => country.status === true);

        setCountries(validCountries);

        if (validCountries?.length === 1) {
            formik.setFieldValue('country_id', validCountries[0]?.id);
        }
    }, [staticCountries]);

    React.useEffect(() => {
        const validStates = staticStates.filter((state) => state.status === true);

        setStates(validStates);
        if (validStates?.length === 1) {
            formik.setFieldValue('state_id', validStates[0]?.id);
        }
    }, [staticStates]);

    React.useEffect(() => {
        if (formik.values.country_id) {
            dispatch(getStatesLocal(formik.values.country_id));
        }
    }, [formik.values.country_id]);

    React.useEffect(() => {
        if (formik.values.state_id) {
            dispatch(getCities(formik.values.state_id)); //
        }
    }, [formik.values.state_id]);

    const venueList = useMemo(() => venues.map((e) => ({ name: e.title, ...e })), [venues]);

    const selectedVenue = useMemo(() => venueList.find((e) => e.id === formik.values.venue_id), [formik.values.venue_id]);

    const isOfflineEvent = useMemo(() => !formik.values.online_event, [formik.values.online_event]);

    const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);

    const [selected, setSelected] = useState(null);

    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Venue Details
            </Typography>
            <form onSubmit={formik.handleSubmit} id="validation-forms">
                <Grid container spacing={3}>
                    <Grid container item xs={12} alignItems={'center'}>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={formik.values.online_event || false}
                                        name="online_event"
                                        // value={formik.values.online_event || false}
                                        onChange={(e) => formik.setFieldValue('online_event', e.target.checked)}
                                        // onChange={formik.handleChange}
                                    />
                                }
                                label="Is Online"
                                /* control={<Radio />}
                                label={
                                    <Stack spacing={0.25}>
                                        <Typography variant="subtitle1">Standard Delivery (Free)</Typography>
                                        <Typography variant="caption">Delivered on Monday 8 Jun</Typography>
                                    </Stack>
                                } */
                            />
                        </Grid>
                        {!isOfflineEvent && (
                            <Grid item xs={8}>
                                <TextField
                                    id="online_location"
                                    name="online_location"
                                    label="Link"
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    value={formik.values.online_location}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                    }}
                                    error={formik.touched.online_location && Boolean(formik.errors.online_location)}
                                    helperText={formik.touched.online_location && formik.errors.online_location}
                                />
                            </Grid>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        {/*  <GoogleMapsAutoComplete setSelected={setSelected} /> */}
                        <Places />
                    </Grid>
                    {isOfflineEvent && (
                        <Grid container item xs={12}>
                            <Grid item xs={4}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={formik.values.is_partnered || false}
                                            name="is_partnered"
                                            onChange={(e) => {
                                                formik.setFieldValue('is_partnered', e.target.checked);
                                                if (!e.target.checked) formik.setFieldValue('venue_id', null);
                                            }}
                                            // onChange={formik.handleChange}
                                        />
                                    }
                                    label="Choose Venue"
                                />
                            </Grid>
                            {formik.values.is_partnered && (
                                <Grid item xs={8}>
                                    <Autocomplete
                                        id="venue_id"
                                        name="venue_id"
                                        options={venueList}
                                        getOptionLabel={(option) => `${option?.name}, ${option?.address || ''}`}
                                        isOptionEqualToValue={(option, value) => {
                                            console.log(value);
                                            return option.id === value.id;
                                        }}
                                        value={venueList.find((e) => e.id === formik.values.venue_id) || null}
                                        onChange={(e, value) => {
                                            console.log(value);
                                            formik.setFieldValue('venue_id', value?.id || null); // TODO important
                                        }}
                                        renderOption={(props, option) => {
                                            const { address, city, state, country, zipcode } = option || {};

                                            const secondaryString = [city?.name, state?.name, country?.name, zipcode]
                                                .filter(Boolean)
                                                .join(', ');

                                            return (
                                                <li {...props}>
                                                    <Grid container alignItems="center">
                                                        <Grid item sx={{ display: 'flex', width: 44 }}>
                                                            <LocationOnOutlined sx={{ color: 'text.secondary' }} />
                                                        </Grid>
                                                        <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                                                            <Box component="span" sx={{ fontWeight: 'bold' }}>
                                                                {option.name}
                                                            </Box>

                                                            <Typography variant="body2" color="text.secondary">
                                                                {address}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                {secondaryString}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </li>
                                            );
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                autoComplete="shipping address"
                                                label="Venue *"
                                                placeholder="Select Venue"
                                                error={formik.touched.venue_id && Boolean(formik.errors.venue_id)}
                                                helperText={formik.touched.venue_id && formik.errors.venue_id}
                                            />
                                        )}
                                    />
                                </Grid>
                            )}
                        </Grid>
                    )}
                    {isOfflineEvent && (
                        <Grid item xs={12}>
                            {!formik.values.is_partnered ? (
                                <TextField
                                    id="address"
                                    name="address"
                                    label="Address"
                                    fullWidth
                                    // autoComplete="shipping address-line1"
                                    value={formik.values.address || ''}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                    }}
                                    error={formik.touched.address && Boolean(formik.errors.address)}
                                    helperText={formik.touched.address && formik.errors.address}
                                />
                            ) : (
                                <TextField
                                    id="address_venue"
                                    name="address_venue"
                                    label="Address (Venue)"
                                    autoFocus
                                    disabled
                                    fullWidth
                                    value={selectedVenue?.address || ''}
                                    onChange={() => {}}
                                />
                            )}
                        </Grid>
                    )}

                    {isOfflineEvent && (
                        <Grid item xs={12} sm={6}>
                            {!formik.values.is_partnered ? (
                                <Autocomplete
                                    id="country_id"
                                    name="country_id"
                                    options={countries}
                                    getOptionLabel={(option) => option.name}
                                    isOptionEqualToValue={(option, value) => {
                                        console.log(value);
                                        return option.id === value.id;
                                    }}
                                    value={countries.find((e) => e.id == formik.values.country_id) || null}
                                    onChange={(e, value) => {
                                        console.log(value);
                                        formik.setFieldValue('country_id', value?.id); // TODO important
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            autoComplete="shipping country"
                                            label="Country *"
                                            placeholder="Select Country"
                                            error={formik.touched.country_id && Boolean(formik.errors.country_id)}
                                            helperText={formik.touched.country_id && formik.errors.country_id}
                                        />
                                    )}
                                />
                            ) : (
                                <TextField
                                    label="Country (Venue)"
                                    autoFocus
                                    disabled
                                    fullWidth
                                    value={selectedVenue?.country?.name || ''}
                                    onChange={() => {}}
                                />
                            )}
                        </Grid>
                    )}

                    {isOfflineEvent && (
                        <Grid item xs={12} sm={6}>
                            {!formik.values.is_partnered ? (
                                <Autocomplete
                                    id="state_id"
                                    name="state_id"
                                    options={states}
                                    getOptionLabel={(option) => option.name}
                                    isOptionEqualToValue={(option, value) => {
                                        console.log(value);
                                        return option?.id === value?.id;
                                    }}
                                    value={states.find((e) => e.id == formik.values.state_id) || null}
                                    onChange={(e, value) => {
                                        console.log(value);
                                        formik.setFieldValue('state_id', value?.id); // TODO important
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            autoComplete="shipping state"
                                            label="State *"
                                            placeholder="Select State"
                                            error={formik.touched.state_id && Boolean(formik.errors.state_id)}
                                            helperText={formik.touched.state_id && formik.errors.state_id}
                                        />
                                    )}
                                />
                            ) : (
                                <TextField
                                    label="State (Venue)"
                                    autoFocus
                                    disabled
                                    fullWidth
                                    value={selectedVenue?.state?.name || ''}
                                    onChange={() => {}}
                                />
                            )}
                        </Grid>
                    )}
                    {isOfflineEvent && (
                        <Grid item xs={12} sm={6}>
                            {!formik.values.is_partnered ? (
                                <Autocomplete
                                    id="city_id"
                                    name="city_id"
                                    options={cities}
                                    getOptionLabel={(option) => option.name}
                                    isOptionEqualToValue={(option, value) => {
                                        console.log(value);
                                        return option.id === value.id;
                                    }}
                                    value={cities.find((e) => e.id == formik.values.city_id) || null}
                                    onChange={(e, value) => {
                                        console.log(value);
                                        formik.setFieldValue('city_id', value?.id); // TODO important
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            autoComplete="shipping city"
                                            label="City *"
                                            placeholder="Select city"
                                            error={formik.touched.city_id && Boolean(formik.errors.city_id)}
                                            helperText={formik.touched.city_id && formik.errors.city_id}
                                        />
                                    )}
                                />
                            ) : (
                                <TextField
                                    label="City (Venue)"
                                    autoFocus
                                    disabled
                                    fullWidth
                                    value={selectedVenue?.city?.name || ''}
                                    onChange={() => {}}
                                />
                            )}
                        </Grid>
                    )}

                    {isOfflineEvent && (
                        <Grid item xs={12} sm={6}>
                            {!formik.values.is_partnered ? (
                                <TextField
                                    id="zipcode"
                                    name="zipcode"
                                    label="Zip / Postal code"
                                    fullWidth
                                    autoComplete="shipping postal-code"
                                    value={formik.values.zipcode || ''}
                                    onChange={formik.handleChange}
                                    error={formik.touched.zipcode && Boolean(formik.errors.zipcode)}
                                    helperText={formik.touched.zipcode && formik.errors.zipcode}
                                />
                            ) : (
                                <TextField
                                    id="zipcode_venue"
                                    name="zipcode_venue"
                                    label="Zipcode (Venue)"
                                    // autoFocus
                                    disabled
                                    fullWidth
                                    value={selectedVenue?.zipcode || ''}
                                    onChange={() => {}}
                                />
                            )}
                        </Grid>
                    )}
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
            </form>
        </>
    );
};

VenueForm.propTypes = {
    detailsData: PropTypes.object,
    setDetailsData: PropTypes.func,
    handleNext: PropTypes.func,
    setErrorIndex: PropTypes.func
};

export default VenueForm;
