import React from 'react';
import { Badge, Col } from 'antd'; 
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccout, WrapperTextHeaderSmall } from './style'; 
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'; 
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';


const HeaderComponent = () => {
  const navigate = useNavigate()
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }
  return (
    <div style={{width:'100%',background:'rgb(26,148,255)',display:'flex',justifyContent:'center'}}>
    <WrapperHeader gutter={16}>
      <Col span={5}>
        <WrapperTextHeader>
          
          BeeBadminton
        </WrapperTextHeader>
      </Col>
      <Col span={13}>
        <ButtonInputSearch
          size="large"
          textButton="Tìm kiếm"
          placeholder="Tìm sản phẩm" 
        />
      </Col>
      
      <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
        <WrapperHeaderAccout>
          <UserOutlined style={{ fontSize: '30px', color: '#fff' }} />
          <div>
            <WrapperTextHeaderSmall>Đăng Nhập/Đăng Kí</WrapperTextHeaderSmall>
            <div onClick={handleNavigateLogin} style={{cursor:'pointer'}}>
              <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
              <CaretDownOutlined />
            </div>
          </div>
        </WrapperHeaderAccout>
        <div>
          <Badge count={4} size="small">
            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
          
        </div>
      </Col>
    </WrapperHeader>
    </div>
  );
}

export default HeaderComponent;
