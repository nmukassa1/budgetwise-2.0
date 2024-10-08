import { MoreHoriz } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useCallback, useRef, useState } from "react";
import DashboardModal from "../DashboardModal";

// Wrap with React.memo to prevent unnecessary re-renders
const CardName = React.memo(({ title }) => {
  const table = title.toLowerCase().replace(/\s/g, '');

  const selectionRef = useRef(null);
  const [toggleModal, setToggleModal] = useState(false);
  const [modalFormToOpen, setModalFormToOpen] = useState(undefined);

  const handleSelectonBox = useCallback(() => {
    if (selectionRef.current) {
      selectionRef.current.style.display =
        selectionRef.current.style.display === 'none' || !selectionRef.current.style.display
          ? 'block'
          : 'none';
    }
  }, []);

  const openModal = useCallback((e) => {
    setToggleModal(true);
    if (selectionRef.current) {
      selectionRef.current.style.display = 'none';
    }

    // Check className existence
    const classList = e.target.className.split(' ');
    if (classList.includes('create')) {
      setModalFormToOpen('create');
    } else if (classList.includes('edit')) {
      setModalFormToOpen('edit');
    }
  }, []);

  return (
    <Typography
      component="h1"
      sx={{
        fontSize: '.9rem',
        zIndex: '999',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: '0',
        background: 'white',
      }}
    >
      {title}
      <Box sx={{ position: 'relative' }}>
        <IconButton size="small" onClick={handleSelectonBox}>
          <MoreHoriz />
        </IconButton>
        <Box
          ref={selectionRef}
          sx={{
            display: 'none',
            position: 'absolute',
            right: '0',
            background: 'white',
            border: '1px solid',
            fontSize: '.7rem',
            width: '140px',
          }}
        >
          <Button
            className='create'
            onClick={openModal}
            sx={{
              fontSize: 'inherit',
              color: 'black',
              width: '100%',
              '&:hover': { background: 'hsla(0, 0%, 90%)' },
            }}
          >
            Create Budget
          </Button>
          <Button
            className='edit'
            onClick={openModal}
            sx={{
              fontSize: 'inherit',
              color: 'black',
              width: '100%',
              '&:hover': { background: 'hsla(0, 0%, 90%)' },
            }}
          >
            Edit
          </Button>
        </Box>
        <DashboardModal
          modalFormToOpen={modalFormToOpen}
          table={table}
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
        />
      </Box>
    </Typography>
  );
});

export default CardName;
