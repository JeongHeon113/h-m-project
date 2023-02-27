import { Container } from 'react-bootstrap';
import Nav from './component/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from './component/SideNav';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import AllProducts from './page/AllProducts';
import Login from './page/Login';
import PrivateRoute from './route/PrivateRoute';
import './App.css';


//1. 전체상품페이지, 고르인, 상품상세페이지
//1-1 navigation bar
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//4. 상품디테일을 눌렀으나, 로그인이 안되어있는 경우 로그인 페이지가 먼저나옴.
//5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//7. 로그아웃 버튼을 누르면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보임
//8. 로그인을 하면 로그아웃이 보이고 로그아웃을하면 로그인이 보임
//9. 상품을 검색할 수 있다.
function App() {
  const [authenticate,setAuthenticate]=useState(false)
  const [sideWidth,setSideWidth]=useState(0)
  const menuList=['여성','Divided','남성','신생아/유아','아동','H&M Home','Sale','지속가능성']
  return (
    <Container id='my-container'>
      <SideNav menuList={menuList} sideWidth={sideWidth} setSideWidth={setSideWidth}/>
      <Nav menuList={menuList} authenticate={authenticate} setAuthenticate={setAuthenticate} setSideWidth={setSideWidth}/>
      <Routes>
        <Route path='/' element={<AllProducts/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </Container>
  );
}

export default App;
