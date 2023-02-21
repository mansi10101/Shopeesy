import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from "../../stylesheets/Shop.module.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Alert({open,text}) {

  return (
    <div className={styles.modal} >
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{display: 'flex', justifyContent:"center", alignItems:"center", gap:"12px"}}>
          <div><CheckCircleIcon style={{fill : '#32CD32'}} fontSize="large"  /> </div>
          <div> <Typography sx={{fontSize: "1.5rem"}} >{text}</Typography></div>
          
          </div>
        </Box>
      </Modal>
    </div>
  );
}