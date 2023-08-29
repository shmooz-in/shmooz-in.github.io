// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, IconButton, Link, Stack, Typography } from '@mui/material'; // Divider
import { Link as RouterLink } from 'react-router-dom';
// project import
import Chip from 'ui-component/extended/Chip';

// assets
// import Dribble from 'assets/images/landing/footer-dribble.png';
// import Freepik from 'assets/images/landing/footer-freepik.png';
// import Awards from 'assets/images/landing/footer-awards.png';

import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

// Link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.hint,
    '&:hover': {
        color: theme.palette.primary.main
    },
    '&:active': {
        color: theme.palette.primary.main
    }
}));

// =============================|| LANDING - FOOTER SECTION ||============================= //

const FooterSection = () => {
    const theme = useTheme();
    const textColor = theme.palette.mode === 'dark' ? 'text.secondary' : 'text.hint';
    const discover = [
        {
            title: 'Event Partners',
            link: 'https://shmooz.in'
        },
        {
            title: 'Venue Partners',
            link: 'https://shmooz.in'
        }
    ];

    // const dividerSX = {
    //     borderImageSlice: 1,
    //     borderImageSource: `linear-gradient(90deg, rgba(255, 255, 255, 0) -0.01%, rgba(255, 255, 255, 0.56) 51.97%, rgba(255, 255, 255, 0.03) 99.99%)`,
    //     opacity: 0.5
    // };

    return (
        <>
            <Container sx={{ mb: 5 }}>
                <Grid container spacing={6}>
                    {/* <Grid item xs={12}>
                        <Stack spacing={4.25}>
                            <Divider sx={dividerSX} />
                            <Stack
                                direction="row"
                                justifyContent="center"
                                spacing={{ xs: 1.5, sm: 6, md: 10, lg: 12 }}
                                sx={{ overflow: 'hidden' }}
                            >
                                <img src={Dribble} alt="dribble" />
                                <img src={Freepik} alt="freepik" />
                                <img src={Awards} alt="awards" />
                            </Stack>
                            <Divider sx={dividerSX} />
                        </Stack>
                    </Grid> */}
                    <Grid item xs={12}>
                        <Grid container spacing={8}>
                            <Grid item xs={12} md={4}>
                                <Stack spacing={{ xs: 2, md: 5 }}>
                                    <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                                        About Shmooz
                                    </Typography>
                                    <Typography variant="body2" color={textColor}>
                                        {`Shmooz is a social networking platform for events & outings. We believe that everyone should have
                                        the opportunity to connect with others who share their interests and passions. That's why we've
                                        created a platform that makes it easy to explore venues and discover, attend, and host events`}
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Grid container spacing={{ xs: 5, md: 2 }}>
                                    <Grid item xs={6} sm={3}>
                                        <Stack spacing={{ xs: 3, md: 5 }}>
                                            <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                                                Shmooz
                                            </Typography>
                                            <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                                                <FooterLink href="https://shmooz.in" target="_blank" underline="none">
                                                    Blog
                                                </FooterLink>
                                                <FooterLink href="https://shmooz.in" target="_blank" underline="none">
                                                    Documentation
                                                </FooterLink>
                                                <FooterLink href="https://shmooz.in" target="_blank" underline="none">
                                                    Change Log
                                                </FooterLink>
                                                <FooterLink href="https://shmooz.in" target="_blank" underline="none">
                                                    Support
                                                </FooterLink>
                                            </Stack>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={6} sm={3}>
                                        <Stack spacing={{ xs: 3, md: 5 }}>
                                            <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                                                Discover
                                            </Typography>
                                            <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                                                {discover.map((item, index) => (
                                                    <FooterLink href={item.link} target="_blank" underline="none" key={index}>
                                                        {item.title}
                                                        {item.isUpcoming && (
                                                            <Chip variant="outlined" size="small" label="Upcoming" sx={{ ml: 0.5 }} />
                                                        )}
                                                    </FooterLink>
                                                ))}
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ bgcolor: 'dark.dark', py: { xs: 3, sm: 1.5 } }}>
                <Container>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={{ xs: 1.5, sm: 1, md: 3 }}
                    >
                        <Stack direction="row" alignItems="center" spacing={{ xs: 3, sm: 1.5, md: 2 }}>
                            <IconButton size="small" component={Link} href="https://shmooz.in" target="_blank" aria-label="blog">
                                <PublicIcon sx={{ color: 'text.secondary', '&:hover': { color: 'error.main' } }} />
                            </IconButton>
                            <IconButton size="small" component={Link} href="https://twitter.com/" target="_blank" aria-label="twitter">
                                <TwitterIcon sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }} />
                            </IconButton>
                            <IconButton size="small" component={Link} href="https://instagram.com" target="_blank" aria-label="instagram">
                                <InstagramIcon sx={{ color: 'text.secondary', '&:hover': { color: 'warning.main' } }} />
                            </IconButton>
                            <IconButton size="small" component={Link} href="https://facebook.com" target="_blank" aria-label="facebook">
                                <FacebookIcon sx={{ color: 'text.secondary', '&:hover': { color: 'warning.main' } }} />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <Box sx={{ bgcolor: 'dark.dark', py: { xs: 3, sm: 1.5 } }}>
                <Container>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={{ xs: 1.5, sm: 1, md: 3 }}
                    >
                        <Typography>
                            <Typography sx={{ display: 'inline' }} color="secondary">
                                Shmooz{' '}
                            </Typography>
                            is managed by{' '}
                            <Link href="https://www.protofact.in/" target="_blank" underline="hover">
                                Protofact
                            </Link>
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={{ xs: 3, sm: 1.5, md: 2 }}>
                            <Button
                                size="small"
                                color="secondary"
                                component={Link}
                                href="https://shmooz.in"
                                target="_blank"
                                aria-label="blog"
                            >
                                Contact Us
                            </Button>
                            <Button
                                size="small"
                                color="secondary"
                                component={Link}
                                href="https://shmooz.in"
                                target="_blank"
                                aria-label="blog"
                            >
                                About Us
                            </Button>

                            <Typography
                                component={RouterLink}
                                to="/pages/privacy-policy"
                                variant="subtitle1"
                                sx={{
                                    color: theme.palette.mode === 'dark' ? theme.palette.grey[600] : 'grey.900',
                                    textDecoration: 'none'
                                }}
                            >
                                Privacy Policy
                            </Typography>
                            <Button
                                size="small"
                                color="secondary"
                                component={Link}
                                href="https://shmooz.in"
                                target="_blank"
                                aria-label="blog"
                            >
                                Cookie Policy
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default FooterSection;
