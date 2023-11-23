import * as React from 'react';
import Rating from '@mui/material/Rating';
import arrow from '../assets/arrow.svg'
import report from '../assets/report.svg'
import saved from '../assets/saved.svg'
import save from '../assets/save.svg'
import view from '../assets/view.svg'



const CustomCard = (props) => {
    const {data} = props;
    const [value, setValue] = React.useState(data.rating);
    const [shortList,setShorListed] = React.useState(data.shortlisted);

    const toggle = ()=>{
        data.shortlisted = !shortList;
        setShorListed(!shortList);
    }

  return (

    
    <div className='row Card'>

        {/* left column */}
        <div className='col-9 inner'>
            <h2 >{data.name}</h2>
            <div>
            <Rating
            className='star'
            name="text-feedback"
            value={value}
            readOnly
            precision={0.5}
            />
            </div>
            <div className='descriptoion'>
                <p>{data.description}</p>
            </div>
            <div className='d-flex mb-3 justify-content-start numbers'>
                <div className='text-center me-3'>
                    <h2 className='fw-5'>{data.project}</h2>
                    <p>Projests</p>
                </div>
                <div className='text-center mx-3'>
                    <h2>{data.year}</h2>
                    <p>year</p>
                </div>
                <div className='text-center mx-3'>
                    <h2>{data.price}</h2>
                    <p>Price</p>
                </div>

            </div>
            <div id='contact'>
                <p>{data.contacts[0]}</p>
                <p>{data.contacts[1]}</p>
            </div>
        </div>

        {/* right column */}
        
        <div className='col-3 d-flex flex-column justify-content-around border-start option'>
            
            <button>
            <img src={arrow} className ='iconSize' alt="icon" srcSet="" />
            <label htmlFor="">Details</label>
            </button>
            
            <button>
            <img src={view} className ='iconSize' alt="icon" srcSet="" />
            <label htmlFor="">Hide</label>
            </button>

            <button onClick={()=>toggle(data.id)}>
            <img src={shortList?saved:save} className ='iconSize' alt="icon" srcSet="" />
            <label htmlFor="">shortlist</label>
            </button>

            <button>
            <img src={report} className ='iconSize' alt="icon" srcSet="" />
            <label htmlFor="">Report</label>
            </button>

        </div>

    </div>

  )
}

export default CustomCard
