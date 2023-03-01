import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from '../../stylesheets/Shop.module.css';
import { useCartContext } from '../../context/cart_context';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mui/material';


export default function Alert({ open, text }) {
  const isMobile = useMediaQuery('(max-width:400px)');
  const { ani_container } = useCartContext();
  return (
    <motion.section exit={{ opacity: 0 }}>
      <div className={styles.modal}>
        <Modal
          open={open}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <motion.div
            variants={ani_container}
            animate='animate'
            initial='initial'
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: isMobile ? '200px' : '235px',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: isMobile ? "20px":'22px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div>
                  <CheckCircleIcon
                    style={{ fill: '#32CD32' }}
                    fontSize='medium'
                  />{' '}
                </div>
                <div>
                  {' '}
                  <Typography sx={{ fontSize: '0.8rem' }}>{text}</Typography>
                </div>
              </div>
            </Box>
          </motion.div>
        </Modal>
      </div>
    </motion.section>
  );
}
