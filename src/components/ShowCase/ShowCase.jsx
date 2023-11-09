import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import arrowSwap from "../../Assets/icons/arrow-swap-horizontal.svg"
import kalendar from "../../Assets/icons/calendar.svg";
import arrowDown from "../../Assets/icons/arrow-down.svg"
import girlImg from "../../Assets/images/girl.png"
import "./ShowCase.css"

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function ShowCase() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='mt-[5%] reys'>
            <div className=" w-full container mx-auto">
                <h1 className='text-center text-[64px] text-[#0057BE]  mb-[2%]'>Самый правильный путь к путешествиям</h1>
                <Box sx={{ width: '100%' }}>
                    <Box>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab iconPosition='start' icon={<AirplanemodeActiveIcon />} label="Авиа" {...a11yProps(0)} />
                            <Tab iconPosition='start' icon={<CorporateFareIcon />} label="Отели" {...a11yProps(1)} />
                            <Tab iconPosition='start' icon={<TrainOutlinedIcon />} label="Ж/д" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <div className='bg-[#0057BE] h-[66px] flex items-center px-[3px] rounded-lg'>
                            <input className='h-[60px] rounded-l-lg border border-[#c0bfbf] outline-none px-[10px]' type="text" placeholder='Откуда' />
                            <div className='h-[60px] border border-[#c0bfbf] outline-none px-[10px] bg-white w-[60px] flex items-center justify-center'>
                                <img src={arrowSwap} alt="" />
                            </div>
                            <input className='h-[60px] border border-[#c0bfbf] outline-none px-[10px]' type="text" placeholder='Куда' />
                            <div className='h-[60px] border border-[#c0bfbf] outline-none px-[10px] bg-white w-[180px]  flex items-center justify-between'>
                                <p className='text-[#AEAEAE]'>Когда</p>
                                <img src={kalendar} alt="" />
                            </div>
                            <input className='h-[60px] border border-[#c0bfbf] outline-none px-[10px]' type="text" placeholder='Обратно' />
                            <div className='h-[60px] rounded-r-lg border border-[#c0bfbf] outline-none px-[10px] bg-white w-[226px]  flex items-center justify-between'>
                                <div>
                                    <h3>1 пассажир</h3>
                                    <p className='text-[#AEAEAE]'>Эконом класс</p>
                                </div>

                                <img src={arrowDown} alt="" />
                            </div>
                            <div className='flex items-center justify-center w-[200px]'>
                                <button className='bg-[transparent] mr-3 text-white h-[66px] w-full'>
                                    Найти
                                </button>
                            </div>
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <div className='bg-[#0057BE] h-[66px] flex items-center px-[3px] rounded-lg'>
                            <input className='h-[60px] rounded-l-lg border border-[#c0bfbf] outline-none px-[10px]' type="text" placeholder='Откуда' />
                            <div className='h-[60px] border border-[#c0bfbf] outline-none px-[10px] bg-white w-[60px] flex items-center justify-center'>
                                <img src={arrowSwap} alt="" />
                            </div>
                            <input className='h-[60px] border border-[#c0bfbf] outline-none px-[10px]' type="text" placeholder='Куда' />
                            <div className='h-[60px] border border-[#c0bfbf] outline-none px-[10px] bg-white w-[180px]  flex items-center justify-between'>
                                <p className='text-[#AEAEAE]'>Когда</p>
                                <img src={kalendar} alt="" />
                            </div>
                            <input className='h-[60px] border border-[#c0bfbf] outline-none px-[10px]' type="text" placeholder='Обратно' />
                            <div className='h-[60px] rounded-r-lg border border-[#c0bfbf] outline-none px-[10px] bg-white w-[226px]  flex items-center justify-between'>
                                <div>
                                    <h3>1 пассажир</h3>
                                    <p className='text-[#AEAEAE]'>Эконом класс</p>
                                </div>

                                <img src={arrowDown} alt="" />
                            </div>
                            <div className='flex items-center justify-center w-[200px]'>
                                <button className='bg-[transparent] mr-3 text-white h-[66px] w-full'>
                                    Найти
                                </button>
                            </div>
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <div className='bg-[#0057BE] h-[66px] flex items-center px-[3px] rounded-lg'>
                            <input className='h-[60px] rounded-l-lg border border-[#c0bfbf] outline-none px-[10px]' type="text" placeholder='Откуда' />
                            <div className='h-[60px] border border-[#c0bfbf] outline-none px-[10px] bg-white w-[60px] flex items-center justify-center'>
                                <img src={arrowSwap} alt="" />
                            </div>
                            <input className='h-[60px] border border-[#c0bfbf] outline-none px-[10px]' type="text" placeholder='Куда' />
                            <div className='h-[60px] border border-[#c0bfbf] outline-none px-[10px] bg-white w-[180px]  flex items-center justify-between'>
                                <p className='text-[#AEAEAE]'>Когда</p>
                                <img src={kalendar} alt="" />
                            </div>
                            <input className='h-[60px] border border-[#c0bfbf] outline-none px-[10px]' type="text" placeholder='Обратно' />
                            <div className='h-[60px] rounded-r-lg border border-[#c0bfbf] outline-none px-[10px] bg-white w-[226px]  flex items-center justify-between'>
                                <div>
                                    <h3>1 пассажир</h3>
                                    <p className='text-[#AEAEAE]'>Эконом класс</p>
                                </div>

                                <img src={arrowDown} alt="" />
                            </div>
                            <div className='flex items-center justify-center w-[200px]'>
                                <button className='bg-[transparent] mr-3 text-white h-[66px] w-full'>
                                    Найти
                                </button>
                            </div>
                        </div>
                    </CustomTabPanel>
                </Box>
                <div className='bg-[#F7F7F7] w-[857px] h-[256px] flex relative mx-auto mt-[2%] py-[15px] px-[30px]'>
                    <div className="">
                        <h1 className='text-[#222222] text-[40px] font-bold  mb-[15px]'>Секономьте на ваших перелетах</h1>
                        <p className=' text-[#222222] text-[20px] font-normal  leading-[26px] mb-[30px]'>Покупайте у нас билеты дешевле и при этом получайте бонусы и <br /> кэшбэк на каждый свой рейс!</p>
                        <button className='text-white text-[18px] font-semibold bg-[#00A8FF] border-none p-[15px] rounded-lg'>Хочу сэкономить</button>
                    </div>
                    <img className='absolute left-[660px] bottom-0' src={girlImg} alt="" />
                </div>
            </div>
        </div>
    )

}



export default ShowCase