import { CCarousel } from '@coreui/react';
import styled from 'styled-components';

export const StyledCarousel = styled(CCarousel)<{ width?: string; height?: string }>`
  max-width: ${({ width }) => width || '100%'};
  max-height: ${({ height }) => height || 'auto'};
  margin: auto; // Center it if needed
`;
