 import{ BiSupport, BiStar} from 'react-icons/bi'
 import { GiSelfLove} from 'react-icons/gi'
 import {FaExchangeAlt} from 'react-icons/fa'
 import { GrAdd } from 'react-icons/gr'
 import { MdOutlineCancel} from 'react-icons/md'
const WhyUsMore = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 '>
            <div className='shadow-md p-8'>
              <BiSupport className='text-2xl'></BiSupport>
              <div>
                <h2 className='font-semibold'>Premium Support</h2>
                <p>We’re available for helping you, <br /> including holiday </p>
              </div>
            </div>
            <div className='shadow-md p-8'>
              <BiStar className='text-2xl'></BiStar>
              <div>
                <h2 className='font-semibold'>High quality cars</h2>
                <p>Our cars ‘re certificated by gurus <br /> who has 20+ experience years </p>
              </div>
            </div>
            <div className='shadow-md p-8'>
              <GiSelfLove className='text-2xl'></GiSelfLove>
              <div>
                <h2 className='font-semibold'>Trusted by 10+ clients</h2>
                <p>We have 10k+ happy clients who love <br /> us and ready for our cars </p>
              </div>
            </div>
            <div className='shadow-md p-8'>
              <FaExchangeAlt className='text-2xl'></FaExchangeAlt>
              <div>
                <h2 className='font-semibold'>7 days exchanges</h2>
                <p>Up to 7 days exchange for any <br />problem with our cars</p>
              </div>
            </div>
            <div className='shadow-md p-8'>
              <MdOutlineCancel className='text-2xl'></MdOutlineCancel>
              <div>
                <h2 className='font-semibold'>Free cancelation</h2>
                <p>No extra fee, you can cancel your <br /> booking anytime </p>
              </div>
            </div>
            <div className='shadow-md p-8'>
              <GrAdd className='text-2xl'></GrAdd>
              <div>
                <h2 className='font-semibold'>And more features</h2>
                <p>This space is too small to show you <br /> everything we have</p>
              </div>
            </div>
        </div>
    );
};

export default WhyUsMore;