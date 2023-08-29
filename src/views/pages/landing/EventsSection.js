// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Badge, CardMedia, Container, Link, Stack, Typography } from '@mui/material';

// third-party
import Slider from 'react-slick';

// project imports
import SubCard from 'ui-component/cards/SubCard';

// assets
import Angular from 'assets/images/landing/frameworks/angular.svg';
import Bootstrap from 'assets/images/landing/frameworks/bootstrap.svg';
import Django from 'assets/images/landing/frameworks/django.svg';
import Codeigniter from 'assets/images/landing/frameworks/codeigniter.svg';
import DotNet from 'assets/images/landing/frameworks/dot-net.svg';
import Flask from 'assets/images/landing/frameworks/flask.svg';
import Shopify from 'assets/images/landing/frameworks/shopify.svg';
import FullStack from 'assets/images/landing/frameworks/full-stack.svg';
import Vue from 'assets/images/landing/frameworks/vue.svg';
import EventCard from 'ui-component/cards/EventCard';

export const frameworks = [
    {
        title: 'Event Partners',
        logo: Shopify,
        link: 'https://shmooz.in'
    }
];

// =============================|| LANDING - FRAMWORK SECTION ||============================= //

const EventsSection = () => {
    const theme = useTheme();

    const settings = {
        dots: true,
        className: 'center',
        infinite: false,
        centerPadding: '60px',
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 500,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1534,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            }
        ]
    };

    const event = {
        id: 5,
        image: 'prod-5.png',
        time: 'Fri, Sep 1 · 4:00 AM IST',
        name: 'Fashion Fair',
        brand: 'Canon',
        offer: '30%',
        description: 'Fashion Dress...',
        about: 'About the event',
        quantity: 50,
        rating: 3.5,
        discount: 15,
        salePrice: 15.99,
        offerPrice: 12.99,
        gender: 'male',
        categories: ['electronics', 'camera'],
        colors: ['warningMain', 'primary200'],
        popularity: 1228018139791360,
        date: 5998507519377408,
        created: '2023-08-19T01:26:44.269Z',
        isStock: true,
        new: 25
    };

    return (
        <>
            <Container sx={{ mb: 6 }}>
                <Stack spacing={0.25} alignItems="center">
                    <Typography variant="h2" align="center" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
                        Upcoming Events
                    </Typography>
                    {/* <Typography variant="body2" align="center" sx={{ pt: 1 }}>
                        Each framework is sold separately on different platforms. Click to{' '}
                        <Link href="#" target="_blank" underline="hover">
                            learn more.
                        </Link>
                    </Typography> */}
                </Stack>
            </Container>
            <Box
                sx={{
                    overflow: 'hidden',
                    div: {
                        // textAlign: 'center'
                    },
                    '.slick-track': {
                        display: { xs: 'flex', xl: 'inherit' }
                    },
                    '& .slick-dots': {
                        position: 'initial',
                        mt: 4,
                        '& li button:before': {
                            fontSize: '0.75rem'
                        },
                        '& li.slick-active button:before': {
                            opacity: 1,
                            color: 'primary.main'
                        }
                    }
                }}
            >
                <Slider {...settings}>
                    <EventCard
                        id={event.id}
                        image={event.image}
                        time={event.time}
                        name={event.name}
                        description={event.description}
                        offerPrice={event.offerPrice}
                        salePrice={event.salePrice}
                        rating={event.rating}
                        color={event.colors ? event.colors[0] : undefined}
                    />
                    <EventCard
                        id={event.id}
                        image={event.image}
                        time={event.time}
                        name={event.name}
                        description={event.description}
                        offerPrice={event.offerPrice}
                        salePrice={event.salePrice}
                        rating={event.rating}
                        color={event.colors ? event.colors[0] : undefined}
                    />
                </Slider>
            </Box>
        </>
    );
};

export default EventsSection;
