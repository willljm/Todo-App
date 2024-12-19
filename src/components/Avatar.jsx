import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Avatar() {
  return (
    <Stack direction="row" spacing={2}>
      
      <Avatar
        alt="Remy Sharp"
        src="/public/will.png"
        sx={{ width: 100, height: 100 }}
      />
    </Stack>
  );
}
