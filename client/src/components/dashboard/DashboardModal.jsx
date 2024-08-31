import { Close } from "@mui/icons-material";
import { Box, Button, Modal } from "@mui/material";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";

function DashboardModal({ modalFormToOpen, table, toggleModal, setToggleModal }) {

  return (
    <Modal open={toggleModal} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ background: 'white', width: '60%', padding: '20px 0' }}>
        
            <Box sx={{ textAlign: 'right' }}>
            <Button sx={{ color: 'black', '&:hover': { background: 'none' } }}>
                <Close onClick={() => setToggleModal(false)} />
            </Button>
            </Box>

            {/* FORM */}
          {modalFormToOpen === 'create' 
            ? <CreateForm table={table} setToggleModal={setToggleModal} /> 
            : <EditForm table={table} setToggleModal={setToggleModal} />
          }
        </Box>
    </Modal>
  );
}

export default DashboardModal;
