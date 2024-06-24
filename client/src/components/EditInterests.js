import React, { useState, useEffect, useContext } from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Checkbox, Button, Grid, Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import LuggageIcon from '@mui/icons-material/Luggage';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SchoolIcon from '@mui/icons-material/School';
import RoofingIcon from '@mui/icons-material/Roofing';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import PetsIcon from '@mui/icons-material/Pets';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import HealingIcon from '@mui/icons-material/Healing';
import GavelIcon from '@mui/icons-material/Gavel';
import TechnologyIcon from '../images/technology.png';
import ParentingIcon from '../images/parenting.png';
import ExamsIcon from '../images/exams.png';
import FashionIcon from '../images/fashion.png';
import BusinessIcon from '../images/business.png';
import LiteratureIcon from '../images/literature.png';
import SanatanIcon from '../images/sanatan.png';
import Header from './Header';
import { UserContext } from '../UserContext';
import { Navigate } from 'react-router-dom';


export default function InterestsPage() {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
  const categories = {
    Travel: <LuggageIcon />,
    Food: <FastfoodIcon />,
    Technology: <img src={TechnologyIcon} alt='TechnologyIcon' height={'28px'} width={'28px'} />,
    Education: <SchoolIcon />,
    Parenting: <img src={ParentingIcon} alt='ParentingIcon' height={'26px'} width={'26px'} />,
    "Home & Gardening": <RoofingIcon />,
    "Healthy living": <MedicationLiquidIcon />,
    "Pet care": <PetsIcon />,
    "Competitive exams": <img src={ExamsIcon} alt='ExamsIcon' height={'26px'} width={'26px'} />,
    Finance: <CurrencyRupeeIcon />,
    Learning: <AutoStoriesIcon />,
    Fashion: <img src={FashionIcon} alt='FashionIcon' height={'26px'} width={'26px'} />,
    Business: <img src={BusinessIcon} alt='BusinessIcon' height={'24px'} width={'24px'} />,
    "Addiction recovery": <SmokeFreeIcon />,
    Health: <HealingIcon />,
    Literature: <img src={LiteratureIcon} alt='LiteratureIcon' height={'28px'} width={'28px'} />,
    Law: <GavelIcon />,
    "Sanatan dharm": <img src={SanatanIcon} alt='SanatanIcon' height={'20px'} width={'20px'} />
  };

  const catKeys = Object.keys(categories);
  const [selectedInterests, setSelectedInterests] = useState([]);

  useEffect(() => {
    
    const fetchInterests = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/interests/${userInfo?.username}`, {
                method: 'GET',
                credentials: 'include'
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setSelectedInterests(data.interests);
            }
        } catch (err) {
            console.log(err);
        }
    };
    if(userInfo?.username){
        fetchInterests();
    }
}, [userInfo?.username]);


  const handleToggle = (value) => {
    const currentIndex = selectedInterests.indexOf(value);
    const newChecked = [...selectedInterests];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setSelectedInterests(newChecked);
  };

  const handleSubmit = async () => {
    console.log('Selected Interests: ', selectedInterests);
    console.log(userInfo);
    const username = userInfo.username;
    // Handle the submission logic here
    try {
        const response = await fetch('http://127.0.0.1:5000/edit-interests', {
          method: 'PUT',
          body: JSON.stringify({ username, selectedInterests }),
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        })
        const data = await response.json();
        if(response.ok){
            console.log("okkkk");
            setRedirect(true);
        }
      }
      catch (err) {
        console.log(err);
      }
  };

  if(redirect){
    return <Navigate to='/' />
  }

  return (
    <>
        <Header /> 
        {(userInfo?.username) && (<Container>
        <Grid container justifyContent="flex-start" alignItems="center" sx={{ paddingTop: '12px', paddingBottom: '12px' }}>
            <Typography variant='h4'>
            Your Interests
            </Typography>
            <Tooltip title="You will receive daily tips based on your interests">
            <IconButton sx={{marginTop:'12px',marginLeft:'4px'}}>
                <InfoIcon fontSize='small' />
            </IconButton>
            </Tooltip>
        </Grid>
        <Grid container spacing={2}>
            {catKeys.map((catName, index) => (
            <Grid item xs={12} sm={6} md={4} key={catName}>
                <List>
                <ListItem button onClick={() => handleToggle(catName)}>
                    <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={selectedInterests.indexOf(catName) !== -1}
                        tabIndex={-1}
                        disableRipple
                    />
                    </ListItemIcon>
                    <ListItemIcon>
                    {categories[catName]}
                    </ListItemIcon>
                    <ListItemText primary={<Typography fontWeight="bold" fontSize={'18px'}>{catName}</Typography>} />
                </ListItem>
                </List>
            </Grid>
            ))}
        </Grid>
        <Grid container justifyContent="center" sx={{ marginTop: '12px' }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save
            </Button>
        </Grid>
        </Container>)}
        {!(userInfo?.username) && (
                <h2 style={{ textAlign: 'center' }}>You logged out!!</h2>
            )}
        </>
  );
}