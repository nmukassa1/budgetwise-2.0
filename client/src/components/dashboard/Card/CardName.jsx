import { MoreHoriz } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useRef, useState } from "react";

function CardName({title}) {

    const selectionRef = useRef()

    const handleSelectonBox = () => {
      if (selectionRef.current.style.display === '' || selectionRef.current.style.display === 'none') {
        selectionRef.current.style.display = 'block';
      } else {
        selectionRef.current.style.display = 'none';
      }
    }

    function openModal(e){
        setToggleModal(true)
        selectionRef.current.style.display = 'none';

        // Function that will check if the button contains a className of "create" or "edit"
        function checkClassNameExist(name){
          const arr = e.target.className.split(' ');
          return arr.includes(name)
        }
        
        if(checkClassNameExist('create')){
          setModalFormToOpen('create')
        } else if(checkClassNameExist('edit')){
          setModalFormToOpen('edit')
        }
    }

    const [toggleModal, setToggleModal] = useState(false)
    const [modalFormToOpen, setModalFormToOpen] = useState(undefined)

    return (
        <Typography component="h1" sx={{fontSize: '.9rem', zIndex: '999', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: '0', background: 'white' }}>
            {title}
            <Box sx={{position: 'relative'}}>
              <IconButton size="small" onClick={handleSelectonBox}>
                <MoreHoriz />
              </IconButton>

              <Box ref={selectionRef} sx={{display: 'none', position: 'absolute', right: '0', background: 'white', border: '1px solid', fontSize: '.7rem', width: '140px'}}>
                <Button className='create' onClick={openModal} sx={{fontSize: 'inherit', color: 'black', width: '100%', '&:hover': { background: 'hsla(0, 0%, 90%)'}}}>Create Budget</Button>
                <Button className='edit' onClick={openModal} sx={{fontSize: 'inherit', color: 'black', width: '100%', '&:hover': { background: 'hsla(0, 0%, 90%)'}}}>Edit</Button>
              </Box>

                {/* <DashboardModal modalFormToOpen={modalFormToOpen} name={name} toggleModal={toggleModal} setToggleModal={setToggleModal} /> */}
            </Box>
        </Typography>
      );
}

export default CardName;