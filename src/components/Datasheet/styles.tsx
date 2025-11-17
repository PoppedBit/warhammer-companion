import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const DatasheetImageContainer = styled(Box)({
  position: 'fixed',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
});

export const DatasheetImage = styled('img')({
  maxWidth: '90vw',
  maxHeight: '90vh',
  borderRadius: '1',
  boxShadow: '24',
});