import { NoLuggageOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import ModalContainer from 'components/Common/ModalContainer';
import Footer from 'components/Common/Footer';
import Header from 'components/Header';
import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, selectCartIsUpdated } from 'redux/cartSlice';
import { selectIsLoggedIn } from 'redux/authSlice';
toast.configure();

const MainLayout = () => {
   const location = useLocation();
   const dispatch = useDispatch();
   const footerRef = useRef(null);
   const contentRef = useRef(NoLuggageOutlined);
   const isUpdated = useSelector(selectCartIsUpdated);
   const isLoggedIn = useSelector(selectIsLoggedIn);

   useEffect(() => {
      setTimeout(() => {
         const footerHeight = footerRef.current.offsetHeight;
         const headerHeight = 80;

         contentRef.current.style.minHeight = `calc(100vh - ${
            footerHeight + headerHeight
         }px)`;
      }, 100);
   }, []);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location.pathname]);

   useEffect(() => {
      if (!isUpdated || !isLoggedIn) return;
      dispatch(fetchCart());
   }, [isUpdated, dispatch, isLoggedIn]);

   return (
      <>
         <Header />

         <Box ref={contentRef}>
            <Outlet />
         </Box>

         <Footer ref={footerRef} />

         <ToastContainer
            position='top-center'
            autoClose={1500}
            hideProgressBar={true}
            closeOnClick
            pauseOnHover={false}
            pauseOnFocusLoss={false}
         />

         <ModalContainer />
      </>
   );
};

export default MainLayout;