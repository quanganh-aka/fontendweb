import React from 'react';
import { StyleNameProduct,WrapperReportText,WrapperPriceText,WrapperDiscountText,WrapperCardStyle } from './style';
import {StarFilled} from '@ant-design/icons'

//const { Meta } = Card; // Destructure Meta from Card

const CardComponent = (props) => {
  // const {images}=props

  return (
    <WrapperCardStyle
      hoverable
      headStyle={{width:'200px',height:'200px'}}
      style={{ width: 200 }}
      bodyStyle={{padding:'10px'}}
      cover={<img alt="example" src="https://cdn.shopvnb.com/uploads/san_pham/vot-cau-long-yonex-astrox-100zz-chinh-hang-1.webp" />}
      
    >
      <StyleNameProduct>Yonex Astrox 100ZZ</StyleNameProduct>
      <WrapperReportText>
        <span style={{marginRight:'4px'}}>
        <span>4.96 </span><StarFilled style={{fontSize:'12px',color:'yellow'}}/>
        </span>
        <span>| Đã bán 1000+ </span>
        
        </WrapperReportText>
        <WrapperPriceText> 4.300.000đ
          <WrapperDiscountText style={{margin:'5px'}}>
             -5%
          </WrapperDiscountText>
        </WrapperPriceText>
      
    </WrapperCardStyle>
  );
};

export default CardComponent;