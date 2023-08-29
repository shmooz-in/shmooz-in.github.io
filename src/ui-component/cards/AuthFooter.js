// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://shmooz.co.in" target="_blank" underline="hover">
            shmooz.co.in
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://www.protofact.in/" target="_blank" underline="hover">
            &copy; Protofact LLC
        </Typography>
    </Stack>
);

export default AuthFooter;
