import React from 'react';
import Image from 'next/image';
import styles from '../../styles/components/CardLetters.module.css';
import Selo from '../../assets/selo-brasil.jpg';
import SeloBR from '../../assets/selo-colorido.jpg';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CardLetters() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <div className={styles.card}>
          {/* <Image alt="selo" src={Selo} /> */}

          <section className={styles.cardSection}>
            <div className={styles.card}>
              <div className={styles.flipCard}>
                <div className={styles.flipCardContainer}>
                  <div className={styles.cardFront}>
                    <div className={styles.cardFrontTp}>
                      <h2 className={styles.cardFrontHeading}>
                        <Image src={SeloBR} />
                      </h2>
                    </div>

                    <div className={styles.cardFrontBt}>
                      <p className={styles.cardFrontTextView}>View me</p>
                    </div>
                  </div>
                  <div className={styles.cardBack}>
                    <Image src={Selo} />
                  </div>
                </div>
              </div>

              <div className={styles.insidePage}>
                <div className={styles.insidePageContainer}>
                  <h3
                    className={`${styles.insidePageHeading} ${styles.insidePageHeading}`}
                  >
                    For urban lovers
                  </h3>
                  <p className={styles.insidePageText}>
                    As cities never sleep, there are always something going on,
                    no matter what time!
                  </p>
                  <Button variant="outlined" onClick={handleClickOpen}>
                 Read more
                </Button>
                </div>
              
              </div>
            </div>
          </section>
        </div>
        <div className={styles.modalLetter}>
        <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
      </BootstrapDialog>
        </div>
      </div>
    </>
  );
}
