import React from 'react'
import CachedIcon from '@mui/icons-material/Cached';
const StockBalance = (status:any) => {
  return (

    <div className={`bottom__sdCKhoan bottom__sdTien mr-[3%] float-left ${status.status?'ml-[13%]':'absolute top-[110px] ml-[25px]'}  `} id="bottomSdCKhoan" >   
    <div className="bottom__sdCKhoan__title SDTM">
      <div className="divSoDuCK">
        <span className="divSoDuCK__title px-2.5 text-[#0055ba] uppercase text-15px leading-[25px]">SỐ DƯ CHỨNG KHOÁN</span>
        <CachedIcon style={{color:'#1d60bc',fontSize:18,fontWeight:600,marginBottom:2}}/>
      </div>
      <div className="groupSwitch groupSwitchTachKL hidden" title="- Chế độ “Tự động tách khối lượng”: KH chỉ cần nhập khối lượng, hệ thống sẽ tự động chọn hợp đồng để bán theo thứ tự ưu tiên: (1) Chứng khoán kỹ quỹ, (2) Chứng khoán thường
- Lưu ý: Hệ thống chỉ tự động chọn lô chẵn. KH bán lô lẻ cần chọn từng hợp đồng">
        <span>Tự động tách khối lượng<sup><img src="/images/info4.png" width={10} height={10} /></sup>:</span>
        <label className="switch switchTachKL hidden" id="switchLabel">
          <input type="checkbox" id="ckTachKL" />
          <span className="slider round sliderKL roundKL">
            <span className="on onKL">Bật</span>
            <span className="off offKL">Tắt</span>
          </span>
        </label>
      </div>
    </div>
    <div className="bottom__sdCKhoan__content" style={{display: 'block', overflow: 'auto', maxHeight: '343px'}}>
        <table>
          <thead>
            <tr >
              <th className="bottom__sdCKhoan__content__thead__mack font-normal">Mã CK</th>
              <th className="bottom__sdCKhoan__content__thead__sl hidden">Số lượng</th>
              <th className="bottom__sdCKhoan__content__thead__kl font-normal">K.lượng</th>
              <th className="bottom__sdCKhoan__content__thead__klban hidden" title="Khối lượng bán tương ứng với từng hợp đồng">K.lượng bán</th>
              <th className="bottom__sdCKhoan__content__thead__tlv" title="Tỷ lệ vay hiện tại của hợp đồng" style={{display: 'none'}}>TLV</th>
              <th className="bottom__sdCKhoan__content__thead__ngdh" title="Ngày đáo hạn" style={{display: 'none'}}>Ngày ĐH</th>
              <th className="bottom__sdCKhoan__content__thead__mahd" style={{display: 'none'}}>Mã HĐ</th>
              <th className="bottom__sdCKhoan__content__thead__chonTM font-normal">Chọn</th>
              <th className="bottom__sdCKhoan__content__thead__chonKQ" style={{display: 'none'}}>Chọn</th>
            </tr>
          </thead>
          <tbody id="tbdStockBalance" data-symbol-filter><tr className="sell"><td className="L bottom__sdCKhoan__content__tbody__mack">AAA</td><td className="bottom__sdCKhoan__content__tbody__kl R">100</td><td className="bottom__sdCKhoan__content__tbody__chonTM"><input type="button" className="btn btnSellStockBalance" defaultValue="BÁN" /></td></tr><tr className="sell"><td className="L bottom__sdCKhoan__content__tbody__mack">AAM</td><td className="bottom__sdCKhoan__content__tbody__kl R">798</td><td className="bottom__sdCKhoan__content__tbody__chonTM"><input type="button" className="btn btnSellStockBalance" defaultValue="BÁN" /></td></tr><tr className="sell"><td className="L bottom__sdCKhoan__content__tbody__mack">AAV</td><td className="bottom__sdCKhoan__content__tbody__kl R">100</td><td className="bottom__sdCKhoan__content__tbody__chonTM"><input type="button" className="btn btnSellStockBalance" defaultValue="BÁN" /></td></tr><tr className="sell"><td className="L bottom__sdCKhoan__content__tbody__mack">BID</td><td className="bottom__sdCKhoan__content__tbody__kl R">200</td><td className="bottom__sdCKhoan__content__tbody__chonTM"><input type="button" className="btn btnSellStockBalance" defaultValue="BÁN" /></td></tr><tr className="sell"><td className="L bottom__sdCKhoan__content__tbody__mack">BVH</td><td className="bottom__sdCKhoan__content__tbody__kl R">200</td><td className="bottom__sdCKhoan__content__tbody__chonTM"><input type="button" className="btn btnSellStockBalance" defaultValue="BÁN" /></td></tr><tr className="sell"><td className="L bottom__sdCKhoan__content__tbody__mack">DLG</td><td className="bottom__sdCKhoan__content__tbody__kl R">100</td><td className="bottom__sdCKhoan__content__tbody__chonTM"><input type="button" className="btn btnSellStockBalance" defaultValue="BÁN" /></td></tr><tr className="sell"><td className="L bottom__sdCKhoan__content__tbody__mack">FLC</td><td className="bottom__sdCKhoan__content__tbody__kl R">100</td><td className="bottom__sdCKhoan__content__tbody__chonTM"><input type="button" className="btn btnSellStockBalance" defaultValue="BÁN" /></td></tr><tr className="sell"><td className="L bottom__sdCKhoan__content__tbody__mack">FPT</td><td className="bottom__sdCKhoan__content__tbody__kl R">100</td><td className="bottom__sdCKhoan__content__tbody__chonTM"><input type="button" className="btn btnSellStockBalance" defaultValue="BÁN" /></td></tr><tr className="sell"><td className="L bottom__sdCKhoan__content__tbody__mack">FTS</td><td className="bottom__sdCKhoan__content__tbody__kl R">200</td><td className="bottom__sdCKhoan__content__tbody__chonTM"><input type="button" className="btn btnSellStockBalance" defaultValue="BÁN" /></td></tr><tr className="sell"><td className="L bottom__sdCKhoan__content__tbody__mack">GVR</td><td className="bottom__sdCKhoan__content__tbody__kl R">100</td><td className="bottom__sdCKhoan__content__tbody__chonTM"><input type="button" className="btn btnSellStockBalance" defaultValue="BÁN" /></td></tr></tbody>
        </table>
      </div>
      <div className="bottom__sdCKhoan__footer" style={{paddingBottom: '15px'}}>
      <span id="spanShowAll" style={{cursor: 'pointer'}}>Hiện tất cả</span>
      <span id="spanShowLimit" style={{cursor: 'pointer', display: 'none'}}>Thu gọn</span>
      <div className="bottom-mobile mobileS" style={{display: 'none'}}>
        <img src="/images/icon-next.png" />
      </div>
    </div>
  </div>
 
  )
}

export default StockBalance