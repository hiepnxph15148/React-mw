import React from 'react';

import ReactDOM from 'react-dom';


export default function Protal({ popup = false, handelClosed = () => { } }) {

    if (typeof document === "undefined") return <div className='model'></div>

    const bodyElement = document.querySelector('body');

    if (!bodyElement) {

        return null;
    }

    return ReactDOM.createPortal(

        <div className={`model fixed inset-0 z-50 flex items-center justify-center p-5 ${popup ? "" :"invisible opacity-0"}`} >

            <div onClick={handelClosed} className="absolute inset-0 bg-black overlay bg-opacity-40"  >

            </div>

            {/*  */}

            <div className="model-content bg-white relative z-10 top-[20px]  left-[0px]">

                <div style={{ border: "1px solid #888" }} className=" top-[0px]  !bg-white w-[420px]">

                    <div className="!bg-[#034e94]">

                        <p className="text-white font-medium py-2.5 text-center uppercase font-Helvetica">Danh mục chứng khoán ký quỹ</p>

                        <span  onClick={handelClosed}  style={{ lineHeight: "39px" }} className='text-[#fff] right-[10px] cursor-pointer top-0 text-[35px] rounded-[20px] h-[39px]  absolute font-bold'>×</span>

                    </div>

                    {/*  */}

                    <div className="h-[500px] !bg-white">

                        {/*  */}

                        <div className='flex justify-around mx-5 mt-2'>

                            <input style={{ border: "1px solid #ccc" }} type="text" placeholder="Mã chứng khoán" className='w-[145px] text-[13px] h-[26px] text-left rounded-[4px] bg-[#ECECEC]' />




                            <input style={{ border: "1px solid #ccc" }} type="text" placeholder="Sàn niêm yết" className='w-[145px] h-[26px] text-[13px] text-left rounded-[4px] bg-[#ECECEC]' />

                        </div>

                        {/* style={{overflowY: "scroll",overflowX: "scroll"}} */}

                        <div   className='mx-auto '>

                            <div className='w-[400px]'>

                                <table className='mx-2 mt-3'>

                                    <thead className='bg-[#ECECEC]'>

                                        <tr style={{ border: "1px solid #ccc" }}>

                                            <th style={{ border: "1px solid #ccc" }} className='text-[12px]'>Mã CK</th>

                                            <th style={{ border: "1px solid #ccc" }} className='text-[12px]'>Sàn GD</th>

                                            <th style={{ border: "1px solid #ccc" }} className='text-[12px]'>Tỉ lệ(%)</th>

                                            <th style={{ border: "1px solid #ccc" }} className='text-[12px]'>Chọn</th>

                                            <th style={{ border: "1px solid #ccc" }} className='text-[12px]'>Giá trần tính SM(*)</th>

                                        </tr>

                                    </thead>

                                    <tbody>
                                        <tr className='hover:bg-[#EEFEED]' style={{ border: "1px solid #ccc" }}>  

                                            <td style={{ border: "1px solid #ccc" }} className='text-center !font-bold'>BCC</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center'>HNX.LISTED</td>

                                            <td style={{ border: "1px solid #ccc" }} className='pr-2 text-right'>30</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center text-[#337ab7] cursor-pointer hover:underline'>chọn</td>

                                            <td style={{ border: "1px solid #ccc" }} className=''></td>

                                        </tr>
                                        <tr className='hover:bg-[#EEFEED]' style={{ border: "1px solid #ccc" }}>  

                                            <td style={{ border: "1px solid #ccc" }} className='text-center !font-bold'>BCC</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center'>HNX.LISTED</td>

                                            <td style={{ border: "1px solid #ccc" }} className='pr-2 text-right'>30</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center text-[#337ab7] cursor-pointer hover:underline'>chọn</td>

                                            <td style={{ border: "1px solid #ccc" }} className=''></td>

                                        </tr>
                                        <tr className='hover:bg-[#EEFEED]' style={{ border: "1px solid #ccc" }}>  

                                            <td style={{ border: "1px solid #ccc" }} className='text-center !font-bold'>BCC</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center'>HNX.LISTED</td>

                                            <td style={{ border: "1px solid #ccc" }} className='pr-2 text-right'>30</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center text-[#337ab7] cursor-pointer hover:underline'>chọn</td>

                                            <td style={{ border: "1px solid #ccc" }} className=''></td>

                                        </tr>
                                        <tr className='hover:bg-[#EEFEED]' style={{ border: "1px solid #ccc" }}>  

                                            <td style={{ border: "1px solid #ccc" }} className='text-center !font-bold'>BCC</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center'>HNX.LISTED</td>

                                            <td style={{ border: "1px solid #ccc" }} className='pr-2 text-right'>30</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center text-[#337ab7] cursor-pointer hover:underline'>chọn</td>

                                            <td style={{ border: "1px solid #ccc" }} className=''></td>

                                        </tr>
                                        <tr className='hover:bg-[#EEFEED]' style={{ border: "1px solid #ccc" }}>  

                                            <td style={{ border: "1px solid #ccc" }} className='text-center !font-bold'>BCC</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center'>HNX.LISTED</td>

                                            <td style={{ border: "1px solid #ccc" }} className='pr-2 text-right'>30</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center text-[#337ab7] cursor-pointer hover:underline'>chọn</td>

                                            <td style={{ border: "1px solid #ccc" }} className=''></td>

                                        </tr>
                                        <tr className='hover:bg-[#EEFEED]' style={{ border: "1px solid #ccc" }}>  

                                            <td style={{ border: "1px solid #ccc" }} className='text-center !font-bold'>BCC</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center'>HNX.LISTED</td>

                                            <td style={{ border: "1px solid #ccc" }} className='pr-2 text-right'>30</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center text-[#337ab7] cursor-pointer hover:underline'>chọn</td>

                                            <td style={{ border: "1px solid #ccc" }} className=''></td>

                                        </tr>
                                        <tr className='hover:bg-[#EEFEED]' style={{ border: "1px solid #ccc" }}>  

                                            <td style={{ border: "1px solid #ccc" }} className='text-center !font-bold'>BCC</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center'>HNX.LISTED</td>

                                            <td style={{ border: "1px solid #ccc" }} className='pr-2 text-right'>30</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center text-[#337ab7] cursor-pointer hover:underline'>chọn</td>

                                            <td style={{ border: "1px solid #ccc" }} className=''></td>

                                        </tr>
                                        <tr className='hover:bg-[#EEFEED]' style={{ border: "1px solid #ccc" }}>  

                                            <td style={{ border: "1px solid #ccc" }} className='text-center !font-bold'>BCC</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center'>HNX.LISTED</td>

                                            <td style={{ border: "1px solid #ccc" }} className='pr-2 text-right'>30</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center text-[#337ab7] cursor-pointer hover:underline'>chọn</td>

                                            <td style={{ border: "1px solid #ccc" }} className=''></td>

                                        </tr>
                                        <tr className='hover:bg-[#EEFEED]' style={{ border: "1px solid #ccc" }}>  

                                            <td style={{ border: "1px solid #ccc" }} className='text-center !font-bold'>BCC</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center'>HNX.LISTED</td>

                                            <td style={{ border: "1px solid #ccc" }} className='pr-2 text-right'>30</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center text-[#337ab7] cursor-pointer hover:underline'>chọn</td>

                                            <td style={{ border: "1px solid #ccc" }} className=''></td>

                                        </tr>
                                        <tr className='hover:bg-[#EEFEED]' style={{ border: "1px solid #ccc" }}>  

                                            <td style={{ border: "1px solid #ccc" }} className='text-center !font-bold'>BCC</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center'>HNX.LISTED</td>

                                            <td style={{ border: "1px solid #ccc" }} className='pr-2 text-right'>30</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center text-[#337ab7] cursor-pointer hover:underline'>chọn</td>

                                            <td style={{ border: "1px solid #ccc" }} className=''></td>

                                        </tr>
                                        <tr className='hover:bg-[#EEFEED]' style={{ border: "1px solid #ccc" }}>  

                                            <td style={{ border: "1px solid #ccc" }} className='text-center !font-bold'>BCC</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center'>HNX.LISTED</td>

                                            <td style={{ border: "1px solid #ccc" }} className='pr-2 text-right'>30</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center text-[#337ab7] cursor-pointer hover:underline'>chọn</td>

                                            <td style={{ border: "1px solid #ccc" }} className=''></td>

                                        </tr>
                                        <tr className='hover:bg-[#EEFEED]' style={{ border: "1px solid #ccc" }}>  

                                            <td style={{ border: "1px solid #ccc" }} className='text-center !font-bold'>BCC</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center'>HNX.LISTED</td>

                                            <td style={{ border: "1px solid #ccc" }} className='pr-2 text-right'>30</td>

                                            <td style={{ border: "1px solid #ccc" }} className='text-center text-[#337ab7] cursor-pointer hover:underline'>chọn</td>

                                            <td style={{ border: "1px solid #ccc" }} className=''></td>

                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                        </div>

                <p className='mx-auto mt-3 font-bold text-center w-fit'>(*) Giá trần tính sức mua: Mức giá tối đa FPTS chấp <br/> nhận để tính sức mua với mã đó</p>

                    </div>

                </div>

            </div>

        </div>,

        bodyElement

    );

}