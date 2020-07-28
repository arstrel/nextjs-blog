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
    color: 'black'
  },
  actionContainer: {
    backgroundColor: 'rgba(250, 210, 180, 0.5)',
    borderRadius: '5px',
  },
  '@media (max-width: 576px)': {
    smallDescription: {
      margin: 0,
    },
  },
  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0'
  }
};

export default callToActionStyle;
