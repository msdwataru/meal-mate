import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: 2 }}>
      <Typography variant="body1" align="center">
        © 2023 My App. All rights reserved.
      </Typography>
    </Box>
  );
}
