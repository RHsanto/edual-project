import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Box, Grid } from '@mui/material'
import { Link } from 'react-router-dom';
const EventDetails = () => {

  const eventDetails = useSelector(state => state.events.eventDetails);
  const status = useSelector(state => state.events.status);
  console.log(status)

  return (
    <div>
      <Container>
        <Box sx={{ width: '100%' }}>
          <Grid container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            className="course-details" >
            <Grid item xs={12} md={8}>
              <div className="details-1">
                <button>{eventDetails.tag}</button>
                <h1>{eventDetails.title}</h1>
                <div className="flex">
                  <div className="flex-1">
                    <img src={eventDetails.teacherImg} alt="" />
                    <div className="">
                      <p><small>Teacher</small></p>
                      <p>{eventDetails.teacher}</p>
                    </div>
                  </div>
                  <div className="flex-2">
                    <p><small> Last Update :</small></p>
                    <p>{eventDetails.date}</p>
                  </div>

                  <div className="flex-2">
                    <p><small>Location:</small></p>
                    <p>{eventDetails.place}</p>

                  </div>
                </div>
                <div className="img-description">
                  <img src={eventDetails.img} alt="" />
                  <h1>Description</h1>
                  <p>He legged it up the kyver have it mush super me old mucker cheeky naff that are you taking the piss, blow off down the pub bite your arm off the wireless boot cor blimey guvnor happy days bender what a load of rubbish, say pardon me horse play spiffing Why car boot gosh bubble and squeak. Cheers Richard bugger show off show off pick your nose and blow off get stuffed mate chancer in my flat loo, bevvy amongst hunky-dory bender bubble and squeak me old mucker vagabond, barmy spend a penny chimney pot young delinquent bum bag the bee’s knees chap, gosh nice one knees up the wireless Charles such a fibber. Mush barmy bleeding Jeffrey pardon me barney grub loo cup of tea bubble and squeak bugger all mate say, I bloke matie boy tickety-boo
                    give us a bell up the duff bugger lurgy wind up I don’t want no agro.</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className='details-2'>
                {/* <h1>${eventDetails.newPrice}
                  <span><del>{eventDetails.previousPrice}</del></span></h1> */}
                <li><i class="fas fa-hourglass-end"></i> End : <span>{eventDetails.time}</span></li>
                <li><i class="fas fa-hourglass-half"></i> Time : <span>{eventDetails.date}</span></li>
                <li><i class="fas fa-map-marker-alt"></i> Venue : <span>{eventDetails.place}</span></li>


                <Link to='/#'>
                  <button style={{ background: "#F2277E" }}>Join <i class="fas fa-arrow-right" style={{ color: "white" }}></i></button>
                </Link>
              </div>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default EventDetails;