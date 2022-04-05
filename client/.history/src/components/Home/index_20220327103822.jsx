import { Box, Container, Grid } from '@mui/material';
import ProductCard from 'components/ProductCard';
import React from 'react';
import Services from './Services';
import Slider from './Slider';
import TitleSection from './TitleSection';

const Home = () => {
   return (
      <>
         <Slider />
         <Services />
         <Box component={'section'} py={2}>
            <TitleSection title={'Sản phẩm mới'} subTitle={'Các sản phẩm mới có tại cửa hàng'} />
            <Grid container>
               <Grid item md={2} lg={3}>
                  <ProductCard />
               </Grid>
            </Grid>
         </Box>
         <Box component={'section'} py={2}>
            <TitleSection title={'Sản phẩm bán chạy'} subTitle={'Các sản phẩm bán chạy tại cửa hàng'} />
            <Grid container>
               <Grid item md={2} lg={3}>
                  <ProductCard />
               </Grid>
            </Grid>
         </Box>
      </>
   );
};

export default Home;