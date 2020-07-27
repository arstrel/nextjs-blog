import { container, title } from './material-kit-react';

const callToActionStyle = {
  container,
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  actionContainer: {
    backgroundColor: 'rgba(220, 220, 220, 0.65)',
    borderRadius: '5px',
  },
  '@media (max-width: 576px)': {
    smallDescription: {
      margin: 0,
    },
  },
};

export default callToActionStyle;
