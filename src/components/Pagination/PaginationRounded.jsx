import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({numberQuest, setCurQuest}) {
  return (
    <Stack spacing={2} alignItems='center'>
      <Pagination 
        count={numberQuest} 
        shape="rounded" 
        hidePrevButton hideNextButton
        onClick={(e) => {
          setCurQuest(e.target.textContent - 1)
        }}
      />
    </Stack>
  );
}